// 같은 크기여야 좋을 듯
const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
];

const background = document.querySelector('.background');
const bgImage = document.createElement("img");

function changeBgImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `img/${chosenImage}`;
    background.appendChild(bgImage);
}

changeBgImage();
setInterval(changeBgImage, 5000);