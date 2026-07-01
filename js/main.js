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

// 3. GENERADOR DE TARJETA DE VOLUNTARIO
// Arma una tarjeta con el nombre y compromiso del usuario
var btnGenerar = document.getElementById("btn-generar-tarjeta");
 
if (btnGenerar) {
    btnGenerar.addEventListener("click", function () {
        var nombre = document.getElementById("nombre-tarjeta").value;
        var compromiso = document.getElementById("compromiso-tarjeta").value;
 
        if (nombre === "" || compromiso === "") {
            alert("Completá tu nombre y tu compromiso antes de generar la tarjeta.");
            return;
        }
 
        document.getElementById("resultado-tarjeta").innerHTML =
            "<div style='background:#1b4332; color:white; padding:20px; border-radius:8px; margin-top:15px;'>" +
                "<p>🌿 Voluntario/a de EcoVida</p>" +
                "<h4>" + nombre + "</h4>" +
                "<p><em>\"" + compromiso + "\"</em></p>" +
            "</div>";
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

