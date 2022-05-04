import React, { useEffect, useState } from "react";
import Hero from '../components/Hero/Hero'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import FeatureSlides from "../components/Hero/FeatureSlides";
// import { MouseContext } from "../context/mouseContext";
// import CustomCursor from "../components/Hero/CustomCursor";
import useMousePosition from '../hooks/useMousePosition'
import getCursorProps from '../components/getCursorProps'
import Banner from '../components/Banner'
import Cursor from '../components/Cursor'
import MainText from '../components/MainText'


export default function Main() {
  // const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [bannerElements, setBannerElements] = useState({})
  const mousePosition = useMousePosition()

  const [cursorProps, setCursorProps] = useState({
    videoID: null, scale: 1
  })
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setTimeout(() =>{
            setLoader(false)
        }, 500)
    }, [])

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
    }, [])

    useEffect(() => {
      setCursorProps(getCursorProps(bannerElements, mousePosition))
    }, [bannerElements, mousePosition])

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
      {/* <CustomCursor /> */}
      <Hero />
      <FeatureSlides
        // onMouseEnter={() => cursorChangeHandler("hovered")}
        // onMouseLeave={() => cursorChangeHandler("")}
      />
      <div className="footer">Build your ideal story today</div>
      <Banner setBannerElements={setBannerElements}/>
      <Cursor cursorProps={cursorProps}/>
      <MainText/>
    </div>
  );
}
