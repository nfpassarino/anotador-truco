import {
    iniciarJuego,
    mostrarPuntos,
    ganarJuego,
    finalizarJuego,
} from './ui.js';

$(document).ready(function() {
//pantalla 1
    $('#iniciar').on('click', iniciarJuego);

//pantalla 2
    $('#fin').on('click', finalizarJuego);
    $('#volver').on('click', finalizarJuego);
    $('.btn-op').on('click', resolverPuntos);

    function resolverPuntos() {
        let eq = Number(this.id[1]);
        if (this.value === '+') {
            $('#p' + eq).text(Number($('#p' + eq).text()) + 1);
        } else if (this.value === '-' && $('#p' + eq).text() !== '0') {
            $('#p' + eq).text(Number($('#p' + eq).text()) - 1);
        }
        mostrarPuntos(eq);
        ($('#p' + eq).text() === $('#max').text()) ? ganarJuego(eq) : null;
    }
});
