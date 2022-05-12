import React, { useEffect, useState } from "react";
import Hero from '../components/Hero/Hero'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import FeatureSlides from "../components/Hero/FeatureSlides";
// import useMousePosition from '../hooks/useMousePosition'
// import useMousePosition from '../hooks/useMousePosition'
import Banner from '../components/Banner/Banner'
import Loader from "../components/Loader/Loader";
import BigText from "../components/BigText/BigText";
import Cursor from '../components/Cursor/Cursor'


export default function Main() {
  const [cursorHovered, setCursorHovered] = useState(false)
  const [loader, setLoader] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    }, []);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
    }, []);

    return loader ? (
      <Loader />
    ) : (
      <div>
        <Cursor cursorHovered={cursorHovered}/>
        <Hero />
        <FeatureSlides />
        <div className="footer">Build your ideal story today</div>
        <Banner setCursorHovered={setCursorHovered}/>
        <BigText/>
      </div>
    );
}
