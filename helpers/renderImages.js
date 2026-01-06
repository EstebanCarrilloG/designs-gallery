import imgsDb from "../database/imgsDb.js";

function renderImages() {
  imgsDb.forEach((e, i) => {
    let imgContainer = document.createElement("div");

    imgContainer.classList.add("img-container");

    let img = document.createElement("img");

    img.className = "gallery-img";
    img.id = i;
    img.src = e.src;
    img.alt = e.alt;
    img.height = e.height ? e.height : "300";

    imgContainer.appendChild(img);

    let caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = e.alt ? e.alt : "Sin título";
    imgContainer.appendChild(caption);

    setTimeout(function () {
      galeria.appendChild(imgContainer);
    }, i * 500);
  });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default renderImages;
