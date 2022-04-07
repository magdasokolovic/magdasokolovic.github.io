import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";

export default function HeroPhoneBlock() {
  const phoneRef = useRef(null)

  useEffect(() =>{
    function intro(){
      const tl = gsap.timeline();
      tl.fromTo(phoneRef.current, { y: 200}, {y: -300, duration: 1 });
      return tl;
    }
    function stopTrigger(){
      const tl = gsap.timeline({
        delay: 1, 
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: '+=1300',
          pin: true,
          scrub: true
        }
      })
      tl.to(phoneRef.current, {scale: 1.2}, '+=0.2')
      tl.to('.hero-container', 
      {backgroundColor: 'black', duration: 0.25}, '-=0.5')
      return tl;

    }
    const master = gsap.timeline()
    master.add(intro())
    setTimeout(() => {

      master.add(stopTrigger())
    }, 1000)
  }, [])
  return (
    <div className="hero-phone-block" ref={phoneRef}>
      <div className="hero-phone-template" ></div>
    </div>
  );
}
