let number = +prompt("Bir son kiriting; ");
if (number <=1) {
    console.log("Tubham murakkabham emas!")
}
else if (number === 2) {
    console.log("Tub son")
} else {
    let isTrue = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isTrue = false;
            break;
        } 
    } 
    if (isTrue) {
        console.log("Tub son")
    } else {
        console.log("Murakkab son")
    }
}