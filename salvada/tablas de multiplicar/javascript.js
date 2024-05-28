const numero = parseInt(prompt("ingresa un numero:"));

const tablasMultiplicacionElement = document.getElementById("tabla-multiplicacion");

tablasMultiplicacionElement.innerHTML = `<h2>tabla de multiplicacion del ${numero}:</h2>`;

for (let i = 1; i <= 10; i++)  {
    const resultado = numero * i;
    tablasMultiplicacionElement.innerHTML += `${numero} X ${i} = ${resultado}<br>`;
}

const cadenaOriginal = prompt("ingresa una cadena de texto");
const cadenaInvertidaElement = document.getElementById("cadena-invertida");
const caracteresArray = cadenaOriginal.split("");
for (let i = 0; i < Math.floor(caracteresArray.length / 2); i++){
    const temp = caracteresArray[i];
    caracteresArray[i] = caracteresArray[caracteresArray.length - 1 - i];
    caracteresArray[caracteresArray.length - 1 - i] = temp;
}
const cadenaInvertida = caracteresArray.join("");
cadenaInvertidaElement.innerHTML = `<h2>La cadena Invertida es: ${cadenaInvertida}</h2>`;