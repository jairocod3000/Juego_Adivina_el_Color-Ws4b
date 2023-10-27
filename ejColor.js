const colors = generateRandomColors(3);
const colorDisplay = document.getElementById("color-display");
const colorBoxes = document.querySelectorAll(".color-box");
const mensaje = document.getElementById("mensaje");

let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = colors[i];

    colorBoxes[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) {
            mensaje.textContent = "¡Correcto!";
            changeColors(pickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            mensaje.textContent = "Inténtalo de nuevo";
        }
    });
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function pickColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function changeColors(color) {
    for (let i = 0; i < colorBoxes.length; i++) {
        colorBoxes[i].style.backgroundColor = color;
    }
}