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
        this.raza = null;
    }

    sonar(){
        console.log("Hago sonidos");
    }

    ladrar(){
        console.log("Guaa Guaa")
    }

    //Un metodo estatico se pueden ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log("Un perro static")
    }

    //Los setters y getters son metodos especiales que nos permiten establecer
    //y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

const chui = new Animal("Chui","Macho");
const chuia = new Perro("Chuia","Hembra","Gigante");

chui.sonar();
chuia.sonar();
chui.saludar();
chuia.saludar();
chuia.ladrar();

//Se les envia y se obtienen como propiedad (sin parentesis)
chuia.setRaza = "Gran Danes";
console.log(chuia.getRaza);