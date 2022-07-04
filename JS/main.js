console.log("NFT");
// new fullpage('#fullPage', {
//     autoScrolling: true,
//     navigation: true,
//     anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
// });

const flipCardForCanva = () => {

    document.querySelector(".conteiner--img").classList = ' conteiner--img flip--img';
    document.querySelector(".conteiner--canva").classList = ' conteiner--canva flip--canva';


    setTimeout(() => {
        document.querySelector(".conteiner--img").style.display = 'none';
        document.querySelector(".conteiner--canva").style.display = 'flex';
        document.querySelector(".conteiner--canva").style.opacity = '1';

    }, 500);
};
document.querySelector('.img--crea').addEventListener('mouseover', flipCardForCanva);

var pantalla = document.querySelector('canvas');
var ctx = pantalla.getContext('2d');

const clearCanva = () =>{
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(0, 0, 200, 200);
}
clearCanva();

var puedoDibujar = false;

function dibujarCirculo(evento) {
    if (puedoDibujar) {
        var x = evento.offsetX;
        var y = evento.offsetY;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * 3.14);
        ctx.fill();
    }
}
const pincelOn = () => {
    puedoDibujar = true;
}
const pincelOff = () => {
    puedoDibujar = false;
}
pantalla.addEventListener('mousemove', dibujarCirculo);
pantalla.addEventListener('mousedown', pincelOn);
pantalla.addEventListener('mouseup', pincelOff);
pantalla.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    clearCanva();
});