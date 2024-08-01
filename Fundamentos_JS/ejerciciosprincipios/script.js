/*
let nombre = prompt("escribir un nombre ");
let apellido = prompt("escribir un apellido ");
let edad = prompt("escribe tu edad");

function mostrarDatos(nombre, apellido, edad){
    console.log(`El nombre completo es:  ${nombre} ${apellido}`);
    console.log( `la edad es: ${edad}`);

}
 

mostrarDatos(nombre, apellido, edad);
*/


let numero = parseInt(prompt("Ingrese un Valor numerico: "));

function operar(num){
    return (num / 3 + 10) * 2;
}

console.log(`El resultado es: ${operar(numero)}`);