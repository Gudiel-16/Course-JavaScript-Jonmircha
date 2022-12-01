let a = new String("Hola mundo");

const b = {};

const c = new Object();

const gudiel = {
    nombre: "Christopher",
    apellido: "Gudiel",
    edad: "26",
    casado: false,
    contacto: {
        email: "gudiel.lv16@gmail.com",
        movil: "12345678"
    },
    saludar: function(){
        console.log("Hola mundo")
    },
    saludar2: function(){
        //this hace referencia a variables del mismo objeto
        console.log(`Mi nombre es: ${this.nombre} ${this.apellido}`)
    }
}

console.log(gudiel);
console.log(gudiel["nombre"]);
console.log(gudiel.contacto.email);
gudiel.saludar(); //imprime de una vez, ya que ejecuta la funcion
gudiel.saludar2();

console.log(Object.keys(gudiel)); //lista llaves del array
console.log(Object.values(gudiel)); //lista valores del array
console.log(gudiel.hasOwnProperty("nombre")); //permite saber si tiene alguna propiedad (true|false)
