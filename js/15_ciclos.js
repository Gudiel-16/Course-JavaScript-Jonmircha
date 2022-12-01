let contador = 0;

//WHILE
while(contador<5){
    console.log("while",contador);
    contador++;
}

//DO WHILE
do{
    console.log("do while",contador);
    contador++
}while(contador<8);

//FOR
for (let i = 0; i < 5; i++) {
    console.log("for",i);
}

//FOR
let numeros = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < numeros.length; i++) {
    console.log("i en array: ",numeros[i]);    
}

//FOR IN
const gudiel = {
    nombre: "Christopher",
    apellido: "Gudiel"
}
for (const key in gudiel) {
    console.log(key,gudiel[key]);
}

//FOR OF (es mas para arreglos o objetos iterables en js)
let cadena = "Hola mundo";
for (const caracter of cadena) {
    console.log(caracter);
}