import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;
  context = null;
  undoList = [];
  redoList = [];
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
  }

  pushToUndo(data) {
    this.undoList.push(data);
  }

  pushToRedo(data) {
    this.redoList.push(data);
  }

  undo() {
    if (this.undoList.length > 0) {
      const image = new Image();
      image.src = this.undoList.pop();
      image.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      };
      this.redoList.push(this.canvas.toDataURL());
    } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  redo() {
    if (this.redoList.length > 0) {
      const image = new Image();
      image.src = this.redoList.pop();
      image.onload = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      };
      this.undoList.push(this.canvas.toDataURL());
    } else this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default new CanvasState();
