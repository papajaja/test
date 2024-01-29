import React from "react";
import "../styles/Settings.scss";
import canvasState from "../store/canvasState";

const Settings = () => {
  return (
    <div className="settings">
      <button
        className="toolbar__btn undo"
        onClick={() => {
          canvasState.undo();
        }}
      ></button>
      <button
        className="toolbar__btn redo"
        onClick={() => {
          canvasState.redo();
        }}
      ></button>
      <button
        className="toolbar__btn save"
        onClick={() => {
          const image = new Image();
          image.src = canvasState.canvas.toDataURL("image/png", 10);
          // const imageData = canvasState.canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.href = image.src;
          downloadLink.download = "myDrawing.png";
          downloadLink.click();
        }}
      ></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
      <button className="cross"></button>
    </div>
  );
};

export default Settings;
