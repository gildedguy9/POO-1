function compararNumeros() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);

    // Comparar los números
    if (num1 > num2) {
    alert(num1 + " es mayor que " + num2);
    alert(num2 + " es menor que " + num1);
    } else if (num2 > num1) {
    alert(num2 + " es mayor que " + num1);
    alert(num1 + " es menor que " + num2);
    } else {
    alert("Los números son iguales");
    }
}

function temperatura() {

// Definir la temperatura actual en grados Celsius
var temperatura = parseFloat(document.getElementById('temperatura').value);

// Mostrar un mensaje de acuerdo a la temperatura
if (temperatura < 0) {
alert("¡Hace mucho frío!");
} else if (temperatura >= 0 && temperatura < 10) {
alert("Hace frío");
} else if (temperatura >= 10 && temperatura < 20) {
alert("La temperatura es agradable");
} else if (temperatura >= 20 && temperatura < 30) {
alert("Hace calor");
} else {
alert("¡Hace mucho calor!");
}

}

function usuario(){

// Definir el nombre de usuario y la contraseña
var nombreUsuario = "usuario123";
var contraseña = "secreto";

// Simular la entrada del usuario (puedes omitir esta parte si quieres ingresar los valores manualmente)
var inputNombreUsuario = prompt("Ingrese su nombre de usuario:");
var inputContraseña = prompt("Ingrese su contraseña:");

// Verificar el nombre de usuario y la contraseña
if (inputNombreUsuario === nombreUsuario && inputContraseña === contraseña) {
alert("Acceso concedido");
} else {
alert("Acceso denegado");
}
}


function numeros(){
// Definir la variable numero
var numero3 = parseFloat(document.getElementById('numero3').value);

// Determinar si el número es positivo, negativo o igual a cero
if (numero3 > 0) {
alert("El número es positivo");
} else if (numero3 < 0) {
alert("El número es negativo");
} else {
alert("El número es igual a cero");
}

}

function puntuacion(){

// Definir la temperatura actual en grados Celsius
var puntuacion = parseFloat(document.getElementById('puntuacion').value);

// Mostrar un mensaje de acuerdo a la temperatura
if (puntuacion >= 90) {
alert("¡excelente!");
} else if (puntuacion > 70 && puntuacion < 89) {
alert("buen trabajo");
} else if  (puntuacion <= 70) {
alert("nesecitas mejorar");
}

}