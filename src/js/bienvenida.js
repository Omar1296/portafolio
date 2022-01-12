const hola = document.querySelector('.hola');
const bienvenida = document.querySelector('.bienvenido');
const contenedor = document.querySelector('.hidden');
const spinner = document.querySelector('.sk-cube-grid');
const contMensajes = document.querySelector('.bienvenida .mensaje')
const seccionBienvenida = document.querySelector('.bienvenida');
const cubo = document.querySelector('.sk-cube');

const theader = document.querySelector('#header');
const acerca = document.querySelector('#acerca');
const portafolio = document.querySelector('#portafolio');
const frase = document.querySelector('.frase');
const contacto = document.querySelector('#contacto');
const footer = document.querySelector('.footer');

animacioBienvenida();
 
function animacioBienvenida(){

    contMensajes.classList.add('apagado');
    bienvenida.classList.add('apagado');
    hola.classList.add('apagado');
    cubo.style.opacity = 1

    setTimeout(function(){
        spinner.style.opacity = 0;

        theader.classList.remove('no-ver');
        acerca.classList.remove('no-ver');
        portafolio.classList.remove('no-ver');
        frase.classList.remove('no-ver');
        contacto.classList.remove('no-ver');
        footer.classList.remove('no-ver');
    }, 3000)

    setTimeout(function () {
        spinner.remove();  
        contMensajes.classList.remove('apagado');
        hola.classList.remove('apagado');
    }, 5000)

    setTimeout(function () {  
        hola.classList.add('apagado');
        bienvenida.classList.remove('apagado');
    }, 11000)

    setTimeout(function () {
        bienvenida.classList.add('apagado');
        seccionBienvenida.classList.add('remover');
        contenedor.classList.remove('hidden');
    }, 17000)
}


