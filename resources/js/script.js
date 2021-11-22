/*
slide functions
*/

// Define slide variable for decreasing / increasing / setting slide number, starting at slide no. 1.
let slideCurrent = 1;
// Define slide count so we can wrap around to first / last slide once reaching the end.
const slideCount = 4;

// This function hides all the elements in the current slide.
function hideCurrentSlide() {
    //Left side content
    document.getElementById("slideLeft" + slideCurrent).style.display = "none";
    //Slide Image
    document.getElementById("slideImage" + slideCurrent).style.display = "none";
    //Slide Image Title
    document.getElementById("slideTitle" + slideCurrent).style.display = "none";
    //Color of the dots
    document.getElementById("progressDot" + slideCurrent).style.backgroundColor = "var(--lightTertiaryColor)";
}

//This function shows all the elements in the next slide.
function showNextSlide() {
    //Left side content
    document.getElementById("slideLeft" + slideCurrent).style.display = "block";
    //Slide Image
    document.getElementById("slideImage" + slideCurrent).style.display = "block";
    //Slide Image Title
    document.getElementById("slideTitle" + slideCurrent).style.display = "block";
    //Color of the dots
    document.getElementById("progressDot" + slideCurrent).style.backgroundColor = "var(--accentingColor)";
}

//change slide (for chevrons < >)
function changeSlide(slideDirection) {
//Hide the slide
hideCurrentSlide();
//find out what the next slide in line is
slideCurrent = slideCurrent + slideDirection;
//if the next slide is out of bounds (higher than slide count or lower than 1), wrap around to the start/end.
if (slideCurrent > slideCount) {
    slideCurrent = 1;
}
else if (slideCurrent <= 0) {
    slideCurrent = slideCount;
}
//Set next slide's content to display.
showNextSlide();
}

//Set a specific slide (For progress dots)
function setSlide(slideNumber) {
//Much like the next/previous buttons, we need to hide the *current* slide.
hideCurrentSlide();
//Using the slideNumber variable passed by the circle controls, we update the slideCurrent to match and set the next slide to display.
//there is no need to check for out of bounds cases here, since 
slideCurrent = slideNumber;
showNextSlide();
}