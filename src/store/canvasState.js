import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  context = null;
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
  }
}

export default new CanvasState();
