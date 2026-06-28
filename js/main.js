
// 1. CONTADOR DE AÑOS
// Calcula cuántos años pasaron desde que se fundó EcoVida
var anioFundacion = 2015;
var anioActual = new Date().getFullYear();
var años = anioActual - anioFundacion;
 
var contador = document.getElementById("contador-trayectoria");
if (contador) {
    contador.textContent = "Llevamos " + años + " años cuidando el medioambiente.";
}

// 4. VALIDACIÓN DEL FORMULARIO DE CONTACTO
var formulario = document.getElementById("form-contacto");
 
if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
 
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;
 
        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor completá todos los campos.");
            return;
        }
 
        alert("¡Mensaje enviado! Nos ponemos en contacto a la brevedad.");
        formulario.reset();
    });
}