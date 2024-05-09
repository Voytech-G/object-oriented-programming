import Slider from "./Slider.js";

const slides = [
  {
    img: "img/img1.webp",
    text: "First slide",
  },
  {
    img: "img/img2.webp",
    text: "Second slide",
  },
  {
    img: "img/img3.webp",
    text: "Third slide",
  },
];

const slider = new Slider(
  slides,
  ".slideshow-img",
  ".slideshow-title",
  ".slideshow-dots",
  2000
);
