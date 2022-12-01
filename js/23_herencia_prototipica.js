/*Asignamos los metodos al prototipo, no a la funcion como tal (no como version 1)
Esto para mejorar el rendimiento y espacio en memoria, ya que no se crean los metodos en cada instancia*/
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos agregados al prototipo de la funcion constructura
Animal.prototype.sonar = function(){
    console.log("Hago sonidos");
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia prototipica
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function(){
    console.log("Guaa Guaa")
} 

const chui = new Perro("Chui","Macho","Mediano");
const chuia = new Animal("Chuia","Hembra");

console.log(chui);
console.log(chuia);

chui.sonar();
chuia.sonar();
chui.saludar();
chuia.saludar();
