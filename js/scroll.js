(function () {
    // propiedades del objeto scroll
    const propScroll = {
        posicion: window.pageYOffset,
        scroll_suave: document.getElementsByClassName('scroll-suave'),
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        section_distancia: null,
        intervalo: null
    }

    // metodos del objeto scroll
    const metScroll = {

        inicio: function () {
            // se obtienen todos los elementos de clase scroll suave con un ciclo
            for (let i = 0; i < propScroll.scroll_suave.length; i++) {
                // se le añade un evento al scroll_suave que se le de click, a los enlaces del menu
                propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse)
            }

            // se obtienen todos los elementos de clase volver arriba con un ciclo
            for (let i = 0; i < propScroll.volver_arriba.length; i++) {
                // se le añade un evento al volver_arriba que se le de click, a los enlaces del menu con clase volver-arriba
                propScroll.volver_arriba[i].addEventListener('click', metScroll.subir)
            }
        },

        moverse: function (e) {
            // con e como parametro de la funcion obtengo el elemento que se le da el evento o click
            // preventdefault quita los efectos que trae el navegador por defecto
            e.preventDefault()
            // se limpia el setinterval antes de iniciar la funcion
            clearInterval(propScroll.intervalo)
            // se toma el atribtu href del enlace con el evento o click y se añade a una propiedad
            propScroll.destino = this.getAttribute('href')
            // el que se selecciono arriba el href se le añade el offsettop y se le descuenta el tamaño del menu que es 94
            propScroll.section_distancia = document.querySelector(propScroll.destino).offsetTop - 94

            propScroll.posicion = window.pageYOffset
            // se guarda el intervalo en una propiedad y se inicia la funcion del intervalo
            propScroll.intervalo = setInterval(function () {

                // si la posicion es menor a la distacia, que al darle click se mueva de a 30 px , como una transition
                if (propScroll.posicion < propScroll.section_distancia) {
                    propScroll.posicion += 30

                    // y si es mayor que se detenga el setinterval
                    if (propScroll.posicion >= propScroll.section_distancia) {
                        clearInterval(propScroll.intervalo)
                    }
                } else {

                    // si la posicion es mayor a la distacia, que al darle click se mueva de a -30 px, como una transition    
                    propScroll.posicion -= 30

                    // y si es menor que se detenga el setinterval
                    if (propScroll.posicion <= propScroll.section_distancia) {
                        clearInterval(propScroll.intervalo)
                    }
                }

                // el window.scrollto desplaza la pagina a la posicion determinada del evento o elemento que se le dio click
                window.scrollTo(0, propScroll.posicion)
            }, 15)
        },

        subir: function (e) {
            e.preventDefault()
            clearInterval(propScroll.intervalo)
            // se llama la nueva posicion en la que se encuentr el window, al darle click
            propScroll.posicion = window.pageYOffset
            propScroll.intervalo = setInterval(function () {
                // si la posicion es mayor a 0, o el inicio
                if (propScroll.posicion > 0) {

                    // que al darle click al elemento con el evento subir que sea de -30px
                    propScroll.posicion -= 30

                    // y si es mayor limpiar el setinterval
                    if (propScroll.posicion <= 0) {
                        clearInterval(propScroll.intervalo)
                    }
                } else {
                    // retornar para que se reinicie todo
                    return
                }

                window.scrollTo(0, propScroll.posicion)
            }, 15)

        }
    }

    metScroll.inicio()
}())