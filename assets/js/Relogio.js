function criaSegundos(seg){
    const data = new Date(seg * 1000);
    let time = data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone:'GMT'
    })
    return time
}

let intervalo;
let seg = 0;

function Relogio(timer){
    intervalo = setInterval(() => {
        seg++;
        timer.innerHTML = criaSegundos(seg);
    },1000)
}