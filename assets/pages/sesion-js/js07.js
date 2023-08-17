console.log("Sesión JS07 Fetch y APIS");


//Programació síncrona

const primerPaso = () => {
  console.log("01-Inicio de mi programa");
}
const segundoPaso = () => {
  console.log("02-Intermedio de mi programa");
}
const tercerPaso = () => {
  console.log("03-Fin de mi programa");
}

primerPaso();
segundoPaso();
tercerPaso();


//Programació asíncrona

//setTimeout()
/*

Establece un temporizador que ejecuta una funcion de callback una vez que expire el temporizador.

sintaxis:

setTimeout(fncCallback, tiempo_ms, argumentos_fnc);
setTimeout(()=>{}, tiempo_ms);

*/

const saludo = (name) => console.log(`Hola ${name}`);

const pasoAsincrono = (name) => {
  // setTimeout(  saludo, 5000, name  )
  // setTimeout (  ( person )=> console.log(`Hola ${person}`), 5000, name  );
  setTimeout(() => console.log(`Hola ${name}`), 5000);

};

console.log("----------------------------------");

// primerPaso();
// pasoAsincrono("Babby Yoda multiverso");
// tercerPaso();


/*
--------------------setInterval()---------------------
Ejecuta una función

*/

const pasoConIntervalo = () => {
  setInterval(() => console.log("Hola " + new Date().toLocaleString()), 3000);
}

// primerPaso();
// pasoConIntervalo();
// tercerPaso();


// -------------------------Iniciar y detener setInterval ----------

const startInterval = document.getElementById("startInterval");
const stopInterval = document.getElementById("stopInterval");
const dateH2 = document.getElementById("dateH2");
let idInterval = []; // la referencia del ID que nos proprociona setInterval

startInterval.addEventListener("click" , ()=>{
    const id = setInterval(  ()=>{ dateH2.innerHTML = new Date().toLocaleString() }, 1000   );
    // LIFO
    idInterval.push( id );
    disableStartButton();
});

stopInterval.addEventListener("click" , ()=>{
    console.table( idInterval );
    clearInterval( idInterval.pop() ); // detener el intervalo
    enableStartButton();
}  );

const stateButtons = ( startButtonState = false, stopButtonState = false ) => {
    // startInterval.disabled = startButtonState;
    // stopInterval.disabled = stopButtonState;
     startInterval.style.display = startButtonState ? "none" : "inline";
     stopInterval.style.display = stopButtonState ? "none" : "inline";
};

const disableStartButton = () =>{
    stateButtons( true, false);
};

const enableStartButton = () =>{
    stateButtons( false, true);
};

enableStartButton();