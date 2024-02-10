import React, { useState } from "react";
import "../styles/Settings.scss";
import toolState from "../store/toolState";

const ToolSettings = () => {
  const [value, setValue] = useState(1);
  toolState.setLineWidth(value);
  return (
    <div className="toolsettings">
      <button className="palette">
        <input
          onChange={(event) => toolState.setStrokeColor(event.target.value)}
          type="color"
          className="colors"
        ></input>
      </button>
      <div className="tool-scale">
        <input
          className="slider"
          type="range"
          min={1}
          max={40}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <div className="tool-scale-triangle"></div>
        <div className="tool-scale-rectangle">{value}</div>
      </div>
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

export default ToolSettings;
