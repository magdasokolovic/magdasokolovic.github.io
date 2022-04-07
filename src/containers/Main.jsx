import React, { useEffect, useState } from "react";
import Hero from '../components/Hero/Hero'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import FeatureSlides from "../components/Hero/FeatureSlides";
// import '../styles/home.scss';

export default function Main() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoader(false)
        }, 500)
    }, [])

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger)
    }, [])

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
        <Hero/>
        <FeatureSlides/>
    </div>
  )

}
