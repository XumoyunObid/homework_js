let number = +prompt("Bir son kiriting: ");
let sum = 1;

if (number <= 1) {
  console.log("Natural son");
} else {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      sum = sum + i;
    }
  }

  if (number === sum) {
    console.log("Mukammal Son")
  } else {
    console.log("Natural Son")
  }
}
