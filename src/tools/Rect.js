import Tool from "./Tool";

export default class Rect extends Tool {
  constructor(canvas) {
    super(canvas);
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
    const image = new Image();
    image.src = this.saved;

    image.onload = () => {
      // this.canvas.width = this.canvas.width;
      this.context.clearRect(0, 0, event.target.width, event.target.height);

      this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      this.context.beginPath();
      this.context.rect(x, y, w, h);
      this.context.lineWidth = 2;
      this.context.stroke();
    };
  }
}
