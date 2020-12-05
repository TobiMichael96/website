function show(imgs) {
    // Get screen width
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    // Get screen height
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    // Get the gallery
    const home = document.getElementById("home");
    // Get the gallery
    const gallery = document.getElementById("gallery");
    // Get the expanded image
    const expandImg = document.getElementById("expandedImg");
    // Get the expanded image
    const imageContainer = document.getElementById("ImageContainer");
    // Get the expanded image parent class name
    const className = imgs.parentElement.className;
    // Get the image text
    const imgText = document.getElementById("imgText");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;


    // Show the container element (hidden with CSS)
    imageContainer.parentElement.style.display = "block";
    gallery.style.display = "none";
    home.style.display = "none";
    document.body.style.width = "100%";

    if (width < 780) {
        const imageHeight = expandImg.clientHeight
        const top = (height - (imageHeight + 60)) / 2
        imageContainer.style.marginTop = top.toString() + "px";
    } else {
        imageContainer.style.height = (height * 0.94).toString() + "px";
        const imageWidth = expandImg.clientWidth;
        imgText.style.marginRight = (width / 2 - imageWidth / 2).toString() + "px";
    }
}

function hide(image) {
    // Get screen width
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    // Get the gallery
    const home = document.getElementById("home");
    // Get the gallery
    const gallery = document.getElementById("gallery");

    gallery.style.display = "grid";
    home.style.display = "block";
    image.style.display='none';

    if (width > 780) {
        document.body.style.width = "calc(100vw - 34px)";
    }
}

function resize() {
    // Get screen width
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    // Get screen height
    const height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    // Get the expanded image
    const expandImg = document.getElementById("expandedImg");
    // Get the expanded image
    const imageContainer = document.getElementById("ImageContainer");
    // Get the image text
    const imgText = document.getElementById("imgText");

    if (width < 780) {
        // Small screens
        const imageHeight = expandImg.clientHeight
        const top = (height - (imageHeight + 60)) / 2
        imageContainer.style.marginTop = top.toString() + "px";
        imageContainer.style.height = "100%";
        imgText.style.marginRight = "0";
    } else {
        // Big screens
        imageContainer.style.height = (height * 0.94).toString() + "px";
        const imageWidth = expandImg.clientWidth;
        imgText.style.marginRight = (width / 2 - imageWidth / 2).toString() + "px";
        imageContainer.style.marginTop = "0";
    }
}

window.onresize = function () {
    resize()
}
