//! Menú hamburguesa, trnasición de horizontal a cruz: */
const lineas = document.querySelectorAll('.linea');

document.querySelector('.contenedor-menu').addEventListener('click', () => {

    document.querySelector('.contenedor-menu').classList.toggle('active');
    document.querySelector('.menu-desplegable').classList.toggle('menu-desplegable-activo');

    lineas.forEach(linea => {
        linea.classList.toggle('active');
    })
});
//* ________________________________________________ */

/* Desplazamiento horizontal FullPage: */
const fullPage = document.getElementById('fullPage');
let topY = 0;
let scrollTop = 0;
window.addEventListener('scroll', e => {
    // e.preventDefault();

    let prevScroll = scrollTop;

    scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];

    const scrollMax = document.documentElement.scrollHeight / 8;
    // document.documentElement['scrollTop'] = scrollMax;


}, {
    passive: true
})