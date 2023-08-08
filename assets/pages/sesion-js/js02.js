console.log("Bienvenidos a la sesión JS02 Uso de funciones");

//Funciones declaradas
//declaration function o function statement


//Una de sus características es que tienen hosting
// hoisting: comportamiento de javaScript que permite a las declaraciones de variableso funciones se eleven al comienzo de su ámbito antes de que se ejecute el código. Esto solo aplica usando var.

/*
Función: Conjunto de instrucciones que ejecuta una tarea o calcula un valor.
        Es un código que se puede reutilizar.
        Sintaxis:
        function nombrefuncion (parámetros){
            cuerpo de la función, instrucciones
        };



*/

function multiplica(a, b) {
    return a * b;
};

console.log(multiplica(4, 3));


// Funciones expresadas 
//function expressions
/* Son funciones expresadas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas (no tienen nombre).
Las funciones expresadas no tienen hoisting, porque no se cargan en memoria
hasta que se utilice. 
Sintaxis_
const nombrevariable = function nombredelafuncion (parámetros){
    cuerpo de la función, instrucciones
};

Aqui dos ejemplos de cómo utilizar las funciones expresadas:

*/

const sum = function sumatoria(a, b) {
    return a + b
};

console.log(`El resultado de 4+2 : ${sum(4, 2)}`);

const sum2 = function (a, b) {
    return a + b
};

console.log(`El resultado de 4+2 : ${sum2(4, 2)}`);

let saludo; //undefined
const localidad = "Buenos Aires";

if (localidad == "Buenos Aires") {
    saludo = function (name) { return `Hola ${name}` };
}
else {
    saludo = function (name) { return `Buenos días ${name}` }
};

console.log(saludo("Sergio"));

/* 
Funciones autoinvocadas

Funciones que se autoinvocan, se pueden definir con funciones anónimas.


Sintaxis:

(function (parametros) {})(argumentos);
Ejemplo:
*/

(function (name) {
    console.log(`Mellamo ${name} y me autoinvoco`);
})("ChatGPT");



/* 
Funciones flecha
Arrow functions

Funciones similares a las funciones expresadas pero:
-no requiere la palabra reservada function
-si tiene una sola instruccion no requiere las llaves {}
-buscan reducir el número de líneas
-si la instruccion es el mismo retorno, no requiere la palabra return


Sintaxis:

const nombreVariable = (parametros) => insstruccion;

const nombreVariable = (parametros) => {
    mas de una instruccion;
    return expresion:
};

SE UTILIZAN  MUCHO EN REACT, SE CARGAN HASTA QUE SE UTILICEN

Ejemplo:
*/

// const areaRectangulo = function (base, altura){
//     return base * altura;
// };

const areaRectangulo = (base, altura) => base * altura

console.log(`El área es: ${areaRectangulo(3, 9)} m2.`);

/* 
Parámetros default
Default parameters

Inicializa un parámetro de la función si no se envía el argumento cuando se invoca.


Ejemplo:
*/

const areaTriangulo = (base=0, altura=0) => (base * altura) / 2

console.log(`El área es: ${areaTriangulo(3, 9)} m2.`);//13.5 m2
console.log(`El área es: ${areaTriangulo()} m2.`);//NaN si no tiene parámetros default

console.log((1000).toString());// valor decimal de 1000
console.log((1000).toString(2));//valor binario de 1000
console.log((1000).toString(16));// valor hexadecimal de 1000

/**
 * 
 * @param {number} base del triángulo
 * 
 */

/*
Parametos rest
Rest parameters

Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se representan como un array
Rest parameters debe estar al final de la lista de parametros

sintaxis:
        ...nombreParametros

*/

const sumatoriaMultiplesNumeros = (a=0, b=0, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++){
        suma = suma + rest[i];
      }
      return suma;
     };

console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2)}`); // 7
console.log(`Sumatoria de múltiples números: ${ sumatoriaMultiplesNumeros(2, 5, 10, 9)}`); //26



/* 
Función callback

Es una función que se pasa a otra función que se pasa como argumento.
Se pasa en el argumento como referencia. SIN PARÉNTESIS.




*/

function saludoSquirtle(nombre){
    return "Vamoacalmarno "+ nombre;
};

function saludoALosPokemon (){
    return "Yo te elijo";
};

function eligiendoPokebola(saludo, nombre){
    console.log("Hola, estás en la liga pokemon");
    console.log("Elige a tu mejor Pokemon");
    console.log(saludo(nombre));
};

eligiendoPokebola (saludoALosPokemon);
eligiendoPokebola (saludoSquirtle, "Leo");

