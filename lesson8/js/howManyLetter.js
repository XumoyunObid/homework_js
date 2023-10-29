let sentence = prompt("Nimadir yozib koring: ");
let letter = prompt("Yozgan narsangiz ichidan bir harf yozing: ");
miqdor = 0;
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
        miqdor++;
    } 
};
console.log(miqdor + "ta " + letter + " harfi bor ekan");