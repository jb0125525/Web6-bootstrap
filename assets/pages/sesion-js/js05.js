console.log("Bienvenidos a la sesión JS05 Condiciones y expresiones");
console.log("Ni perdono ni olvido Reto para Ed");


/* Operadores aritmeticos
adicion
substraccion
multiplicacion
division
resto
exponencial
resto o modulo %
exponencial **



*/

console.log(4 % 3 + 2 * 3 / 2 - 1);


/* Operadores de asignación
 Asigna un valor a su operador izquierdo basándose en el valor de su operador derecho:

 asignacion=
 Operadores abreviados (compuestos):

 op1 += op2 ---> op1 = op1 + op2
 op1 *= op2 ---> op1 = op1 * op2
 op1 *= op2 ---> op1 = op1 - op2



*/

let asignacion = 3
console.log(asignacion += 3 * 3 ** 3 + 10);
console.log(asignacion += 3 * (3 ** 3) + 10);
console.log(2 ** 3 ** 3);

/* Operadores unitarios
Negación
-
*/
let numero =3;//
let dinero = - numero;//-3
let pago = +dinero;//-3 no se cambia el signo
let intereses = "5.23";// 5.23numerico
console.log(typeof(intereses));//number
intereses = 3;//
console.log( intereses += 5 + + "3");//11
/* Operadores  de post incremento u post decremento 
valor ++
valor --
*/

let number = 10;
++number; //preincremento
console.log(number);
++number;
console.log(number);

number =20;
console.log(++number);
console.log(number++);
console.log(number);


let index = 0
for (    ; index < 5 ; index++) {
    console.log(index);
    
}

let a= 0, b=0;

for (   ; a < 3; b= a++) {
    console.log(a,b);
   
    
}
//console.log(a,b);

let x = 3;
let y = ++x;

/* Operadores  de corto circuito
short-circuit
&& : la evaluación se detiene tan pronto como se encuentra un operador falso.
    Ya no se evalua el segundo operando y se retorna la expresion de OP1.

|| : OP1 && OP2 Si OP1 es verdader, se realiza la operacion de OP1, no se realiza la exprezion de OP2:
valor ++
valor --
*/

const va= true, vb =true, vc=true;
const n1 =

