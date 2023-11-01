function myTimer() {
let now = new Date();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


let year = now.getFullYear();
let month = months[now.getMonth()];
let date = now.getDate();
let currentDay = weekday[now.getDay()];
let am_pm = now.toLocaleTimeString("en-US", {hour12: false});

let time = (am_pm.indexOf("PM") > -1) ? "PM" : "AM";


    document.getElementById("_clock").innerHTML = time + " " + am_pm + " " + currentDay + " " + month + " " + date + " "+ year + "-year";
}

setInterval(myTimer, 1000);

