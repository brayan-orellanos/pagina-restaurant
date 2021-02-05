(function () {
    // propiedades del objeto parallax
    const propParallax = {
        section: document.querySelector('.parallax'),
        recorrido: null,
        limite: null

    }


    // metodos del objeto parallax
    const metParallax = {

        inicio: function () {
            window.addEventListener('scroll', metParallax.scrollParallax) // nuevo evento scroll
        },

        scrollParallax: function () {
            propParallax.recorrido = window.pageYOffset // pageyoffset calcula la cantidad de pixeles que se han recorrido en la pagina

            // offsettop calcula la distancia que hay entre el inicio de la pagina y el top del elemento que estoy seleccionando
            // offsetheight calcula la altura del elemento seleccionado en este caso la section parallax 
            propParallax.limite = propParallax.section.offsetTop + propParallax.section.offsetHeight

            // window.outerheight calcula el tamaño de la pantalla en pixeles
            if (propParallax.recorrido > propParallax.section.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
                propParallax.section.style.backgroundPositionY = (propParallax.recorrido - propParallax.section.offsetTop) / 1.5 + 'px'
            } else {
                propParallax.section.style.backgroundPositionY = 0
            }
        }
    }

    metParallax.inicio()
}())