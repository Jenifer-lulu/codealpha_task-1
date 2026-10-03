let currentIndex = 0;
let images = document.querySelectorAll(".gallery img");

function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
  currentIndex = Array.from(images).indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}
function enterGallery() {
  document.getElementById("cover-page").style.display = "none";
  document.getElementById("gallery-section").style.display = "block";
}
