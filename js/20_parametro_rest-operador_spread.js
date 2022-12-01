//PARAMETROS REST
//Se crean dinamicamente las variables con los ...
//No se sabe cuantas variables se pueden recibir por eso el ...
//pueden venir solo dos variables (a y b), o pueden venir mas
function sumar(a,b, ...C){
    let resultado = a+b;
    C.forEach(function(n){
        resultado += n
    });

    return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));

//OPERADOR SPREAD (operador de propagacion)

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];
console.log(arr1,arr2);

//se vuelve un array de 10
const arr3 = [...arr1, ...arr2];
console.log(arr3);