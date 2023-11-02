let images = [
    "/img/lightOff.jpg", 
    "/img/lightOn.jpg"
];

let i = 0;

let btn = document.querySelector(".btn");
let imageElem = document.querySelector(".image");

imageElem.setAttribute("src", images[i]);

btn.addEventListener("click", () => {
  if (++i === images.length) {
    i = 0;
  }

  imageElem.setAttribute("src", images[i]);
});
