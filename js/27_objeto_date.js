console.log(Date());
let fecha = new Date();
//Dia del mes
console.log(fecha.getDate());
//Dia de la semana, Domingo a sabado [0,6]
console.log(fecha.getDay());
//Numero de mes, de enero a dic [0,11]
console.log(fecha.getMonth());
//Anio en que estamos
console.log(fecha.getFullYear());
//Hora, minutos, segundos y milisegundos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

//Solo parte de la fecha
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
//Solo fecha
console.log(fecha.toLocaleDateString());
//solo hora
console.log(fecha.toLocaleTimeString());

//Para horas de retraso, comparar con otros paises, en guate es GMT-0600
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getHours());

//cuantos segundos han pasado
console.log(Date.now());

//Fecha especifica
let miCumple = new Date(1995,6,1);
console.log(miCumple);


