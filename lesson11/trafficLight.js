function redlight() {
    let red = document.querySelector("#redLight");
    red.classList.toggle("red");
}

function yellowlight() {
    let yellow = document.querySelector("#yellowLight");
    yellow.classList.toggle("yellow");
}

function greenlight() {
    let green = document.querySelector('#greenLight');
    green.classList.toggle("green");
}

function tLight() {
    setTimeout(() => {
        redlight();
    }, 0);

    setTimeout(() => {
        redlight();
        yellowlight();
    }, 5_000)

    setTimeout(() => {
        yellowlight();
        greenlight();
    }, 7_000)

    setTimeout(() => {
        greenlight();
        yellowlight();
    }, 12_000)

    setTimeout(() => {
        yellowlight();
    }, 14_000)
}

tLight()
setInterval(tLight, 14_000)