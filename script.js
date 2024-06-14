// Colocar el año actual en el pie de página
let añoActaual = document.getElementById('year')
añoActaual.textContent = new Date().getFullYear();


// *************** Funcionamiento del Carrusel ***************
// Necesito que el carrusel cambie el checked de input para que se mueva automáticamente

// Obtener los inputs de los input radio
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');

// Crear un intervalo para cambiar el checked de los inputs
const tiempoIntervalo = 4000;
let fcIntervalo; // Guarda el número del intervalo y se utiliza para detenerlo
let IntervaloFuncionando = true; // Se implementó para evitar que se generen varios intervalos

// Función para iniciar el intervalo
function iniciarIntervalo() {
    fcIntervalo = setInterval(() => {
        IntervaloFuncionando = true;
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
    console.log("Intervalo N°: " + fcIntervalo);
}

// Detener el intervalo cuando el usuario hace click en el carrusel
function detenerIntervalo(){
    console.log('Deteniendo intervalo N°: ' + fcIntervalo);    

    if(IntervaloFuncionando){ // Evita que se generen varios intervalos
        clearInterval(fcIntervalo);
        IntervaloFuncionando = false;
        setTimeout(() => {
            iniciarIntervalo();
        }, tiempoIntervalo - 1000);
    }
}

// Iniciar el intervalo cuando la página se carga
iniciarIntervalo();