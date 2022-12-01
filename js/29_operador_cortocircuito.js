/* 
OR: cuando el valor de la izquierda en la expresion siempre
    pueda validar a true, es el valor que se cargara por defecto.
    
AND: cuando el valor de la izquierda en la expresion pueda 
    validar a false, es el valor que se cargara por defecto */

function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("Gudiel");
saludar();

console.log(10 || "valor de la derecha");
console.log(null || "valor de la derecha");

console.log(10 && "valor de la derecha");
console.log("null" && "valor de la derecha");