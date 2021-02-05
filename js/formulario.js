(function () {
    // propiedades objeto formulario
    const propFormulario = {

        // llamo al formulario por el name
        formulario: document.formulario_contacto,
        // llamo a los elementos del formulario con la propiedad elements
        elementos: document.formulario_contacto.elements,
        error: null,
        textoError: null
    }

    // metodos objeto formulario
    const metFormulario = {

        inicio: function () {
            // obtener los elementos por medio de un ciclo
            for (let i = 0; i < propFormulario.elementos.length; i++) {
                // si el input es de la propiedad type o nodename que es el nombre de la etiqueta realizar el condicional
                if (propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea') {
                    // al hacer focus en un elemento i realiazr el evento
                    propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput)
                    // al hacer blur fuera del focus i relaizar el evento
                    propFormulario.elementos[i].addEventListener('blur', metFormulario.blurbInput)
                }
            }

            propFormulario.formulario.addEventListener('submit', metFormulario.validarInput)
        },

        focusInput: function () {
            // obtener el padre del elemento input con children[1]se obtiene el segundo hijo que seria el label 
            // y se le añade la clase active que ya fue definida en el css
            this.parentElement.children[1].className = 'label active'
        },

        blurbInput: function () {
            // solo si el valor de los input esta vacio quitar el active
            if (this.value == '') {
                this.parentElement.children[1].className = 'label'
            }
        },

        validarInput: function (e) {
            for (let i = 0; i < propFormulario.elementos.length; i++) {
                // si elemento del formulario esta vacio prevenir el envio con preventdefault
                if (propFormulario.elementos[i].value == '') {
                    e.preventDefault()
                    // se crea un nuevo condicional para crear el parrafo de error solo si el div solo tiene el input y label, menos de 3
                    if (propFormulario.elementos[i].parentElement.children.length < 3) {

                        propFormulario.error = document.createElement('p')
                        propFormulario.textoError = document.createTextNode('por favor llena el campo del formulario ' + propFormulario.elementos[i].name)
                        propFormulario.error.appendChild(propFormulario.textoError)
                        propFormulario.error.className = 'error'

                        // se le añade al padre de los elementos o el div el nuevo parrafo error creado
                        propFormulario.elementos[i].parentElement.appendChild(propFormulario.error)

                    }
                    // si el valor del input no esta vacio eliminar el parrafo
                } else {

                    if (propFormulario.elementos[i].parentElement.children.length >= 3) {
                        propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0]
                        propFormulario.elementos[i].parentElement.removeChild(propFormulario.error)
                    }
                }
            }
        }

    }

    metFormulario.inicio()
}())