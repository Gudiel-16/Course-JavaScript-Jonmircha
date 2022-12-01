let aleatorio = Math.round(Math.random()*100 +5);
const objUsuarios = {
    [`id_${aleatorio}`]:"Valor aleatorio"
};
const usuarios = ["gudiel","alexander","chris","acajabon"];

usuarios.forEach((usuario,index) => objUsuarios[`id_${usuario}`] = usuario);

console.log(objUsuarios);