
let name = prompt("Iltimos ismingizni kiriting:");
let bday = prompt(
  "Tug'ilgan sanangizni quyidagi ko'rinishda kiriting (yil-oy-kun):"
);

let birthDate = new Date(bday);
let now = Date.now();
let birth = birthDate.getTime();

let years = parseInt((now - birth) / 1000 / 60 / 60 / 24 / 365.25);
let months = parseInt(
  ((now - birth) / 1000 / 60 / 60 / 24 / 365.25) * 12 - years * 12
);
let days = parseInt(
  (now - birth) / 1000 / 60 / 60 / 24 -
    (years * 365.25 + months * (365.25 / 12))
);

console.log(
  "Hurmatli, " +
    name.toUpperCase() +
    " siz " +
    years +
    " yil, " +
    months +
    " oy, " +
    days +
    " kun yashabsiz."
);


