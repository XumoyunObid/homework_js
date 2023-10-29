let text = String(prompt("Nmadir yozing: "));
let reversedText = "";

for (let i = text.length -1; i>= 0; i--) {
    reversedText = reversedText + text[i];
}

if (reversedText === text) {
    console.log("Kiritilgan so'z o'zinig teskarisiga teng")
} else {
    console.log("Kiritilgan so'z o'zining teskarisiga teng emas")
}