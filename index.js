/*
codigo que le pida al usuario su edad y si es mayor de edad, le pregunte su nombre y apellido y lo salude en el dom "Hola cristian",sin no lo ponga en el DOM, baneao del server crack no sos mayor de edad
*/
"use strict";
alert('Hola bienvenido al club de cirno')
let Edad=prompt("Dame tu Edad");
if (Edad >= 18) {
    let nombre=prompt("dame tu nombre")
    let apellido=prompt("Dame tu apellido")
    document.write("Hola ", nombre, apellido)
} else if (Edad<18) {
    document.write('Baneao del server crack no sos mayor de edad')
}