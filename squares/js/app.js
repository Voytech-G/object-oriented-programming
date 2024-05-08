class SquareAdd {
  constructor(initialNumber, selector, step) {
    this.number = initialNumber;
    this.squareAddBtn = document.querySelector(selector);
    this.step = step;
    this.squareAddBtn.addEventListener("click", this.addSquare.bind(this));
  }
  addSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = this.number;
    this.number += this.step;
    document.querySelector(".squares-container").appendChild(square);
  }
}

const squareAdd = new SquareAdd(100, ".add-square", 8);
