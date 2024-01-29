import Tool from "./Tool";

export default class Rings extends Tool {
  constructor(canvas) {
    super(canvas);
    this.name = "rings";
    this.listen();
    this.mouseDown = false;
  }

  listen() {
    this.canvas.onmousemove = this.mouseMove.bind(this);
    this.canvas.onmouseup = this.mouseUp.bind(this);
    this.canvas.onmousedown = this.mouseDown.bind(this);
    this.canvas.onmouseout = () => (this.mouseDown = false);
  }

  mouseUp(event) {
    this.mouseDown = false;
  }

  mouseDown(event) {
    this.mouseDown = true;
    this.startX = event.x - event.target.offsetLeft;
    this.startY = event.y - event.target.offsetTop;
    this.saved = this.canvas.toDataURL();
    // this.context.moveTo(this.startX, this.startY);
  }

  mouseMove(event) {
    if (this.mouseDown) {
      let currentX = event.x - event.target.offsetLeft;
      let currentY = event.y - event.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height, event);
    }
  }

  draw(x, y, w, h, event) {
    // this.canvas.width = this.canvas.width;
    // if (this.timeout) clearTimeout(this.timeout);
    // this.timeout = setTimeout(() => {
    this.context.beginPath();
    this.context.arc(x, y, Math.abs(w), 0, 2 * Math.PI);
    this.context.stroke();
    // }, 10);
  }
}
