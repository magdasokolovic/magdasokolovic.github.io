import React, { useRef, useEffect } from "react";
import "./Cursor.scss";
import useMousePosition from '../../hooks/useMousePosition'

const Cursor = ({cursorHovered}) => {

  const {x, y} = useMousePosition()

  return (
    <div className="cursor-follower" style={{left: `${x}px`, top: `${y}px`, transform: cursorHovered ? "scale(2)" : "scale(1)"}}></div>
  );
};

export default Cursor;
