let dollar = +prompt("Hozirda dollar kursi qancha?");
let euro = +prompt("Hozirda yevro kursi qancha?");

let ticket = 350;
let weeklyExpenses = 500;
let picnic = 300;

let travelExpenses = (ticket + weeklyExpenses) * dollar + picnic * euro;

let howMuchMoney = prompt("Qancha pulingiz bor Eshmatjon?");

if (travelExpenses < howMuchMoney) {
    console.log("Qayerga sayoxat qlamiz endi?")
} else {
    console.log("Pulingiz yetmadi, keyinroq keling")
};
