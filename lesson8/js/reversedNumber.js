let sentence = prompt("Qandaydir son yozing: ");
let reversedNumber = "";

for (let i = sentence.length - 1; i >= 0; i--) {
    reversedNumber = reversedNumber + sentence[i]
}
console.log( + reversedNumber)