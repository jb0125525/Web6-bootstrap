console.log("Bienvenidos a la sesión JS04 Matrices y bucles");
console.log("Ni perdono ni olvido Reto para Ed");


//Declaramos un arreglo de dos dimensiones (matriz)

const personasCh30= [
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

for ( let equipo = 0; equipo<personasCh30.length; equipo++){
    for( let personas = 0; personas<personasCh30[equipo].length; personas++){
        console.log(personasCh30[equipo][personas]);
    }
}
