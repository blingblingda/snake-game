class Food {
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!;
  }

  //The get keyword will bind an object property to a function. When this property is looked up now the getter function is called. The return value of the getter function then determines which property is returned.
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  foodChange() {
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

export default Food;
