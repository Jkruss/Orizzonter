document.addEventListener('DOMContentLoaded', function() {
    const cloud = document.getElementById("cloud");
    const barraLateral = document.querySelector(".barra-lateral");
    const spans = document.querySelectorAll(".barra-lateral span");
    const palanca = document.querySelector(".switch");
    const circulo = document.querySelector(".circulo");
    const menu = document.querySelector(".menu");
    const main = document.querySelector("main");
    const enlaces = document.querySelectorAll('.navegacion a');
    const secciones = document.querySelectorAll('.seccion-contenido');

    // Función para alternar la barra lateral
    function toggleSidebar() {
        barraLateral.classList.toggle("mini-barra-lateral");
        main.classList.toggle("min-main");
        spans.forEach((span) => {
            span.classList.toggle("oculto");
        });
        
        // Ajustar el margen del contenido principal
        if (barraLateral.classList.contains("mini-barra-lateral")) {
            main.style.marginLeft = "80px";
        } else {
            main.style.marginLeft = "250px";
        }
    }

    // Event listener para el botón de menú en móviles
    menu.addEventListener("click", () => {
        barraLateral.classList.toggle("max-barra-lateral");
        if (barraLateral.classList.contains("max-barra-lateral")) {
            menu.children[0].style.display = "none";
            menu.children[1].style.display = "block";
        } else {
            menu.children[0].style.display = "block";
            menu.children[1].style.display = "none";
        }
    });

    // Event listener para el modo oscuro
    palanca.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        circulo.classList.toggle("prendido");
    });

    // Event listener para el botón de colapsar/expandir la barra lateral
    cloud.addEventListener("click", toggleSidebar);

    // Event listeners para los enlaces de navegación
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            const seccionId = enlace.getAttribute('data-section');
            
            // Remover la clase 'active' de todos los enlaces y secciones
            enlaces.forEach(el => el.classList.remove('active'));
            secciones.forEach(sec => sec.classList.remove('active'));
            
            // Agregar la clase 'active' al enlace clickeado y a la sección correspondiente
            enlace.classList.add('active');
            document.getElementById(seccionId).classList.add('active');

            // En dispositivos móviles, cerrar el menú después de seleccionar una opción
            if (window.innerWidth <= 600) {
                barraLateral.classList.remove("max-barra-lateral");
                menu.children[0].style.display = "block";
                menu.children[1].style.display = "none";
            }
        });
    });

    // Manejo del menú de usuario
    const menuIcon = document.querySelector('.menu-icon');
    const menuOpciones = document.querySelector('.menu-opciones');

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        menuOpciones.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!menuOpciones.contains(e.target) && !menuIcon.contains(e.target)) {
            menuOpciones.classList.remove('active');
        }
    });

    // Manejo de las opciones del menú
    const opcionesMenu = document.querySelectorAll('.opcion-menu');
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            const action = opcion.getAttribute('data-action');
            switch(action) {
                case 'login':
                    console.log('Iniciar sesión');
                    // Aquí iría la lógica para iniciar sesión
                    break;
                case 'cambiar-foto':
                    console.log('Cambiar foto de perfil');
                    // Aquí iría la lógica para cambiar la foto de perfil
                    break;
                case 'configuracion':
                    console.log('Abrir configuración');
                    // Aquí iría la lógica para abrir la configuración
                    break;
            }
            menuOpciones.classList.remove('active');
        });
    });

    // Ajustar el diseño inicial basado en el ancho de la ventana
    function adjustLayout() {
        if (window.innerWidth <= 600) {
            barraLateral.classList.add("mini-barra-lateral");
            main.style.marginLeft = "0";
        } else {
            barraLateral.classList.remove("mini-barra-lateral");
            main.style.marginLeft = "250px";
        }
    }

    // Llamar a adjustLayout al cargar la página y cuando se redimensiona la ventana
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("");
    circulo.classList.toggle("prendido");
});

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (código anterior sin cambios) ...

    // Manejo del menú de usuario
    const menuIcon = document.querySelector('.menu-icon');
    const menuOpciones = document.querySelector('.menu-opciones');

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        menuOpciones.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!menuOpciones.contains(e.target) && !menuIcon.contains(e.target)) {
            menuOpciones.classList.remove('active');
        }
    });

    // Manejo de las opciones del menú
    const opcionesMenu = document.querySelectorAll('.opcion-menu');
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', (e) => {
            e.preventDefault();
            const action = opcion.getAttribute('data-action');
            switch(action) {
                case 'login':
                    console.log('Iniciar sesión');
                    // Aquí iría la lógica para iniciar sesión
                    break;
                case 'cambiar-foto':
                    console.log('Cambiar foto de perfil');
                    // Aquí iría la lógica para cambiar la foto de perfil
                    break;
                case 'configuracion':
                    console.log('Abrir configuración');
                    // Aquí iría la lógica para abrir la configuración
                    break;
            }
            menuOpciones.classList.remove('active');
        });
    });

    // ... (código posterior sin cambios) ...
});