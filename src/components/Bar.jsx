import React from "react";
import Toolbar from "./Toolbar";
import ToolSettings from "./ToolSettings";
import Settings from "./Settings";
import "../styles/Bar.scss";

const Bar = () => {
  return (
    <div className="bar">
      <div className="inner-bar">
        <ToolSettings></ToolSettings>
        <Toolbar></Toolbar>
        <Settings></Settings>
      </div>
    </div>
  );
};

export default Bar;
