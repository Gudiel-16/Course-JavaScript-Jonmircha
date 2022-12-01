/*Son diccionarios, tienen una llave y un valor*/
let mapa = new Map();
mapa.set("nombre","Christopher");
mapa.set("apellido","Gudiel");
mapa.set("edad",35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre","Alexander");
console.log(mapa.get("nombre"));
mapa.delete("apellido");
console.log(mapa);

for (let [key,value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre","GudieL"],
    ["Edad",10]
]);

console.log(mapa2);

//guardando en un array
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);



