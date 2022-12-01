const numeros = [1,2,3];

//sin destructuracion
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno,dos,tres);

//Con destructuracion
const [one,two,three] = numeros;
console.log(one,two,three);

let persona = {
    nombre: "Christopher",
    apellido: "gudiel",
    edad: "26"
}

//Con destructuracion, en este caso, las variables tienen que tener
//el mismo nombre que en el objeto
let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);