import gsap from "gsap/all";
import React, { useRef, useEffect, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import "./Banner.scss";

const Banner = ({setCursorHovered}) => {
  const websites = useRef(null);
  const apps = useRef(null);
  const branding = useRef(null);
  const bannerRef = useRef(null);
  const onScreen = useOnScreen(bannerRef);
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
    
  }, [onScreen]);

  useEffect(() =>{
    if (reveal) {
      const tl = gsap.timeline({delay: .2})
      tl.from(".banner-item", {
        duration: 1.5,
        y: '-50px',
        opacity: 0,
        ease: "power4.out",
        delay: 1,
        stagger: 0.2,
        skewY: 5
      })
      .from(".main-body-inner", {
        duration: .8, 
        ease: "power3.easeOut",
        y: "100px",
        opacity: 0,
        skewX: 5
      }, "1.5")
    }
  }, [reveal])

  return (
    <>
      <div className="banner-container" ref={bannerRef}>
        <div className="banner-inner">
          <div className="banner-title">
            <h2>We make it happen</h2>
          </div>
          <div className="banner-items-container">
            <div className="banner-item">
              <h1 onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)} ref={websites}>Websites</h1>
            </div>
            <div className="banner-item">
              <h1 onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)} ref={apps}>Apps</h1>
            </div>
            <div className="banner-item">
              <h1 onMouseEnter={()=>setCursorHovered(true)} onMouseLeave={()=>setCursorHovered(false)} ref={branding}>Branding</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="main-body-inner">
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
