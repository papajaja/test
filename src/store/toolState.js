import { makeAutoObservable } from "mobx";

class ToolState {
  tool = null;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool) {
    this.tool = tool;
    switch (tool.name) {
      case "brush":
        console.log(tool.name);
        break;
      case "circle":
        console.log(tool.name);
        break;
      case "eraser":
        console.log(tool.name);
        break;
      case "line":
        console.log(tool.name);
        break;
      case "rect":
        console.log(tool.name);
        break;
      case "rings":
        console.log(tool.name);
        break;
    }
  }

  setStrokeColor(color) {
    this.tool.strokeColor = color;
  }

  setLineWidth(width) {
    console.log(`line width: ${width}`);
    this.lineWidth = width;
    if (this.tool) {
      this.tool.lineWidth = width;
    }
  }

  setFillColor(color) {
    this.tool.fillColor = color;
  }
}

export default new ToolState();
