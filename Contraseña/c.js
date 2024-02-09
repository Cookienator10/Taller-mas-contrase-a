let p = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
        p: p.value,
    };

    const longitud_minima = 8;

    if (validarClave(data.p, longitud_minima)) {
        alert("La contraseña es aceptable.");
    } else {
        alert("La contraseña no cumple con los requisitos.");
    }
});

function validarClave(clave, longitudMinima) {
    // Verificar longitud mínima
    if (clave.length < longitudMinima) {
        return false;
    }

    // Convertir la primera letra a mayúscula
    clave = clave.charAt(0).toUpperCase() + clave.slice(1);

    // Verificar la presencia de al menos uno de los caracteres: * / + -
    if (!/[*/+-]/.test(clave)) {
        return false;
    }

    // La clave cumple con todos los requisitos
    return true;
}

