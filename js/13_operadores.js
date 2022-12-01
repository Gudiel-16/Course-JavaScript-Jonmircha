let a = 5 + (5-10)*3;

let modulo = 5%2;

console.log(a);
console.log(modulo);

/*Relacionales >, <, >=, <=, ==, ===, !=, !==*/

console.log(8>9); //false
console.log(8<9); //true
console.log(8>=9); //false
console.log(10>=9); //true

console.log("----------");
/*
= es asignacion de variable
== es comparacion de valores
=== es comparacion de valores y tipo de variable
*/

console.log(7==7); //true
console.log("7"==7); //true
console.log("7"===7); //false

console.log("----------");
/*Incremento, Decremento */
let i = 1;
i = i +2;
i += 3;
i -= 2;
i /= 2;
i *= 5;
console.log(i);

console.log("----------");
/*operador unario, suma aunque este dentro de un console.log() */
i++;
i--;
++i;
--i;
console.log(i);

console.log("----------");
/*operadores logicos*/
/*
! - Not, niega, lo que es verdadero lo vuelve falso y viceversa
|| - Or, con que una se cumpla, el Or validara
&& - And, Las dos se cumplen
*/

console.log(!true); //false
console.log(!false); //true
console.log((9===9)||("9"===9)) //true
console.log(((9===9)&&("9"===9))) //false

