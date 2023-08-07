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

function multiplica(a,b){
    return a*b;
};

console.log(multiplica(4,3));


// Funciones expresadas function expressions
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

const sum = function sumatoria(a,b){
    return a+b
};

console.log(`El resultado de 4+2 : ${sum(4,2)}`);

const sum2 = function (a,b){
    return a+b
};

console.log(`El resultado de 4+2 : ${sum2(4,2)}`);

let saludo; //undefined
const localidad = "Buenos Aires";

if (localidad == "Buenos Aires") {
    saludo = function (name) {return `Hola ${name}`};
}
    else {
        saludo = function (name){ return `Buenos días ${name}`}
    };

console.log(saludo("Sergio"));

/* 
Funciones que se autoinvocan, se pueden definit con funciones anónimas.


Sintaxis:

(function (parametros) {})(argumentos);
Ejemplo:
*/

( function (name){
    console.log(`Mellamo ${name} y me autoinvoco`);
})("ChatGPT");

