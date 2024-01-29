import toolState from "../store/toolState";

export default class Tool {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.destroyEvents();
    this.context.lineWidth = toolState.lineWidth;
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

  set lineCap(cap) {
    this.context.lineCap = cap;
  }

  set lineJoin(join) {
    this.context.lineJoin = join;
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmouseup = null;
    this.canvas.onmousedown = null;
  }
}
