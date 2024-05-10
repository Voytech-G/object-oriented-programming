import Slide from "./Slide.js";
export default class Slider {
  constructor(
    slides,
    sliderImageSelector,
    sliderTitleSelector,
    sliderDotsSelector,
    slideTime = 2000,
    slideActive = 0
  ) {
    this.slideImage = document.querySelector(sliderImageSelector);
    this.slideTitle = document.querySelector(sliderTitleSelector);
    this.slideDots = [...document.querySelectorAll(sliderDotsSelector)];
    this.slideTime = slideTime;
    this.slideActive = slideActive;
    this.slides = [];
    this.slideInterval = null;

    for (const slide of slides) {
      this.addSlide(new Slide(slide.img, slide.text));
    }
    window.addEventListener("keydown", (e) => this.keyDownSlide(e));
  }
  addSlide(slide) {
    this.slides.push(slide);
  }
  startSlider() {
    this.slideInterval = setInterval(
      (e) => this.changeSlide(e),
      this.slideTime
    );
  }
  changeDot() {
    const activeDot = this.slideDots.findIndex((dot) =>
      dot.classList.contains("slideshow-dot--active")
    );
    console.log(activeDot);
    this.slideDots[activeDot].classList.remove("slideshow-dot--active");
    this.slideDots[this.slideActive].classList.add("slideshow-dot--active");
  }
  changeSlide() {
    console.log(this);
    this.slideActive++;
    if (this.slideActive === this.slides.length) {
      this.slideActive = 0;
    }
    this.slideImage.src = this.slides[this.slideActive].image;
    this.slideTitle.textContent = this.slides[this.slideActive].text;
    this.changeDot();
  }
  keyDownSlide(e) {
    if (e.keyCode == 37 || e.keyCode == 39) {
      clearInterval(this.slideInterval);
      e.keyCode == 37 ? this.slideActive-- : this.slideActive++;
      if (this.slideActive === this.slides.length) {
        this.slideActive = 0;
      } else if (this.slideActive < 0) {
        this.slideActive = this.slides.length - 1;
      }
      this.slideImage.src = this.slides[this.slideActive].image;
      this.slideTitle.textContent = this.slides[this.slideActive].text;
      this.changeDot();
      this.startSlider();
    }
  }
}
