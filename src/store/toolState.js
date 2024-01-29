import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
  }

  setStrokeColor(color) {
    this.tool.strokeColor = color;
  }

  setLineWidth(width) {
    this.tool.lineWidth = width;
  }

  setFillColor(color) {
    this.tool.fillColor = color;
  }
}

export default new ToolState();
