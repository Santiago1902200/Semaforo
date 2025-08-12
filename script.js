let intervalo;

function encender(color) {
    clearInterval(intervalo); // Detener automático
    document.querySelectorAll('.luz').forEach(l => l.classList.remove('encendido'));
    document.getElementById(color).classList.add('encendido');
}

function modoAutomatico() {
    let colores = ['rojo', 'verde', 'amarillo'];
    let index = 0;
    encender(colores[index]);
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        index = (index + 1) % colores.length;
        encender(colores[index]);
    }, 2000);
}
