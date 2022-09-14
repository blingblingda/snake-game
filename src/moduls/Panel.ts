class Panel {
  level = 1;
  score = 0;

  levelEl: HTMLElement;
  scoreEl: HTMLElement;
  maxLevel: number;
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.levelEl = document.getElementById("level")!;
    this.scoreEl = document.getElementById("score")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore = () => {
    this.scoreEl.innerHTML = ++this.score + "";
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  };

  levelUp = () => {
    if (this.level < this.maxLevel) {
      this.levelEl.innerHTML = ++this.level + "";
    }
  };
}

export default Panel;
