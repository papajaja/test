export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.destroyEvents();
    // console.log("destroyed");
  }

  set strokeColor(color) {
    this.context.strokeStyle = color;
  }

  set fillColor(color) {
    this.context.fillStyle = color;
  }

  set lineWidth(width) {
    this.context.lineWidth = width;
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
  }
}
