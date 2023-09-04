function saludo() {
    var nombre = prompt("Por favor ingresa tu nombre:");

    if (nombre === null || nombre === "") {
        alert("Por favoringresa tu nombre.");
    } else {
        alert("Bienvenido");
    }
}