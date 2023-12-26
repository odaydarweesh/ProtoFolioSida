let slideIndex = 1;
let x = document.getElementsByClassName("slideimage");

//change the images manually by the arrow buttons (changeImage)

automaticSlideshow();
displayImages(slideIndex);

function changeImage(n) {
    displayImages(slideIndex += n);
}

function displayImages(n) {
    let i;
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

// Automatic slid between the images....

function automaticSlideshow() {
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";

    animate = setTimeout(automaticSlideshow, 3000);
}

// Start and stop button // this function pause and start the game image....

function stopButtonSlide() {
    let buttonElement = document.getElementById("stop_button");

    if (animate > 0) {
        clearTimeout(animate);
        animate = 0;
        console.log("Stopped automatic slideshow");
    } else {
        automaticSlideshow();
        console.log("Started automatic slideshow");
        
    }
}

