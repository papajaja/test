import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import "../styles/Canvas.scss";
import Bar from "./Bar";

const Canvas = observer(() => {
  const canvasRef = useRef();
  const canvasClassRef = useRef();
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current, canvasClassRef.current);
  }, []);
  return (
    <div className="canvas" ref={canvasClassRef}>
      <Bar></Bar>
      <canvas
        onMouseDown={() => canvasState.pushToUndo(canvasRef.current.toDataURL())}
        ref={canvasRef}
        width="800px"
        height="600px"
      ></canvas>
    </div>
  );
});

export default Canvas;
