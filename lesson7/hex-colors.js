let randomNumber = Math.floor(Math.random() * 10000000);
randomNumber = randomNumber.toString(16).padEnd(6, "0")
console.log("#" + randomNumber.slice(0, 6))