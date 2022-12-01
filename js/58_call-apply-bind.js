//tendria que estar en un html para poder visualizar
this.lugar = "Contexto Global";

function saludar(saludo,aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar();

const obj = {
    lugar: "Contexto objeto"
}

//saludar el global, y recibe un nuevo contexto 'obj'
saludar.call(obj, "hola", "Gudiel");
saludar.apply(obj, ["hola", "Gudiel"]);

const persona = {
    nombre: "Gudiel",
    saludar: function () {
        console.log(`hola ${this.nombre}`)
    }
}

persona.saludar();

const otraPersona = {
    saludar: persona.saludar.bind(persona) //bind enlaza el contexto de 'persona'
}

otraPersona.saludar();
