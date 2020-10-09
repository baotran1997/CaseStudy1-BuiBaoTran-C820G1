function showMenu() {
  var textHeader = document.getElementById("textHeader").style.display;
  var iconHeader = document.getElementById("iconHeader").style.display;
  if (
    (textHeader == "" && iconHeader == "") ||
    (textHeader == "none" && iconHeader == "none")
  ) {
    document.getElementById("textHeader").style.display = "block";
    document.getElementById("iconHeader").style.display = "block";
    document.getElementById("logoAndMenu").style.backgroundColor = "";
  } else if (textHeader == "block" && iconHeader == "block") {
    document.getElementById("textHeader").style.display = "none";
    document.getElementById("iconHeader").style.display = "none";
    document.getElementById("logoAndMenu").style.backgroundColor = "";
  }
}

function onResize() {
  if (window.innerWidth >= 1000) {
    document.getElementById("logoAndMenu").style.backgroundColor = "";
    document.getElementById("textHeader").style.display = "flex";
    document.getElementById("iconHeader").style.display = "flex";
  } else {
    document.getElementById("textHeader").style.display = "none";
    document.getElementById("iconHeader").style.display = "none";
    document.getElementById("logoAndMenu").style.backgroundColor = "";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
