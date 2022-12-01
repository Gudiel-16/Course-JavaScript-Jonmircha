try {
    console.log("En el Try se agrega el codigo a evaluar");
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally{
    console.log("Se ejecuta siempre al final de un bloque try-catch");
}

try {
    let numero = 10;
    if(isNaN(numero)){ //si es numero
        throw new Error("No es un numero");
    }
    console.log(numero*numero);
} catch (error) {
    console.log("Se produjo el siguiente error: ",error);
}