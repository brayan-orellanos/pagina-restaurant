// propiedades del objeto menu movil
const propMenu = {
    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
}

// metodos del objeto menu movil
const metMenu = {
    
    inicio: function() {

        propMenu.burger_menu.addEventListener('click', metMenu.toogleMenu)

        // se llama todos los elementos con un for
        for (let i = 0; i < propMenu.elem_menu.length; i++) {
            // aldarle click a un elemento del menu, se cierre el menu con la funcion ocultar
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu)               
        }
    },

    toogleMenu: function() {
        // si esta en falso o inactivo el menu, al darle click que sea verdadero o se active
        if(propMenu.menu_activo == false) {

            propMenu.menu_activo = true
            // se le añade ademas de la clase que ya tiene una clase active que ya se hizo en css
            propMenu.slideMenu.className = propMenu.slideMenu.className  + ' active'

        } else {
            // de lo contrario si es diferente de falso, esta activo, que al dar click vuelva a false y se oculte
            propMenu.menu_activo = false
            // se remplaza la clase active que se le dio por un espacio
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '')
        }
    },

    ocultarMenu: function() {
        // al darle click a un elemento el menu vuelva a false y se oculte
        propMenu.menu_activo = false
        // se le quite la clase  active
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '')
    }
}

metMenu.inicio()