let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

let bgChange = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

let randomColor1 = () => {
    const letters = '0123456789ABCDEF';
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let randomColor2 = () => {
    const letters = '0123456789ABCDEF';
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let randomColor = () => {
    body.style.background = "linear-gradient(to right, " + randomColor1() + ", " + randomColor2() + ")";

    css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomColor);

color1.addEventListener("input", bgChange);

color2.addEventListener("input", bgChange);