console.log("Bienvenidos a la sesión JS03 Control de flujo");
console.log("No olvidaremos el reto a Ed");


//--------------- Declaración de bloque de código ----------------
/*
 Sintaxis:
         {

          }
 Las variables declaradas con let y const
 solo tendrán alcance(scope) dentro del bloque
 o bloques anidados.

 Si la variable en el bloque, tiene el mismo nombre
 que una variable fuera del bloque, se le da prioridad
 a la varible dentro del bloque.
*/
// let y const no se pueden redeclarar
// let firstname = "Lalo";
// const lastname = "García";


let name = "Sergio";
const lastname = "Torres";
var age = "24";

{
    let name = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "Rojo";
    var comidaFavorita = "pozole";
    console.log(`${name} ${lastname}`);
    console.log(`${age}`);
    console.log(`${colorFavorito}`);
    console.log(`${comidaFavorita}`);

};

console.log(`-------------------------------`);

console.log(`${name} ${lastname}`);
console.log(`${age}`);
console.log(`${comidaFavorita}`);
// console.log(`${colorFavorito}`);

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

const temperatura = 24;
let mensaje = "Temperatura ideal de ";

if (temperatura === 22) {

    mensaje += `${temperatura} grados centigrados`;

} else if (temperatura >= 15 && temperatura <= 21) {

    mensaje = `${temperatura} grados centigrados, es frío`;

} else if (temperatura >= 23 && temperatura <= 30) {

    mensaje = `${temperatura} grados centigrados, es calurosa`;
}
else{
    mensaje = `${temperatura} grados centigrados, no es ideal`;
}


console.log(mensaje);

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

/**
 * Establece la velocidad de un ventilador
 * @param  {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida
 */

const setVelocidadVentilador = ( velocidad = 0 ) => {
// utiliza la comparación estricta
switch (parseInt(velocidad)){
    case 0:
        mensaje= "apagado";
        break;
    case 1:
        mensaje= "velocidad baja";
        break;
    case 2:
        mensaje= "velocidad media";
        break;
    default:
        mensaje= "el nivel no existe";
    
}
return mensaje;

};

console.log(setVelocidadVentilador(1));
console.log(setVelocidadVentilador(2));
console.log(setVelocidadVentilador("2"));

console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`); // baja
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`); // no existe
console.log(`valor: 2 ${setVelocidadVentilador(2)}`); // velocidad media
console.log(`valor: "2" ${setVelocidadVentilador("2")}`); // velocidad media
console.log(`valor: ? ${setVelocidadVentilador()}`); // apagado

// console.log(`valor: ? ${setVelocidadVentilador( prompt("Velocidad", 1))}`); // velocidad baja

/*
Ejercicio estaciones del año

Preguntat por el numero de mes
 */

// const estaciones = ( mes ) => {
//     // utiliza la comparación estricta
//     switch (parseInt(mes)){
//         case 1:
//         case 2:
//         case 12:
//             mensaje= "Invierno";
//             break;
//         case 3:
//         case 4:
//         case 5:
//             mensaje= "Primavera";
//             break;
//         case 6:
//         case 7:
//         case 8:
//             mensaje= "Verano";
//             break;
//         case 9:
//         case 10:
//         case 11:
//             mensaje= "Otoño";
//             break;
//         default:
//             mensaje= "No existe";
//     }
        
//     return mensaje;
    
//     };
// console.log(estaciones(4));
// console.log(estaciones(12));
// console.log(estaciones(8));
// console.log(estaciones(9));
// console.log(`mes: ? ${estaciones( prompt("Elige el número de un mes: ", 1))}`);

const estaciones2 = ( mes ) => {
    
    
    if (mes == 1 || mes == 2 || mes == 12) {
            mensaje= "Invierno";}
    else if  (mes>=3 && mes<=5){
            mensaje= "Primavera";}
    else if (mes>=6 && mes<=8){
            mensaje= "Verano";}
    else if (mes>=9 && mes<=11){
            mensaje= "Otoño";}
    else {mensaje= "No existe";};
            
    return mensaje;
    };
        
console.log(estaciones2(4));
console.log(estaciones2(12));
console.log(estaciones2(8));
console.log(estaciones2(9));
//console.log(`mes: ? ${estaciones2( prompt("Elige el número de un mes: ", 0))}`);

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/

// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

// const edad = prompt("Escribe tu edad: ",15);

// alert(edad >=18 ? "El usuario es mayor de edad": "El usuario no es mayor de edad ");


// FACTORIAL refactorizacion

//......... Cálculo del factorial de un número usando recursividad ...............

function factorialConRecursividad( numero ){
      return numero <= 1 ? 1: numero * factorialConRecursividad( numero -1 );
       
    };


console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`);

