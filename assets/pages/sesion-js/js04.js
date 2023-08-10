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








