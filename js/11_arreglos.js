const a = [];
const b = [1, true, "Hola", ["A","B","C", [1,2,3]]];

console.log(a);
console.log(b);
console.log(b.length); //Tamanio de array
console.log(b[3][2]); // Imprimiendo la letra C
console.log(b[3][3][0]); // Imprimiendo el numero 1

const c = Array.of("x","y","z");
console.log(c);

//Array de tamanio 10, que se llenan con 'false'
const d = Array(10).fill(false);
console.log(d);

//ya no se usa mucho
const e = new Array();
console.log(e);

//ya no se usa mucho
const f = new Array(1,2,3);
console.log(f);

const colores = ["gris", "negro", "verde"];
console.log(colores);

//Agrega al final
colores.push("Negro");
console.log(colores);

//Quita el ultimo
colores.pop();
console.log(colores);

//recorriendo arreglo
colores.forEach(function(elemento, index){
    console.log(index, elemento);
});