const numeros = [1,2,3,4,5,6,7,8,9];

console.log("Break");
for (let i = 0; i < numeros.length; i++) {
    if (i===5){
        break; //se sale del for
    }
    console.log(numeros[i]);    
}

console.log("Continue");
for (let i = 0; i < numeros.length; i++) {
    if (i===5){
        continue; //no ejecuta lo que sigue despues de aca, y continua el for
                  //en este caso no imprime el 6
    }
    console.log(numeros[i]);    
}