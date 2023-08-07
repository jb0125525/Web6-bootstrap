console.log("Bienvenido a la sesión JS01");

// 7 Datos primitivos
// Numbers
// Boolean
// null
// undefined
// BigInt
// Symbol


//Tipos de datos: primitivos y no primitivos

//No primitivos: objetos, arreglos nos ayudan a hacer tareas más fácilmente

//tipo de dato string
const stringData = "Holi crayoli!";
console.log(stringData);

//tipos de datos number: positivos, negativos, decimales, NaN, +infinity, -infinity.
// para un salto de línea se puede utilizar \n, pero en template string no es necesario
console.log(`Tipos de datos number: 
${12},${-6}, ${0.454}, ${5*"Hola"}(nan), ${45/0} (infinito)`);


// Valor máximo represnetable en javascript que es 1.79e+308
console.log(`Valor máximo valor representable en JavaScript: ${ Number.MAX_VALUE }`); //1.79e+308
console.log(`Si el valor es mayor que 1.799e+308: ${ 1.79e+310 }`);//Infinity

console.log(`Valor ENTERO máximo seguro representable en JavaScript: ${ Number.MAX_SAFE_INTEGER }`);//9007199254740991

// Cuando se realizan operaciones que arrojan números más allá del máximo valor entero representable, se pierde precisión en los resultados

console.log(`MAX_SAFE_INTERGER +1 : ${Number.MAX_SAFE_INTEGER +1 }`);//
console.log(`MAX_SAFE_INTERGER +2 : ${Number.MAX_SAFE_INTEGER +2 }`);//
console.log(`MAX_SAFE_INTERGER +3 : ${Number.MAX_SAFE_INTEGER +3 }`);//
console.log(`MAX_SAFE_INTERGER +4 : ${Number.MAX_SAFE_INTEGER +4 }`);//

// Tipos de datos BigInt
// Sirven para representar valores numéricos enteros, de los tipos number no pueden representar o no es seguro

console.log("Operaciones con BigInt");
const myBigInt = 9007199254740991n;
console.log(`MAX_SAFE_INTERGER +1 : ${myBigInt +1n }`);//
console.log(`MAX_SAFE_INTERGER +2 : ${myBigInt +2n }`);//
console.log(`MAX_SAFE_INTERGER +3 : ${myBigInt +3n }`);//
console.log(`MAX_SAFE_INTERGER +4 : ${myBigInt +4n }`);//


// tipo de dato Boolean
// se tienen dos estados true/false

console.log(`Tipo de dato verdadero: ${true}`);
console.log(`Tipo de dato falso: ${false}`);

//tipo undefined
//Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log(`Tipo de dato myVar ${myVar}`);

//tipo null
//Una variable que intencionalmente se borra el tipo de dato

let myVarNull;//undefined
console.log(`Tipo de dato myVarNull: ${myVarNull}`);//undefined
myVarNull = "No me gusta YLE";
console.log(`Tipo de dato myVarNull: ${myVarNull}`);//string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${myVarNull}`);// Object
console.log(`myVarNull es null: ${ myVarNull===null}`)//true

// tipo de dato Symbol
// Representa un valor unico que se puede utilizar como clave en objetos o identificador unico

const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "código";
console.log(`mySymbol === mySymbol2   ${ mySymbol === mySymbol2} `);

const myObj ={
    clave: "valor",
    [mySymbol]: 16,// Se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStore
    myKey: 123,
    [myKey]: 567,
};
console.log(myObj);








