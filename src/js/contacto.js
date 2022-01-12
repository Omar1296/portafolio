const inputs = document.querySelectorAll('.llenar');
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.submit');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.addEventListener('DOMContentLoaded', function () {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('desactivado');
    
    inputFocus();
    validar();
})

function inputFocus(){
    inputs.forEach(input =>{
        input.addEventListener('focus', function(e){
            const label = input.parentElement.firstElementChild;
            label.classList.add('focus');
        });
    });
}

function validar(){
    inputs.forEach(input =>{
        input.addEventListener('blur', function(){
            const label = input.parentElement.firstElementChild;
            const check = input.parentElement.lastElementChild;

            if(input.value === ''){
                label.classList.remove('focus');
                if(check){
                    check.classList.remove('check');
                }

                switch(input.type){
                    case 'text':
                        mensaje('El nombre es obligatorio', 'error');
                        break;
                    case 'email':
                        mensaje('El email es obligatorio', 'error');
                        break;
                    case 'textarea':
                        mensaje('Tu mensaje es necesario', 'error');
                        break;
                    default:
                        break;
                }
            }
            else{
                const check = input.parentElement.lastElementChild;

                switch(input.type){
                    case 'text':
                        input.value.trim();
                        check.classList.add('check');
                        break;
                    case 'email':
                        if(er.test(input.value)){
                            check.classList.add('check');
                        }
                        else{
                            mensaje('Tu email no es valido', 'error');
                        }
                        break;
                    case 'textarea':
                        input.value.trim();
                        check.classList.add('check');
                        break;
                    default:
                        break;
                }

                activar();
            }
        });
    });
}



function activar(){
    if(inputs[0].value !== '' && er.test(inputs[1].value) && inputs[2].value !== ''){
        
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('desactivado');
    }
}

function mensaje(mensaje, tipo){
    const contMensaje = document.createElement('div');

    if(tipo == 'error'){
        contMensaje.textContent = mensaje;
        contMensaje.classList.add('error', 'mensaje');

        formulario.appendChild(contMensaje);

        setTimeout(function(){
            contMensaje.remove();
        }, 3000)
    }
}

