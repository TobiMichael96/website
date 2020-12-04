function show(imgs) {
    // Get screen width
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    // Get the gallery
    const home = document.getElementById("home");
    // Get the gallery
    const gallery = document.getElementById("gallery");
    // Get the expanded image
    const expandImg = document.getElementById("expandedImg");
    // Get the expanded image parent class name
    const className = imgs.parentElement.className;
    // Get the image text
    const imgText = document.getElementById("imgText");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;

    if (className === "portrait") {
        if (width > 800) {
            expandImg.parentElement.style.width = "22%";
        } else {
            expandImg.parentElement.style.width = "70%";
        }
        expandImg.parentElement.style.paddingTop = "10px";
    } else if (className === "portrait_alt") {
        if (width > 800) {
            expandImg.parentElement.style.width = "27%";
        } else {
            expandImg.parentElement.style.width = "80%";
        }
        expandImg.parentElement.style.paddingTop = "10px";
    } else if (className === "square") {
        expandImg.parentElement.style.width = "43%";
        expandImg.parentElement.style.paddingTop = "70px";
    } else {
        expandImg.parentElement.style.paddingTop = "80px";
        expandImg.parentElement.style.width = "93%";
    }
    // Show the container element (hidden with CSS)
    expandImg.parentElement.parentElement.style.display = "block";
    gallery.style.display = "none";
    home.style.display = "none";
}

function hide(image) {
    // Get the gallery
    const home = document.getElementById("home");
    // Get the gallery
    const gallery = document.getElementById("gallery");

    gallery.style.display = "grid";
    home.style.display = "block";
    image.style.display='none';
}