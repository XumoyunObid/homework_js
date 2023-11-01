let color = "#" + Math.random().toString(16).slice(2, 8);
document.getElementById("colors").innerHTML = color;

let bodyColor = document.querySelector("body");
bodyColor.style.backgroundColor = color;