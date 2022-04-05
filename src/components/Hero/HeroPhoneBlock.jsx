import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";
export default function HeroPhoneBlock() {
  const phoneRef = useRef(null)

  useEffect(() =>{
    function intro(){
      const tl = gsap
    }
    function stopTrigger(){

    }
    const master = gsap.timeline()
    master.add(intro())
    master.add(stopTrigger())
  }, [])
  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div className="hero-phone-template" ></div>
    </div>
  );
}
