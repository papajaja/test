import React from "react";
import Toolbar from "./components/Toolbar";
import "./styles/App.scss";
import Settings from "./components/Settings";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <div>
      <Toolbar></Toolbar>
      <Settings></Settings>
      <Canvas></Canvas>
    </div>
  );
};

export default App;
