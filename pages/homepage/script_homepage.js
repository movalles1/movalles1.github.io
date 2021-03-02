// begin auto slideshow once dom is loaded
document.addEventListener('DOMContentLoaded', showSlidesAuto);

// code adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp

// start at the first image
let slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// this function will show the slide at the given index and hide all other pictures
function showSlides(n) {
  var i;
  // grab slide list
  var slides = document.getElementsByClassName("pictures");
  // go back to beginning (when navigating right)
  if (n > slides.length) {slideIndex = 1}
  // go back to end (when navigating left)
  if (n < 1) {slideIndex = slides.length}

  // hide all images
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // set image at slideIndex to display
  slides[slideIndex-1].style.display = "block";
}

// automatic scrolling
function showSlidesAuto() {
  // increase slide index
  slideIndex++;
  // call show slides
  showSlides(slideIndex)
  // change image every 3 seconds
  setTimeout(showSlidesAuto, 3000);
}

