let cotizaciones = [];

function calcularCotizacion() {
    let edad = prompt("Por favor, ingrese su edad:");
    let tipoSeguro = prompt("Por favor, seleccione el tipo de seguro (auto, hogar o vida):");
    let cotizacion = 0;

    if (edad >= 18 && edad <= 30) {
        if (tipoSeguro === 'auto') {
            cotizacion = 500;
        } else if (tipoSeguro === 'hogar') {
            cotizacion = 300;
        } else if (tipoSeguro === 'vida') {
            cotizacion = 200;
        }
    } else {
        if (tipoSeguro === 'auto') {
            cotizacion = 700;
        } else if (tipoSeguro === 'hogar') {
            cotizacion = 400;
        } else if (tipoSeguro === 'vida') {
            cotizacion = 250;
        }
    }

    cotizaciones.push({ edad, tipoSeguro, cotizacion });
    mostrarResultado(`La cotización es de $${cotizacion}`);
}

function iniciarSimulador() {
    while (true) {
        calcularCotizacion();

        let respuesta = confirm("¿Desea realizar otra cotización?");
        if (!respuesta) {
            break;
        }
    }

    mostrarCotizaciones();
    guardarEnStorage();
    alert("Gracias por usar nuestro simulador de cotización de seguros.");
}

function mostrarResultado(mensaje) {
    let resultadoElement = document.createElement('p');
    resultadoElement.textContent = mensaje;
    document.body.appendChild(resultadoElement);
}

function mostrarCotizaciones() {
    cotizaciones.forEach(cotizacion => {
        console.log(`Edad: ${cotizacion.edad}, Tipo de Seguro: ${cotizacion.tipoSeguro}, Cotización: $${cotizacion.cotizacion}`);
    });
}

function guardarEnStorage() {
    localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));
}

document.getElementById('iniciarSimulador').addEventListener('click', iniciarSimulador);

