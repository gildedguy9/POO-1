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
    