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

const areaTriangulo = (base = 0, altura = 0) => (base * altura) / 2

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

const sumatoriaMultiplesNumeros = (a = 0, b = 0, ...rest) => {
    let suma = a + b;
    for (let i = 0; i < rest.length; i++) {
        suma = suma + rest[i];
    }
    return suma;
};

console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2)}`); // 7
console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2, 5, 10, 9)}`); //26



/* 
Función callback

Es una función que se pasa a otra función que se pasa como argumento.
Se pasa en el argumento como referencia. SIN PARÉNTESIS.




*/

function saludoSquirtle(nombre) {
    return "Vamoacalmarno " + nombre;
};

function saludoALosPokemon() {
    return "Yo te elijo";
};

function eligiendoPokebola(saludo, nombre) {
    console.log("Hola, estás en la liga pokemon");
    console.log("Elige a tu mejor Pokemon");
    console.log(saludo(nombre));
};

eligiendoPokebola(saludoALosPokemon);
eligiendoPokebola(saludoSquirtle, "Leo");
eligiendoPokebola(function (nombre) { return "quiii soy " + nombre }, "Cubone");
eligiendoPokebola((nombre) => "quiii soy " + nombre, "Cubone");

/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.

 student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

  salida: "Cursos en común: Programming, Music"

  Resolviendo con ciclos anidados




*/
const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];



function cursosEnComun(student1Courses, student2Courses) {
    const commonCourses = []; // guardar los cursos en comun

    for (let i = 0; i < student1Courses.length; i++) { // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
        for (let j = 0; j < student2Courses.length; j++) { // ["Geography", "Spanish", "Programming", "Music"]
            console.log(` ${student1Courses[i]} === ${student2Courses[j]} : ${student1Courses[i] === student2Courses[j]}`)
            if (student1Courses[i] === student2Courses[j]) {
                commonCourses.push(student1Courses[i]);
            }
        }
    }

    return `Cursos en común ${commonCourses}`
}
console.log(cursosEnComun(student1Courses, student2Courses));



// -----------Resolviendo con filter include

function getCommonCoursesWithFilter(array1Courses, array2Courses) {
    return array1Courses.filter((course) => array2Courses.includes(course));
};

console.log(`Cursos en común filter : ${getCommonCoursesWithFilter(student1Courses, student2Courses)}`);



//--------------- Resolviendo con filter e include por partes ----------------------
//--------------- Resolviendo con filter e include por partes ----------------------
console.log("###################################");
function includeCourse(course, index, array) {
    console.log(`Elemento ${course}, indice ${index}, arreglo ${array} , includes ${student2Courses.includes(course)}`);
    return student2Courses.includes(course);//evaluacion ----> ["Geography", "Spanish", "Programming", "Music"]
}


function getCoursesWithFilter(array1Courses, array2Courses) {
    const commonCourses = array1Courses.filter(includeCourse); // ["Math", "English", "Programming", "Biology", "Physics", "Music"];
    return commonCourses;
}
console.log(`Comúnxpartes: ${getCoursesWithFilter(student1Courses, student2Courses)}`);


// Contar cantidad de caracteres de una frase

const phasePP = "Peso Pluma pica papas con un pico y una pala con un pico pica papas Peso Pluma";
const counterCharacter = (phase, character) => phase.toLowerCase().split(character).length - 1;

console.log(`Cantidad de letras 'p' : ${counterCharacter(phasePP, "p")} `); // 13


// ----------------Recursividad

/*
Una funcion que se llama así misma mientras dure su ejecución.

Se utilizan en algoritmos y soluciones que se basan en la división y conquista como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda y ordenamiento.


Patrón: 
function nombreFuncionRecursiva ( parametro ){
    if ( condicionParo ){
        return expresion;        
    }
    else{
        // llamada recursiva
        nombreFuncion( nuevoParametro );
    }
}





*/



//......... Cálculo del factorial de un número usando ciclo for ...............
function factorialConCicloFor(numero) {
    let factorial = 1;

    for (let i = numero; i > 0; i--) {// i = i - 1
        console.log(`factorial: ${factorial} * ${i} = ${factorial * i}`)
        factorial = factorial * i;
    }
    return factorial;
}

console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`) // 1*2*3*4*5 = 120

function factorialConRecursividad (numero){
if (numero <= 0 ) {
    return 1;
} else {
    console.log(`${numero} * ${numero-1}`)
    return numero * factorialConRecursividad(numero -1);
}


};

console.log(` El factorial recursivo de 5 es : ${factorialConRecursividad(5)}`);


/*
Generar una función recursiva que muestre en consola un saludo donde se sondeque el numero de saludos deseado.

ej: saludar 10 veces

Saludo 1
Saludo 2
Saludo 3
...
Saludo 10

*/

function saludo2(numeroSaludo){
    if (numeroSaludo === 0) {
        return 1;
    } else {
            console.log(`Saludo: ${numeroSaludo}`)
            return numeroSaludo * saludo2 (numeroSaludo - 1);
    }
    
    }
    saludo2(10);






