const boton = document.querySelector('.btn-darkmood');
const sol = document.querySelector('.btn-darkmood .claro');
const luna = document.querySelector('.btn-darkmood .oscuro');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', function () {
    darkmood();
})

function darkmood(){
    boton.addEventListener('click', function () {  
        if(boton.classList.contains('noche')){
            boton.classList.remove('noche');
            boton.classList.add('dia');
        }
        else if(boton.classList.contains('dia')){
            boton.classList.remove('dia');
            boton.classList.add('noche');
        }

        if (sol.classList.contains('activo')) {
            sol.classList.remove('activo')
        } else {
            sol.classList.add('activo')
        }

        if (luna.classList.contains('activo')) {
            luna.classList.remove('activo')
        } else {
            luna.classList.add('activo')
        }

        if(body.classList.contains('noche')){
            body.classList.remove('noche');
            body.classList.add('dia');
        } else if(body.classList.contains('dia')){
            body.classList.remove('dia');
            body.classList.add('noche');
        }
    });
}