import imgsDb from "../database/imgsDb.js";

function renderImages() {
  imgsDb.forEach((e, i) => {

    let imgContainer = document.createElement("div");
    
    imgContainer.classList.add("img-container");

    let rndNumber = getRandomInt(-5, 5);

    let img = document.createElement("img");
        
    img.className = "gallery-img";
    img.id = i;
    img.src = e.src;
    img.alt = e.alt;
    img.height = e.height ? e.height : "300";
    img.style.transform = `rotate(${rndNumber}deg)`;

    imgContainer.appendChild(img);

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
