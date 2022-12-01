console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Registro de lo que a pasado en nuestra app");
//Con un espacio:
console.log("a","b","c");
//Interpolando:
let nombre = "Gudiel";
console.log(`Mi nombre es: ${nombre}`);
//Comodines: (sustituye por las variables)
let edad=26;
console.log("Mi nombre es %s y tengo %d anios",nombre,edad);
//Limpiar consola:
//console.clear();

//console.log(document); //Muestrea todo el html

//muestra propiedades a detalle:
//console.dir(window);
//console.dir(document);

//Agrupando: .groupCollapse hace lo mismo
console.group("Cursos de Progra");
console.log("JavaScript");
console.log("Node js");
console.log("Angular");
console.groupEnd();

//Tabla:
console.table(Object.entries(console).sort()); //sort para ordenar

//Representar array en tabla:
const numeros = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"];
console.table(numeros);
console.table(vocales);

const perro = {
    nombre: "a",
    raza: "chig",
    color: "blanco"
}

console.table(perro);

//Tiempo en que ejecuta (tiene que tener la misma bancera, lo que esta en comillas)
console.time("Cuanto tiempo tarda mi codigo");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;    
}
console.timeEnd("Cuanto tiempo tarda mi codigo");

//Cuantas veces se ejectura un fragmento de codigo
for (let i = 0; i < 3; i++) {
    console.count("codigo for"); 
    console.log(i);   
}

//Mini lebreria para hacer pruebas
let x = 1, y = 2;
pruebaXY = "Se espera que x sea mayor que y";
console.assert(x<y,{x,y,pruebaXY});