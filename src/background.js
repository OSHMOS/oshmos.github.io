const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
];

function changeBgImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(img/${chosenImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100% 100%';
}

changeBgImage();
setInterval(changeBgImage, 5000);