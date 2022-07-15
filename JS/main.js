const lineas = document.querySelectorAll('.linea');

document.querySelector('.contenedor-menu').addEventListener('click', () => {

    document.querySelector('.contenedor-menu').classList.toggle('active');
    document.querySelector('.menu-desplegable').classList.toggle('menu-desplegable-activo');
    
    lineas.forEach(linea => {
        linea.classList.toggle('active');
    })
});