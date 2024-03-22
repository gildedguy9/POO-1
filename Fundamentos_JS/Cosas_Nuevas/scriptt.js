// Ejercicio 1: Declaración de variables


function MiEdad() {
    let Ahora = 2024;
    let FechaNac = 2005;
    let Resultado = Ahora - FechaNac;
    alert(`Mi edad es de: ${Resultado}`);
    
    
    
    }
    
    // Ejercicio 2: Asignación de valores
    
    function AsignarValores() {
    let Var1 = 37;
    let Var2 = Var1;
    alert(`El valor de Var2 es: ${Var2}`);
    
    
    }
    
    // Ejercicio 3: Operaciones matemáticas
    
    function Operaciones() {
    let Num2 = 745;
    let Num1 = 180;
    let Num3 = 45;
    let Suma = Num1 + Num2 + Num3;
    let Resta = Num1 - Num3;
    let Multi = Num2 * Num3;
    let Divi = Num1 / 120;
    
    alert(`El valor de Suma es ${Suma}\nEl valor de la Resta es ${Resta}\nEl valor de la Multi es  ${Multi}\nEl valor de la Division es ${Divi}`);
    
    }
    
    // Ejercicio 4: Manipulación de cadenas
    
    function MiDireccion() {
    let Direccion = "Avenida Sangregorio, La Granja";
    let NumeroDeCasa = "0667";
    let Mensaje = "Yo vivo en: " + Direccion + " " + NumeroDeCasa;
    let Longitud = Mensaje.length;
    alert(`Mensaje: ${Mensaje} \nLongitud: ${Longitud} \nPrimer Caracter: ${$Mensaje[0]}`);
    
    }
    
    function Suma_indices() {
    let Valor = [1,2,3,4,5,6,7];
    let ultimoValor = Valor[Valor.length -1];
    let penultimoValor = Valor[Valor.length -2];
    let primerValor = Valor[0];
    Suma = ultimoValor + penultimoValor + primerValor
    alert(`La suma de los valores es ${Suma}`);
    
    }
    
    function modificarMensaje() {
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeNuevo = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
    
    const valoresEliminados = mensajeInicial.slice(0);
    const valoresAgregados = mensajeNuevo.slice(0);
    
    alert(`Valor inicial: ${mensajeInicial} \nValores Eliminados: ${valoresEliminados} \nValor Nuevo: ${mensajeNuevo} \nValores agregados: ${valoresAgregados}`);
    }
    
    function operandoMetodos() {
    const numeros = [];
    for (let i = 0; i < 10; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);
    }
    
    const numerosModificados = numeros.slice(0);
    const valoresEliminados = [];
    
    valoresEliminados.push(numerosModificados.shift());
    valoresEliminados.push(numerosModificados.pop());
    numerosModificados.unshift(0);
    numerosModificados.push(100);
    
    let sumaTotal = 0;
    for (let i = 0; i < numerosModificados.length; i++) {
    sumaTotal += numerosModificados[i];
    }
    
    alert(`Arreglo inicial: ${numeros} \nArreglo final:  ${numerosModificados} \nValores eliminados: ${valoresEliminados} \nValores agregados: ${[0, 100]} \nSuma de todos los elementos: ${sumaTotal}`)
    
    }
    