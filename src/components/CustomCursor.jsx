import React, { useState, useEffect, useContext } from "react";
import {MouseContext} from "../context/mouseContext"
import './Hero/style.scss'

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400
    })

    const {cursorType, cursorChangeHandler} = useContext(MouseContext)

    const onMouseMove = event => {
        const {pageX: x, pageY: y} = event
        setMousePosition({x, y})
    }

    useEffect(()=> {
        document.addEventListener("mousemove", onMouseMove)
        return ()=>{
            document.removeEventListener("mousemove", onMouseMove)
        }
    }, [])
  return (
    <>
      <div
        className={'custom-cursor-dot' + cursorType}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
      <div
        className={'custom-cursor-ring' + cursorType}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></div>
    </>
  );
}

export default CustomCursor