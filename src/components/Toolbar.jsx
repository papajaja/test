import React, { useState } from "react";
import "../styles/Toolbar.scss";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Eraser from "../tools/Eraser";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Rings from "../tools/Rings";
import Tool from "../tools/Tool";

const Toolbar = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const settool = (tool) => {
    if (selectedTool) selectedTool.classList.remove("pseudo");
    const toset = document.querySelector("." + tool);
    setSelectedTool(toset);
    toset.classList.add("pseudo");
  };
  console.log(toolState.tool instanceof Brush);
  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => {
          settool("brush");
          toolState.setTool(new Brush(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn rect "
        onClick={() => {
          settool("rect");
          toolState.setTool(new Rect(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn circle"
        onClick={() => {
          settool("circle");
          toolState.setTool(new Circle(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn rings"
        onClick={() => {
          settool("rings");
          toolState.setTool(new Rings(canvasState.canvas));
        }}
      >
        <div className=" rings1">
          <div className="rings2"></div>
        </div>
        {/* Rings */}
      </button>
      <button
        className="toolbar__btn eraser"
        onClick={() => {
          settool("eraser");
          toolState.setTool(new Eraser(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn line"
        onClick={() => {
          settool("line");
          toolState.setTool(new Line(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn fill"
        onClick={() => {
          settool("fill");
          toolState.setTool(new Brush(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn clear"
        onClick={() => {
          canvasState.context.clearRect(0, 0, canvasState.canvas.width, canvasState.canvas.height);
        }}
      ></button>

      <input
        onChange={(event) => {
          // console.log(event.target.value);
          toolState.setStrokeColor(event.target.value);
        }}
        type="color"
        className="toolbar__btn colors"
      ></input>
      <button className="toolbar__btn undo"></button>
      <button className="toolbar__btn redo"></button>
      <button className="toolbar__btn save"></button>
    </div>
  );
};

export default Toolbar;
