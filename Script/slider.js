const slider = document.querySelectorAll('.home_slider');
const slides = document.querySelectorAll('.home_slides');
const slidesPerSlider = slides[0].children.length; // returns the number of child elements inside the first .home_slides
let index = 0;
let interval;

const showSlide = (i) => {
  if (i < 0) {
    index = slidesPerSlider - 1;
  } else if (i >= slidesPerSlider) {
    index = 0;
  } else {
    index = i;
  }

  slides.forEach(el => {
    el.style.transform = `translateX(${-index * 100}%)`;
  });
};

function startSlider() {
  interval = setInterval(() => {
    showSlide(index + 1);
  }, 4000);
}

startSlider();

slider.forEach(el => {
  el.addEventListener('mouseenter', () => clearInterval(interval));
  el.addEventListener('mouseleave', () => startSlider());
});