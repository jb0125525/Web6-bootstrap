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

function eligeColor(elementHTML, colorPredeterminado) {
    let nuevoColor = prompt("Elige un color para pintarme:", '');

    if (nuevoColor) {
        elementHTML.style.color = nuevoColor;
    } else {
        elementHTML.style.color = colorPredeterminado;
    }
}