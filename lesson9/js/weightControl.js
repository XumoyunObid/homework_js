function wctrl() {
  let weight = prompt("Vazningizni kilogrammda kirgazing:");
  let height = prompt("Bo'yingizni santimetrda kirgazing:");

  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);
  bmi = bmi.toFixed(2);

if (bmi < 24.9) {
    return "Siz ozg'insiz " + bmi;
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Sizning vazningiz normal " + bmi;
  } else if (bmi >= 25 && bmi < 30) {
    return "Sizning vazningiz normadan yuqori " + bmi;
  } else if (bmi >= 30 && bmi < 40) {
    return "Siz semissiz " + bmi;
  } else {
    return "Siz o'ta semissiz " + bmi;
  }

}
