let fNumber = +prompt("Bir son kiritng: ");

if (fNumber > 0) {
    for (let i = 0; i < fNumber + 1; i++) {
        if (i % 2 === 0) {
            console.log(i + " Juft son")
        } else {
            console.log(i + " Toq son")
        }
    }
} else {
    console.log("Iltimos natural son kiriting!")
}
