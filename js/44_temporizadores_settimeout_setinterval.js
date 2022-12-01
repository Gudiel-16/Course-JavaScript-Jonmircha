//se ejecuta una vez despues de 3 segundos
let temp = setTimeout(()=>{
    console.log("Hola Mundo!",new Date().toLocaleTimeString());
}, 3000);

//se ejecuta siempre cada 10 segundos
let temp2 = setInterval(()=>{
    console.log("Hola Mundo 2!", new Date().toLocaleTimeString());
}, 10000);

//Deja de ejecutarse el setTimeout
clearTimeout(temp);
//Deja de ejecutarse el setInterval
clearInterval(temp2);
