console.log("Página en construcción");

function clickPez() {
    alert("Estamos inspirados trabajando con rolas chidas");
};

function changeColor(elementHTML, color) {
    // alert("Que emoción");
    console.log(elementHTML);
    console.log(color);

    elementHTML.style.color = color;

}

function changeColorWithPrompt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeTextOfUserColor( elementHtml, color);
    changeColor( elementHtml, color );
}

function changeTextOfUserColor( element, color ) {
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>";
}

function changeTextOfUserColor( element, color ) {
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em> </h3>"; elementHTML.innerHTML = "<h3> Ahora soy <em>" + nuevoColor + "</em></h3>";
}

function resetColor(){
    const refRedColor = document.getElementById("red-color");
    const refGreenColor = document.getElementById("green-color");
    const refPurpleColor = document.getElementById("purple-color");
    const refUserColor = document.getElementById("user-color");

    refRedColor.style.color = "black";


    changeColor(refRedColor,'black');
    changeColor(refGreenColor,'black');
    changeColor(refPurpleColor,'black');
    changeColor(refUserColor,'black');
    changeTextOfUserColor( refUserColor, 'black');
}

function changeName(){
    const userName = prompt("Escribe tu nombre: ");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = `Hola ${userName}`;
}