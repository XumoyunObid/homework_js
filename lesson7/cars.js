let cars = ["BMW", "FERRARI", "LAMBORGHINI", "MALIBU"];

let car = prompt("Mashina nomini kiriting: ");

car = car.toUpperCase();

// cars.includes(car);

if (cars.includes(car)) {
    console.log("Sizda bu mashina allaqachon bor")
} else {
    cars.push(car)
    console.log(cars)
}