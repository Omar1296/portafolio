const apartados = document.querySelectorAll('.apartados');

tabs();

function tabs(){
    apartados.forEach(apartado =>{
        apartado.addEventListener('click', function (e) { 
            e.preventDefault(); 
            
            const contActivo = document.querySelector('.cont-info div.activo');
            contActivo.classList.remove('activo');
    
            const btnActivo = document.querySelector('.cont-info a.activo');
            btnActivo.classList.remove('activo');
    
    
            const destino = apartado.getAttribute('href');
            const contDestino = document.querySelector(destino);
    
            contDestino.classList.add('activo');
            contDestino.style.opacity = 0;

            setTimeout(function () {  
                contDestino.style.opacity = 1
            }, 50);
            apartado.classList.add('activo');
        });
    });
}