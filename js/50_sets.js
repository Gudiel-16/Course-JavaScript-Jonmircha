//El set elimina duplicados

const set = new Set([1,2,3,4,5,true,false,false,{},{},"hola","HOla"]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(1);
console.log(set2);

for (const item of set) {
    console.log(item);
}

//se convierte el set a un arreglo
let arr =Array.from(set);
console.log(arr[0]);

//eliminando
set.delete("HOla");
console.log(set);

//verificando si existe
console.log(set.has("hola"));
console.log(set.has(19));

//limpiando
set2.clear();
console.log(set2);