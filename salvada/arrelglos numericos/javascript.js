
function noNegative(arr){
    var lista = document.getElementById('lista'); // Mover la declaración de lista aquí para evitar repetición
    for(let i = 0; i < arr.length; i++){

        if(arr[i] < 0){
            arr[i] = 0;

        }
        lista.innerHTML += '<li>' + arr[i] + '</li>'; // Agregar cada elemento del array como un nuevo ítem de lista
        
    }







    return arr;
}

var lista = document.getElementById('lista');

let array = [-2, 5, -6, 10];
lista.innerHTML = ''; // Limpiar la lista antes de generar una nueva
noNegative(array); // Pasar el array como argumento en lugar de Array


