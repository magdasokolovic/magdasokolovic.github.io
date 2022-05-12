import React, { useEffect } from "react";
import "./BigText.scss";
import gsap from "gsap";
// import Scrollbar from 'smooth-scrollbar';


const BigText = () => {
  // const bodyScrollBar = Scrollbar.init(, {
  //   damping: 0.1,
  //   delegateTo: document,
  //   alwaysShowTracks: true,
  //   speed: 0.2,
  // });

  useEffect(() => {
    gsap.to(".text p", {
      backgroundPositionX: "0%",
      stagger: 2,
      // ease: "power2",
      // duration: 2,
      scrollTrigger: {
        trigger: ".text p",
        scrub: 1,
        start: "top center",
        end: "bottom top",
      },
    });
  }, []);
  return (
    <div className="bigText-container">
      <div className="img">
        <h1>Text Reveal Animation</h1>
      </div>
      <div className="container">
        <div className="text">
          <p>Discover our climate</p>
          <p>neutral product</p>
          <p>for hiking</p>
        </div>
      </div>
    </div>
  );
};

export default BigText;
