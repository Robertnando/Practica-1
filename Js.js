"use strict";
/*
Declarar variabe js
var variable global
Let variable
const Constante
let y const nacen pir que son variables con alcance o con scope
ECMASCRIPT 6
----------------------------------------------------------------
Datos primitivos
String
Number (Float o integer)= (entero o integral)
Boolean
Fecha
----------------------------------------------------------------
document.getElementById('ID').value
document.querySelector('')
*/

alert ("Este string es de cirno gang, baka!");
let Nombre=prompt('Hola como te llamas master?');
console.log ("hola "+Nombre);
document.write (Nombre);
let Texto =('yo me llamo Roberto "Roberto 1"');
console.log(Texto);
let Numero = 4;
String(Numero);
Number(Numero);
let Estado=prompt("Como tas?");
let Edad=prompt("Dame tu edad");
console.log(Edad-5);
console.log(Edad +5);
console.log(typeof(Edad +5));

let boolean = true;

let menor = (10<5);
console.log(menor);

let fecha = new Date();
// fecha.getdate() fecha.getfullyear();

//Operadores aritmeticos
let suma = 1+2;
let resta = 1-2;
let multiplicacion = 6*2;
let division = 1/2;
let mod = 10 % 3;
//Increment
let one = 1;
one++;
console.log(one);
//decrement
let two =2;
two--;
console.log(two);

//Operaciones Relacioneles
let mayor = 5>3;
let minor = 69<420;
let mayorigualque = 20 >= 10;
let minorigualqur = 20 <= 10;
let igual = 10 =="10";
let exactlyequal = 10 === 10;
let diferentement = 10 != 30;
console.log(diferentement);
/*
Tipos de datos especiales o compuestos 
Arrays - Vectores - conjuntos de datos y pueden ser direrente tipo
Objetos tienen atributos y valores
objeto JSON (JavaScript Object Notation): Formato de intercambio de datos ligero y descriptivo-utilizado para tener un objeto con muchos datos adentro
ARRAYS inician en la posicion 0
al entrar por cada parte de los arrays o objetos se le dice 'destructury object o destructurizacion
una API es un servicio de back-end donde me da un objeto en tipo objeto JSON que uso para manipular y mostrar lo que quiera
*/
//Arrays []
let frutas = ['pera', 'manzana', 'platano', null];
let memes = ['BAKA', 'Chirumiru', '69', '420'];
//Objetos {}

let persona = { nombre: 'Cirno', edad: 69, correo: 'Baka@ghost.yokai'};
//Objecto JSON [{}{}{}]
let personas = [
    { nombre:'KOOLAID MAN', edad: 180, correo: 'nose_lol'},
    { nombre:'Angel', edad: 420, correo: 'angel_adrian'},
    { nombre: 'Shon', edad: 10000, correo: 'Terrarians_gmail'},
];

/*
Operadores lógicos o Booleans
existen 2: AND / Y, OR / O, NOT / Negación.
&& comparar de 2 a mas datos y la respuesta de esta es siempre true o false
AND: para que un AND tenga un resultado TRUE todos sus condiciones se cumplan para que pase a TRUE, SI UNA ES FALSA ENTONCES se pondra como false
*/
let number1 = 10;
let number2 = 14;
let and = (number1 >10 && number2 > 10);


let or = (number1 >10 || number2 > 10);

let negacion = !(number1 >10); false


/*
Fetch api
*/










//Cosas fuera de tema

