import Tool from "./Tool";

export default class Tree extends Tool {
  constructor(canvas) {
    super(canvas);
    this.name = "tree";
    this.listen();
    this.mouseDown = false;
  }

  listen() {
    this.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.onmouseout = () => {
      this.mouseDown = false;
    };
  }

  mouseUp(event) {
    this.mouseDown = false;

    // this.context.moveTo(this.x, this.y);
  }

  mouseDown(event) {
    this.mouseDown = true;
    this.startX = event.x - event.target.offsetLeft;
    this.startY = event.y - event.target.offsetTop;
    this.context.beginPath();
    this.context.moveTo(this.x, this.y);
  }

  mouseMove(event) {
    if (this.mouseDown) {
      this.draw(event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
    }
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.fill();
  }
}
