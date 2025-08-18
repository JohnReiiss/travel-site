
const heroSection = document.querySelector("section.hero-site");

const images = [
  "src/images/travel-site-banner-11.png",
  "src/images/travel-site-banner-2.png",
  "src/images/travel-site-banner-3.png",
  "src/images/travel-site-banner-4.png",
  "src/images/travel-site-banner-5.png",
  "src/images/travel-site-banner-6.png",
  "src/images/travel-site-banner-7.png",
  "src/images/travel-site-banner-8.png",
  "src/images/travel-site-banner-9.png",
  "src/images/travel-site-banner-10.png",
  "src/images/travel-site-banner-1.png",
  "src/images/travel-site-banner-12.png",
  "src/images/travel-site-banner-13.png",
  "src/images/travel-site-banner-14.png",
  "src/images/travel-site-banner-15.png",
];

let currentIndex = 0;

function changeBackground() {
  heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

changeBackground();
setInterval(changeBackground, 8000);
