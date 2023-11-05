let time = prompt ("Quyidagi holatda sanani kirgiznig (Jan 1, 2024 00:00:00)")

let countDownDate = new Date(time).getTime();

let updater = setInterval(function() {

  let now = new Date().getTime();
    
  let span = countDownDate - now;
    
let DayInMilliseconds = 1000 * 60 * 60 * 24;
let days = Math.floor(span / DayInMilliseconds);

let remainingMilliseconds = span % DayInMilliseconds;
let HourInMilliseconds = 1000 * 60 * 60;
let hours = Math.floor(remainingMilliseconds / HourInMilliseconds);

remainingMilliseconds = remainingMilliseconds % HourInMilliseconds;
let MinuteInMilliseconds = 1000 * 60;
let minutes = Math.floor(remainingMilliseconds / MinuteInMilliseconds);

remainingMilliseconds = remainingMilliseconds % MinuteInMilliseconds;
let seconds = Math.floor(remainingMilliseconds / 1000);
    
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s left";
    
  if (span < 0) {
    clearInterval(updater);
    document.getElementById("timer").innerHTML = "Vaqt Tugadi!";
  }
}, 1000);