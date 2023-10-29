let sentence = prompt("Nimadir yozing: ");
let reversedWord = ""

for (let i = sentence.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + sentence[i]
}
console.log(reversedWord)