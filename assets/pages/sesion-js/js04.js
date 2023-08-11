console.log("Bienvenidos a la sesión JS04 Matrices y bucles");
console.log("Ni perdono ni olvido Reto para Ed");


//Declaramos un arreglo de dos dimensiones (matriz)

const personasCh30 = [
  ["Luis", "Allan", "Aneth", "Maryluz"],
  ["Ed", "Leo", "Jimena", "Fer"],
  ["Lu", "Leo", "Daniel", "Gina"]
];

console.log(`Integrantes de bugbusters: ${personasCh30[2]} `);
console.log(`Integrantes de byteme: ${personasCh30[0].join(" ")} `);
console.log(`Integrantes de perrycode: ${personasCh30[1]}`);
console.log()

personasCh30[1].splice(3, 1, 'Bryan');
personasCh30[2][1] = "Bryan"
console.table(personasCh30);

for (let equipo = 0; equipo < personasCh30.length; equipo++) {
  for (let personas = 0; personas < personasCh30[equipo].length; personas++) {
    console.log(personasCh30[equipo][personas]);


    function basicOp(operation, value1, value2) {
      var cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2
      };
      return cases[operation]
    }
  }
}

basicOp("+", 2, 5);


let array1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let array2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54];

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + i;
    }
  }
};

console.log(findNeedle(array1));
console.log(findNeedle(array2));
console.log(findNeedle(array3));

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
console.table(personasCh30);

const myPet = "Kraken";
// for (const character of myPet  ){
//     console.log( character );
// }

// for (const equipo of personasCh30 ) {
//     console.log( equipo ); // Arreglo de equipos
//     for (const persona of equipo) {
//         console.log( persona ); //  Persona de cada equipo
//     }
//}
// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

*/
console.table(personasEnCh30);

function iterarEquipos(equipo, indice, arreglo) {
  console.log(`Indice ${indice}: ${equipo} `)
  equipo.forEach(iterarPersonas);
  return equipo; // arreglo de cada equipo integrador
}

function iterarPersonas(persona, indice) {
  console.log(`Indice P ${indice}: ${persona} `)
  return persona;
}


// personasEnCh30.forEach( iterarEquipos );

personasEnCh30.forEach((equipo, indexEquipo) =>
  equipo.forEach((persona, indexPer) =>
    console.log(` [${indexEquipo}][${indexPer}] : ${persona}`)));


myPet.split("").forEach((element) => console.log(element));

rompeCicloSuperior:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    if (i === 2 && j === 5) break rompeCicloSuperior;
    console.log(`${i} * ${j} = ${i * j}`);

  }
}

// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));

// ------------------- Uso de break en ciclos ----------------------------
// break no detiene la ejecución de la iteración en curso y termina el ciclo.

for (let index = 0; index < 10; index++) {
  if (index >= 5) break;
  console.log(index); // 0...4    
}

// Realizar tablas de multiplicar de 1 al 5 con for tradicional
/*
  1 * 1  = 1
  1 * 2  = 2
  ...
  5 * 9  = 45
  5 * 10 = 50
*/

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("===== Uso de break =========")
// Realizar la multiplicación hasta el 4
// 1*1, 1*2, 1*3, 1*4..... 5*3, 5*4
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    if (j === 5) break;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

console.log("===== Uso de break con tag =======")
// Realizar la multiplicación hasta el 2 * 4
// 1*1, 1*2, 1*3, 1*4..... 2*3, 2*4
rompeCicloSuperior:
for (let i = 1; i <= 5; i++) {

  for (let j = 1; j <= 10; j++) {
    if (i === 2 && j == 5) break rompeCicloSuperior;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// -------------- Uso de continue ---------------------
/*
 Termina la ejecución en la iteración actual y continua con la próxima iteración.
 ( o en el tag que se indique).
*/
console.log("===== Uso de continue con tag =======")
// Realizar la multiplicación hasta el  3
// 1*1, 1*2, 1*3 ..... 2*3... 5*3
continuaCicloSuperior:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    if (j > 3) continue continuaCicloSuperior;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}










// ============== Ciclo Do-While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla. La evaluación se realiza después de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.

 Sintaxis:

    do {
        sentencias;
    } while( condición );

*/







