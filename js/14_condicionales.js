//COMUN
let edad = 18;

if (edad>18){
    console.log("Mayor de edad")
}
else if (edad==18){
    console.log("Justo con la edad")
}else{
    console.log("Menor de edad")
}

//OPERADOR TERNARIO
console.log("OPERADOR TERNARIO");
let num = 10;

let eresMayor = (num >= 10) 
    ? "TRUE" 
    : "FALSE";

console.log(eresMayor);

//SWITCH - CASE
console.log("SWITCH - CASE");

let dia = 1;
switch(dia){
    case 0:
        console.log("Viernes");
        break;
    case 1:
        console.log("Sabado");
        break;
    default:
        console.log("Default");
        break;
}