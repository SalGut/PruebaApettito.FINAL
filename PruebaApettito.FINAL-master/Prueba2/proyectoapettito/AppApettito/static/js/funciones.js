//Estilo de label Formulario
var input = document.getElementsByClassName('formulario_input');
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        }
        else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });

}

function validad(){
    var nombre, apellido, edad, numero, medio_pago, retiro, SoloLetras;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    edad = document.getElementById("edad").value;
    numero = document.getElementById("numero").value;
    medio_pago = document.getElementById("medio_pago").value;
    retiro = document.getElementById("retiro").value;

    // solo permitira caracteres de tipo letras, aplicando acentos
    SoloLetras = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]*$/;

    if (nombre === "" || apellido === "" || edad === "" || numero === "" || medio_pago === "" || retiro === "") {
        alert("Llene todos los campo solicitado");
        return false;
    }

    else if (nombre.length > 40) {
        alert("Nombre maximo de 40 caracteres");
        return false;
    }

    else if (!SoloLetras.test(nombre)) {
        alert("El nombre no es posible")
        return false;
    }

    else if (apellido.length > 60) {
        alert("Apellido maximo de 60 caracteres");
        return false;
    }

    else if (!SoloLetras.test(nombre)) {
        alert("El nombre no es posible")
        return false;
    }

    else if (direccion.length > 150) {
        alert("Direccion maximo de 150 caracteres");
        return false;
    }

    else if (edad.length > 2 || edad.length < 1) {
        alert("Edad no valida");
        return false;
    }

    else if (numero.length < 8) {
        alert("Digite numero con 9 digitos minimo");
        return false;
    }

    else if (isNaN(edad)) {
        alert("La edad debe ser un Numero, no tienes letras en tu edad")
    }

    else if (isNaN(numero)) {
        alert("La edad debe ser un Numero, no tienes letras en tu edad")
    }

}

