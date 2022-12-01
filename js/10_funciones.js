//Funcion normal
function estaEsFuncion(){
    console.log("Hola mundo");
}

//Funcion que retorna un valor
function retornaAlgo(){
    return "Hola mundo 2";
}

//Funcion que recibe parametros
function conParametro(datos){
    console.log(datos);
}

estaEsFuncion();
console.log(retornaAlgo());
conParametro("Hola Mundo 3");

//Funcion anonima
const funcionExpresada = function() {
    console.log("Hola Mundo 4");
}

funcionExpresada();