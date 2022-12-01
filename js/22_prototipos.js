/*Version 1
function Animal(nombre, genero){
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function(){
        console.log("Hago sonidos");
    }

    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}
*/

/*Version 2
Asignamos los metodos al prototipo, no a la funcion como tal (no como version 1)
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

const chui = new Animal("Chui","Macho");
const chuia = new Animal("Chuia","Hembra");

console.log(chui);
console.log(chuia);

chui.sonar();
chuia.sonar();
chui.saludar();
chuia.saludar();
