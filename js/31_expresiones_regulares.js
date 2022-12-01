/*
Son una secuencia de caracteres que forma un patron de busqueda,
principalmente utilizada para la busqueda de cadenas de caracteres */

let cadena = "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en\
demostraciones de tipografías o de borradores de diseño para probar el diseño \
visual antes de insertar lorem el texto final.";

let expReg = new RegExp("lorem","i")//bandera g, significa global (todas las coincidencias)
                                    //bandera i, no diferencia entre mayusculas y minusculas
                                    //se pueden poner banderas juntas -> "ig"
let expReg2 = /lorem/ig;

console.log(expReg.test(cadena)); //probando que la expresion existe dentro del parrafo
console.log(expReg.exec(cadena)); //retorna un arreglo

console.log(expReg2.test(cadena)); 
console.log(expReg2.exec(cadena));