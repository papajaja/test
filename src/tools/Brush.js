import Tool from "./Tool";

export default class Brush extends Tool {
  constructor(canvas) {
    super(canvas);
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
  }

  mouseDown(event) {
    this.mouseDown = true;
    this.context.beginPath();
    this.context.moveTo(event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
  }

  mouseMove(event) {
    if (this.mouseDown) {
      this.draw(event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
    }
  }

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.lineWidth = 2;
    this.context.stroke();
  }
}
