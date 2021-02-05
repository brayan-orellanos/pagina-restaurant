(function () {
    // objeto con las propiedades

    /* en este objeto se crean las variables que se van a utilizar en el lightbox */
    const propLightbox = {
        imgContainer: document.getElementsByClassName('lightbox'),
        imagen: null,
        imagenSrc: null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        cerrarModal: null,
        animacion: 'fade'
    }


    // objeto de los metodos
    const metLightbox = {

        /* 
        con el for en la funcion se obtienen todos las imagenes del contenedor y
        y se obtiene la que se le da click con el evento
        */
        inicio: function () {
            for (let i = 0; i < propLightbox.imgContainer.length; i++) {
                propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen)
            }
        },

        /* en captura imagen se obtiene la imagen que se le dio click en la funcion de arriba */
        capturaImagen: function () {
            propLightbox.imagen = this
            metLightbox.lightbox(propLightbox.imagen)
        },

        lightbox: function (imagen) {

            /* se guarda el url del background de css en la variable imagenSrc de arriba */
            propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2) // window.getcomputedstyle obtiene todos los estilos del elemento seleccionado

            /* se le añade al body un nuevo elemento div y se le añaden atributos */
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container')

            /* se añade el div creado arriba a una variable */
            propLightbox.lightbox_container = document.getElementById('lightbox_container')

            /* estilos para el div creado anteriormente */
            propLightbox.lightbox_container.style.width = '100%'
            propLightbox.lightbox_container.style.height = '100%'
            propLightbox.lightbox_container.style.position = 'fixed'
            propLightbox.lightbox_container.style.zIndex = '100'
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,.8)'
            propLightbox.lightbox_container.style.top = '0'
            propLightbox.lightbox_container.style.left = '0'

            /* en el div creado anteriormente se le añade un nuevo div llamado modal */
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal')

            /* se añade el div modal recien creado a una variable lamada modal */
            propLightbox.modal = document.getElementById('modal')

            /* al div modal se le da un alto de 100% */
            propLightbox.modal.style.height = '100%'

            /* se crea un nuevo elemento imagen en el div modal creado anteriormente y se le da de atributo src el url obtenido en imagenSrc */
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc)

            /* se le añade la clase imagen modal a la imagen creada anteriormente */
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal')

            /* 
            se creo una variable llamada fade en variables al principio se le da una opacity=0 y depues de unos segundos pasa la opacity=1 
            y se le añadio una transition en el css con la clase que se le dio arriba para el cambio de opacity
            */
            if (propLightbox.animacion == 'fade') {
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 0

                setTimeout(function () {
                    document.getElementsByClassName('imagen-modal')[0].style.opacity = 1
                }, 100)
            }

            /* con el innerhtml y el += se le añade un nuevo elemento i, ademas de la imagen, al div modal */
            propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>'

            /* el i recien creado se guarda en una variable */
            propLightbox.cerrarModal = document.getElementById('cerrar_modal')

            /* se le añade un evento al i con la funcion de abajo */
            propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrar_modal)
        },

        /* esta funcion es para el i de arriba */
        cerrar_modal: function () {
            /* elimina el div y sus elementos, creado en el body llamado lightbox_container con removechild */
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container)
        }
    }

    /* siempre hay que llamar la funcion para que funcione */
    metLightbox.inicio()
}())