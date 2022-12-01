//Normal
const saludo = function(){
    console.log("Hola mundo");
}

saludo();

//Arrow functions
const saludar = (nombre) => {
    console.log(`Hola  ${nombre}`);
}

saludar("Gudiel");

//se puede hacer de la siguiente forma
const sumar = (a,b) => a+b;
const sumar2 = (a,b) => {return a+b};

console.log(sumar(1,1),sumar2(2,2));

//OTRO EJEMPLO:
const numeros = [1,2,3,4,5];

//forma normal
numeros.forEach(function(el,index){
    console.log(el,index);
});

//arrow functions
numeros.forEach((el,index) => {
    console.log(el,index);
});
