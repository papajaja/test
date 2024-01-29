import React, { useState } from "react";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Eraser from "../tools/Eraser";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import Rings from "../tools/Rings";
import "../styles/Toolbar.scss";
import Cross from "../tools/Cross";
import Pencil from "../tools/Pencil";
import Tree from "../tools/Tree";

const Toolbar = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const settool = (tool) => {
    if (selectedTool) selectedTool.classList.remove("pseudo");
    const toset = document.querySelector("." + tool);
    setSelectedTool(toset);
    toset.classList.add("pseudo");
  };
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
        className="toolbar__btn pencil"
        onClick={() => {
          settool("pencil");
          toolState.setTool(new Pencil(canvasState.canvas));
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
        className="toolbar__btn tree"
        onClick={() => {
          settool("tree");
          toolState.setTool(new Tree(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn rings"
        onClick={() => {
          settool("rings");
          toolState.setTool(new Rings(canvasState.canvas));
        }}
      ></button>
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
          canvasState.pushToUndo(canvasState.canvas.toDataURL());
          canvasState.context.clearRect(0, 0, canvasState.canvas.width, canvasState.canvas.height);
        }}
      ></button>
      <button
        className="toolbar__btn cross"
        onClick={() => {
          settool("cross");
          toolState.setTool(new Cross(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn cross"
        onClick={() => {
          settool("cross");
          toolState.setTool(new Cross(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn cross"
        onClick={() => {
          settool("cross");
          toolState.setTool(new Cross(canvasState.canvas));
        }}
      ></button>
      <button
        className="toolbar__btn cross"
        onClick={() => {
          settool("cross");
          toolState.setTool(new Cross(canvasState.canvas));
        }}
      ></button>
    </div>
  );
};

export default Toolbar;
