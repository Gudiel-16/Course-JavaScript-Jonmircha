//se usan para crear copias de objetos
const persona = {
    nombre:"",
    apellido:"",
    edad:0
}

const manejador = {
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop)===-1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`);
        }
        obj[prop] = valor;
    }
}

const gudiel = new Proxy(persona,manejador);
gudiel.nombre = "Gudiel";
gudiel.apellido = "Chris";
gudiel.edad = 26;
gudiel.twitter = "@gudiel"
console.log(gudiel);
console.log(persona);