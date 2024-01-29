import Tool from "./Tool";

export default class Pencil extends Tool {
  constructor(canvas) {
    super(canvas);
    this.name = "pencil";
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
    if (this.x === this.endX && this.y === this.endY) {
      this.context.beginPath();
      this.context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
      this.context.stroke();
      // this.context.moveTo(this.x, this.y);
    }
  }

  mouseDown(event) {
    this.mouseDown = true;
    this.x = event.x - event.target.offsetLeft;
    this.y = event.y - event.target.offsetTop;
    this.endX = event.x - event.target.offsetLeft;
    this.endY = event.y - event.target.offsetTop;
    // this.context.moveTo(this.x, this.y);
  }

  mouseMove(event) {
    if (this.mouseDown) {
      this.draw(event.x - event.target.offsetLeft, event.y - event.target.offsetTop);
    }
  }

  draw(x, y) {
    this.endX = x;
    this.endY = y;
    this.context.beginPath();
    this.context.arc(x, y, 1, 0, 2 * Math.PI);
    this.context.stroke();
    // this.context.moveTo(this.x, this.y);
  }
}
