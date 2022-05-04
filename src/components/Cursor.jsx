import React, { useRef, useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { gsap } from "gsap";
import "./Hero/style.scss";

const Cursor = ({ cursorProps = { videoID: null, scale: 1 } }) => {
  const mousePosition = useMousePosition();
  const websitesCursor = useRef(null);
  const appsCursor = useRef(null);
  const brandingCursor = useRef(null);
  const cursor = useRef(null);
  // GSAP ANIMATIONS
  gsap.fromTo(".cursor",
    {scale: 1, x: -2, y: -2},
    {
      duration: 0.6,
      ease: "Power3.easeOut",
      scale: cursorProps && cursorProps.scale,
    }
  );
  gsap.fromTo(
    "#websites",
    { opacity: 0, x: -100 },
    { opacity: cursorProps.videoID === "websites" ? 1 : 0, x: 0 }
  );
  gsap.fromTo(
    "#apps",
    { opacity: 0, x: -100 },
    { opacity: cursorProps.videoID === "apps" ? 1 : 0, x: 0 }
  );
  gsap.fromTo(
    "#branding",
    { opacity: 0, x: -100 },
    { opacity: cursorProps.videoID === "branding" ? 1 : 0, x: 0 }
  );

  // useEffect(() => {
  //   mousePosition.x = mousePosition.x - 8;
  //   mousePosition.y = mousePosition.y - 8;
  // }, [mousePosition])

  return (
    <div
      className="cursor"
      ref={cursor}
      style={{
        left: `${mousePosition.x - 8}px`,
        top: `${mousePosition.y - 8}px`,
      }}
    >
      <div className="video-wrapper">
        <video
          src="../../assets/videos/websites.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
          ref={websitesCursor}
        ></video>
        <video
          src="../../assets/videos/apps.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
          ref={appsCursor}
        ></video>
        <video
          src="../../assets/videos/branding.mp4"
          preload="auto"
          autoPlay
          muted
          loop
          id="branding"
          ref={brandingCursor}
        ></video>
      </div>
    </div>
  );
};

export default Cursor;
