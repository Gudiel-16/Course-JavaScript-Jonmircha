class Animal{
    //Constructor
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }   
    
    //Metodos
    sonar(){
        console.log("Hago sonidos");
    }
    
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero); //hace referncia a la clase padre y se le pasan los parametros
        this.tamanio = tamanio;
    }

    sonar(){
        console.log("Hago sonidos");
    }

    ladrar(){
        console.log("Guaa Guaa")
    }
}

const chui = new Animal("Chui","Macho");
const chuia = new Perro("Chuia","Hembra","Gigante");

chui.sonar();
chuia.sonar();
chui.saludar();
chuia.saludar();
chuia.ladrar();