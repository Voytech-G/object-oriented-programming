import Slide from "./Slide.js";
export default class Slider {
  constructor(
    slides,
    sliderImageSelector,
    sliderTitleSelector,
    sliderDotsSelector,
    slideInterval = 2000,
    slideActive = 0
  ) {
    this.slideImage = document.querySelector(sliderImageSelector);
    this.slideTitle = document.querySelector(sliderTitleSelector);
    this.slideDots = [...document.querySelectorAll(sliderDotsSelector)];
    this.slideInterval = slideInterval;
    this.slideActive = slideActive;
    this.slides = [];

    for (const slide of slides) {
      this.slides.push(new Slide(slide.img, slide.text));
    }
    console.log(this.slides);
    window.addEventListener("keydown", (e) => this.keyDownSlide(e));
  }
}
