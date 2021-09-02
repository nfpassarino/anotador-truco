export function iniciarJuego() {
    if ($('#eq1').val().length > 9 || $('#eq2').val().length > 9) {
        $('#msj').removeClass('oculto');
    } else {
        $('#ne1').text($('#eq1').val() == '' ? 'Nosotros' : $('#eq1').val());
        $('#ne2').text($('#eq2').val() == '' ? 'Ellos' : $('#eq2').val());
        $('#max').text($('input[name="maxpuntos"]:checked').val());
        $('#msj').addClass('oculto');
        $('#pant1').addClass('oculto');
        $('#pant2').removeClass('oculto');
    }
}

export function mostrarPuntos(eq) {
    let parcialPuntos = Number($('#p' + eq).text());
    for (let i = 1; i <= 6; i++) {
        if (i === 3 && Number($('#max').text()) === 24 && parcialPuntos > 2) {
            $('#p' + eq + i).attr('src', 'img/2.png');
            parcialPuntos -= 2;
        } else if (parcialPuntos > 5) {
            $('#p' + eq + i).attr('src', 'img/5.png');
            parcialPuntos -= 5;
        } else {
            $('#p' + eq + i).attr('src', 'img/' + parcialPuntos + '.png');
            parcialPuntos = 0;
        }
    }
}

export function ganarJuego(eq) {
    $('#mensaje').html(
        '&#127942; <strong>' +
            $('#ne' + eq)
                .text()
                .toUpperCase() +
            '</strong>&#127942;<br>Ganó la partida <br>¡Felicitaciones!'
    );
    $('.ganador').removeClass('oculto');
}

export function finalizarJuego() {
    $('#eq1').val('');
    $('#eq2').val('');
    $('#p1').text('0');
    $('#p2').text('0');
    mostrarPuntos(1);
    mostrarPuntos(2);
    $('.ganador').addClass('oculto');
    $('#pant2').addClass('oculto');
    $('#pant1').removeClass('oculto');
}
