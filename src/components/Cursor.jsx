import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/home.scss";
import useMousePosition from '../hooks/useMousePosition'

const Cursor = ({cursorHovered}) => {

  const {x, y} = useMousePosition()

  return (
    <div className="cursor-follower" style={{left: `${x}px`, top: `${y}px`, transform: cursorHovered ? "scale(2)" : "scale(0)"}}></div>
  );
};

export default Cursor;
