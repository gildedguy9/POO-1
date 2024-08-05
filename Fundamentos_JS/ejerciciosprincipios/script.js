

/*ejercicio numero1*/




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

/*ejercicio numero2*/


/*
let numero = parseInt(prompt("Ingrese un Valor numerico: "));

function mostrarDatos(numero){
    numero = (numero/3+10)*2
    console.log(`el resultado es: ${numero}`);
    doscument.getElemntById("mostrarDatos").textContent = `el resultado es: ${numero}`;    
}
   
mostrarDatos(numero);*/


/*
ejercicio3*/ 


/*
let numero1 = prompt("ingrese el primer valor numerico");
let numero2 = prompt("ingrese el segundo valor numerico");

function evaluarCreciente(){
    if(numero1 < numero2) {
        console.log("en orden creciente");
    } else if (numero2 > numero1) {
        console.log("en orden decreciente");
    } else {
        console.log("son iguales");
    }

}
evaluarCreciente(); */



/*ejercicio numero4

function calcularPromedio() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
    let calificacion = parseFloat(prompt("Ingrese la calificación " + i + ":"));
    suma += calificacion;
    }
    let promedio = suma / 5;
    console.log(promedio);
}

calcularPromedio();*/




ejercicio5


let n = parseInt(prompt("ingrese un numero: "));

function numnerosNaturales(numero){
    let array = [];
    let suma = 0;
    for(let i = 1; i <= numero; i++ ){
        array.push(i);
        suma += i;
    }
    return array;
}

console.log(`los numeros naturales son: ${array}`);


/*
ejercicio6

function imprimirPares(rango){
    pares = [];
    for(let i = 2; i <= rango; i+=2 ){
        pares.push(i);
    }
    return pares;
}

console.log(imprimirPares(200).join(" - "));

*/




