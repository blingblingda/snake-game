import Food from "./Food";
import Panel from "./Panel";
import Snake from "./Snake";

class GameControl {
  food: Food;
  panel: Panel;
  snake: Snake;
  direction: string;
  isAlive = true;

  constructor() {
    this.food = new Food();
    this.panel = new Panel();
    this.snake = new Snake();
    this.direction = "";

    this.init();
  }

  init = () => {
    document.addEventListener("keydown", this.keydownHandler);
    this.run();
  };

  keydownHandler = (event: KeyboardEvent) => {
    this.direction = event.key;
    // console.log(event);
  };

  run = () => {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
    }

    this.eatFood(X, Y);

    // catch error
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error) {
      alert((error as Error).message + " Game Over.");
      this.isAlive = false;
    }

    // The init() will only be executed once with empty direction, so setTimeout can rerun run fn every 300ms, because it is in run fn.
    this.isAlive &&
      setTimeout(this.run.bind(this), 300 - (this.panel.level - 1) * 30);
  };

  eatFood = (X: number, Y: number) => {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.foodChange();
      this.panel.addScore();
      this.snake.addBody();
    }
  };
}

export default GameControl;
