let nombre = "cAaG", edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("Guaa, Guaa");
    }
}

console.log(perro);
perro.ladrar();

const dog = {
    nombre, //se hace asi cuando tienen el mismo nombre: ej. nombre: nombre
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("Guaa guaa")
    }
}

console.log(dog);