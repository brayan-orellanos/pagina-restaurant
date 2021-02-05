(function () {
    // objeto con propiedades de tab
    // propiedades o variables del objeto
    const propTabs = {
        // seleccionamos el primer elmento del encabezado y contenido
        primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
        primer_contenido: document.getElementById('contenido_menu').firstElementChild,
        enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
        li_encabezado: document.querySelectorAll('#encabezado_menu li'),
        divs_contenido: document.querySelectorAll('#contenido_menu > div'),
        contenido_activo: null
    }


    // objeto con metodos de Tab
    const metTabs = {

        inicio: function () {
            // se le añade la clase active al primer elemento del div contenido y el ul encabezado
            propTabs.primer_encabezado.className = 'active'
            propTabs.primer_contenido.className = 'active'

            // ciclo para seleccionar los elementos del ul encabezado, los li
            for (let i = 0; i < propTabs.enlaces_encabezado.length; i++) {
                // se selecciona el i o elemento a de los li, que se le da click con el evento
                propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento)
            }

        },

        // la e son los elementos
        evento: function (e) {
            e.preventDefault() //previene que los enlaces lo envien a otro enlace y se recargue la pagina
            for (let i = 0; i < propTabs.li_encabezado.length; i++) {
                // se vacia la clase de los elementos del ul encabezado
                propTabs.li_encabezado[i].className = ''
            }

            for (let i = 0; i < propTabs.divs_contenido.length; i++) {
                // se vacia la clase de los elementos del div contenido
                propTabs.divs_contenido[i].className = ''
            }

            // se le añade la clase active al padre de enlaces_encabezados o li que es padre del a seleccionado con el evento
            this.parentElement.className = 'active'

            // se selecciona el atributo href de enlaces_encabezado
            propTabs.contenido_activo = this.getAttribute('href')

            // se le da la clase active al contenido_activo seleccionado con el evento o click
            document.querySelector(propTabs.contenido_activo).className = 'active'

            // opacity o para la transition dada en css
            document.querySelector(propTabs.contenido_activo).style.opacity = 0

            // opacity 1 para el tiempo de la transition de css
            setTimeout(function () {
                document.querySelector(propTabs.contenido_activo).style.opacity = 1
            }, 100)
        }
    }

    metTabs.inicio()
}())