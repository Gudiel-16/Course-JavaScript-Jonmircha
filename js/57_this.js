this.nombre = "Global";

function imprimir(){
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: "Global 2",
    imprimir: function (){
        console.log(this.nombre);
    }
}

const obj2 = {
    nombre: "Global 3",
    imprimir: () => { //las funciones flecha mantienen la referencia (no la del objeto)
        console.log(this.nombre); //el this no hace referencia al nombre del objeto
    }
}

obj.imprimir();
obj2.imprimir();
