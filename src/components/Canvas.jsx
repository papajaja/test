import React, { useEffect, useRef } from "react";
import "../styles/Canvas.scss";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import Brush from "../tools/Brush";
import toolState from "../store/toolState";

const Canvas = observer(() => {
  const canvasRef = useRef();
  const canvasClassRef = useRef();
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current, canvasClassRef.current);
    // toolState.setTool(new Brush(canvasRef.current));
  }, []);
  return (
    <div className="canvas" ref={canvasClassRef}>
      <canvas ref={canvasRef} width="600px" height="400px"></canvas>
    </div>
  );
});

export default Canvas;
