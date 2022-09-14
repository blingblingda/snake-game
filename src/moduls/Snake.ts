class Snake {
  element: HTMLElement;
  head: HTMLElement;
  body: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div")!;
    this.body = this.element.getElementsByTagName("div");
  }

  // get head coordinate
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  // set head new coordinate
  set X(value: number) {
    this.moveBody();

    if (value < 0 || value > 290) {
      throw new Error("Hit the wall!");
    } else {
      this.head.style.left = value + "px";
    }
  }

  set Y(value: number) {
    this.moveBody();

    if (value < 0 || value > 290) {
      throw new Error("Hit the wall!");
    } else {
      this.head.style.top = value + "px";
    }
  }

  addBody = () => {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  };

  // move body with head
  moveBody = () => {
    for (let i = this.body.length - 1; i > 0; i--) {
      let X = (this.body[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.body[i - 1] as HTMLElement).offsetTop;
      (this.body[i] as HTMLElement).style.left = X + "px";
      (this.body[i] as HTMLElement).style.top = Y + "px";
    }
  };
}

export default Snake;
