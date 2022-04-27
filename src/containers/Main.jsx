import React, { useEffect, useState, useContext } from "react";
import Hero from '../components/Hero/Hero'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import FeatureSlides from "../components/Hero/FeatureSlides";
import { MouseContext } from "../context/mouseContext";
import CustomCursor from "../components/Hero/CustomCursor";

export default function Main() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() =>{
            setLoader(false)
        }, 500)
    }, [])

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
    }, [])

    // const {cursorStyles} = useGlobalStateContext()
    // const dispatch = useGlobalDispatchContext()

    // const onCursor = cursorType => {
    //   cursorType = ((cursorStyles.includes(cursorType) && cursorType) || false)
    //   dispatch({type: "CURSOR_TYPE", cursorType: cursorType})
    // }

  return (
    // loader ? (
    //   <div className="loader" />
    // ) :

    <div>
      <CustomCursor />
      <Hero />
      <FeatureSlides
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      />
      <div className="footer">Build your ideal story today</div>
    </div>
  );
}
