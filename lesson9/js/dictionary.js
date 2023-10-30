let words = {
  olma: { ru: "Яблоко", eng: "Apple" },
  apelsin: { ru: "Апельсин", eng: "Orange" },
  ananas: { ru: "Ананас", eng: "Pineapple" },
  qulpnay: { ru: "Клубника", eng: "Strawberry" },
  uzum: { ru: "Виноград", eng: "Grapes" },
  banan: { ru: "Банан", eng: "Banana" },
  tarvuz: { ru: "Арбуз", eng: "Watermelon" },
  shaptoli: { ru: "Персик", eng: "Peach" },
  gilos: { ru: "Вишня", eng: "Cherry" },
  mandarin: { ru: "Мандарин", eng: "Mandarin" },
  anor: { ru: "Гранат", eng: "Pomegranate" },
};

function translate(fruits, language) {
    if (words[fruits]) {
        return words[fruits][language];
    } else {
        console.log("So'z topilmadi")
    }
}