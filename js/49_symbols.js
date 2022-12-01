/*Son como variables privadas, que no muestra el nombre de la misma*/
const NOMBRE = Symbol();
const SALUDAR = Symbol();

const persona = {
    [NOMBRE]: "Gudiel"
}

console.log(persona);

persona.NOMBRE = "Christopher";
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function(){
    console.log("Hola Mundo!");
}

persona[SALUDAR]();

console.log("-----");
for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));