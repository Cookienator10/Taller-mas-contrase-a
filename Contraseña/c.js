let p = document.getElementById("password");
let button = document.getElementById("button");

button.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
        p: p.value,
    };

    const longitud_minima = 8;

    if (validarClave(data.p, longitud_minima) && signs(data.p)) {
        alert("La contraseña es aceptable.");
    } else {
        alert("La contraseña no cumple con los requisitos.");
    }
});

function validarClave(clave, longitudMinima) {
    if (clave.length < longitudMinima) {
        return false;
    }
    return true;
}

function signs(p) {
    let expresionRegular = /^[*/+]+$/;
    return expresionRegular.test(p);
}




