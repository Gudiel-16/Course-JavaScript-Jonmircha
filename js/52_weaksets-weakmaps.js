/*WeakMap es una colección similar a Map que permite solo objetos como propiedades 
y los elimina junto con el valor asociado una vez que se vuelven inaccesibles 
por otros medios. 
WeakSet es una colección tipo Set que almacena solo objetos 
y los elimina una vez que se vuelven inaccesibles por otros medios */

const ws = new WeakSet();

//solo aceptan objetos
let valor1 = {"valor1":1};
let valor2 = {"valor1":2};
let valor3 = {"valor1":3};
ws.add(valor1);
ws.add(valor2);
console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

// setInterval(() => {
//     console.log(ws)
// }, 1000);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1,1);
wm.set(llave2,2);
console.log(wm);

console.log(wm.has(llave1));
console.log(wm.has(llave2));

console.log(wm.get(llave2));

wm.delete(llave3);

console.log(wm);


