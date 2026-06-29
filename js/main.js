
// 1. CONTADOR DE AÑOS
// Calcula cuántos años pasaron desde que se fundó EcoVida
var anioFundacion = 2015;
var anioActual = new Date().getFullYear();
var años = anioActual - anioFundacion;
 
var contador = document.getElementById("contador-trayectoria");
if (contador) {
    contador.textContent = "Llevamos " + años + " años cuidando el medioambiente.";
}

// 2. BUSCADOR DE PROGRAMAS
// Muestra u oculta las cards según lo que escribe el usuario
var buscador = document.getElementById("buscador-programas");
 
if (buscador) {
    buscador.addEventListener("input", function () {
        var texto = buscador.value.toLowerCase();
        var cards = document.querySelectorAll(".programa-card");
 
        cards.forEach(function (card) {
            if (card.textContent.toLowerCase().includes(texto)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
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
