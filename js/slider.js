(function () {
    
    // propiedades slider
    const propSlider = {
        slider: document.getElementById('slider'),
        primerSlide: null
    }


    // metodos slider
    const metSlider = {

        /* el setinterval para la transition */
        inicio: function () {
            setInterval(metSlider.moverSlide, 3000)
        },

        moverSlide: function () {
            /* transition */
            propSlider.slider.style.transition = 'all 1s ease'
            propSlider.slider.style.marginLeft = '-100%'

            /* retraso del cambio de imagen */
            setTimeout(function () {
                /* selecciona el primer hijo del slider */
                propSlider.primerSlide = propSlider.slider.firstElementChild

                /* se añade el primerslide de arriba y se pone al final con appendchild*/
                propSlider.slider.appendChild(propSlider.primerSlide)

                /* se quita la transition para que no halla error con el ease */
                propSlider.slider.style.transition = 'unset'

                /* se quita el margin para que quede en la imagen actual */
                propSlider.slider.style.marginLeft = 0;
            }, 1000)
        }
    }

    /* se llama la funcion y vuelve a iniciar */
    metSlider.inicio()
}())