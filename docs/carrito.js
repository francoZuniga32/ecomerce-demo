function formatPrecio(numero) {
    var n = (numero + "").split(".");
    var entero = '0';
    var decimal = '00';
    if (n.length >= 2) {
        entero = n[0];
        decimal = primerosDosNumeros(n[1]);
    }
    else if (n.length >= 1) {
        entero = n[0];
    }
    return entero + "." + decimal;
}
function primerosDosNumeros(numero) {
    if (numero.length >= 2) {
        numero = numero.substring(0, 2);
    }
    else if (numero.length == 1) {
        numero = "0" + numero;
    }
    else {
        numero = '00';
    }
    return numero;
}