// Colocar el año actual en el pie de página
let añoActaual = document.getElementById('year')
añoActaual.textContent = new Date().getFullYear();

// Funcionamiento del Carrusel
// Necesito que el carrusel cambie el checked de input para que se mueva automáticamente

const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');

const tiempoIntervalo = 4000;

setInterval(() => {
    if(r1.checked){
        r2.checked = true;
        r1.checked = false;
    } else if(r2.checked){
        r3.checked = true;
        r2.checked = false;
    } else if(r3.checked){
        r4.checked = true;
        r3.checked = false;
    } else if(r4.checked){
        r1.checked = true;
        r4.checked = false;
    }
}, tiempoIntervalo);