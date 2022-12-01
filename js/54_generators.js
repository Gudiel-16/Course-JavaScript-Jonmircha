/*Van ejecutando codigo en cada yield*/
function* iterable(){
    yield "Hola";
    console.log("Hola consola");
    yield "Hola 2";
    console.log("Hola consola 2");
    yield "Hola 3";
    yield "Hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
    console.log(y);
}

//convirtiendo en array
const arr = [...iterable()];
console.log(arr);

function cuadraro(valor){
    setTimeout(() => {
        return console.log({
            valor, 
            resultado: valor*valor
        });
    }, Math.random() * 1000);
}

function* generador(){
    console.log("Inicia Generator");
    yield cuadraro(0);
    yield cuadraro(1);
    yield cuadraro(2);
    yield cuadraro(3);
    console.log("Termina Generador")
}

let gen = generador();

for (let y of gen) {
    console.log(y);
}