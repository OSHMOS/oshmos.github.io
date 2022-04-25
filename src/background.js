const images = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg'];
// const h1 = document.querySelectorAll('#greeting_ h1');

function changeBgImage() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(img/${chosenImage})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
}

// if (document.body.backgroundImage === 'url(img/img2.jpeg)') {
//   h1.style.color = black;
// }
changeBgImage();
setInterval(changeBgImage, 5000);
