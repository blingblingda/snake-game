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
    // snake is not allowed to go back
    if (this.X === value) {
      return;
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        value = this.X - 10;
      } else {
        value = this.X + 10;
      }
    }

    // snake body moving with head
    this.moveBody();

    // snake hit the wall
    if (value < 0 || value > 290) {
      throw new Error("Hit the wall!");
    } else {
      this.head.style.left = value + "px";
    }
  }

  set Y(value: number) {
    if (this.Y === value) {
      return;
    }
    if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

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
