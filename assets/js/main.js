const inicar = document.querySelector('#iniciar');
const parar = document.querySelector('#parar');
const pausar = document.querySelector('#pausar');

let start = false;

inicar.addEventListener('click', () => {
    if(start) return;
    Relogio(document.querySelector('#time'));
    start = true;
});

pausar.addEventListener('click', () => {
    clearInterval(intervalo);
    start = false;
})

parar.addEventListener('click', () => {
    clearInterval(intervalo);
    seg = 0;
    document.querySelector('#time').innerHTML = criaSegundos(0);
    start = false;
});

