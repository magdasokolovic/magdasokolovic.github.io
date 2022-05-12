import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import useOnScreen from "../../hooks/useOnScreen"

export default function HeroFooter() {
  const ref = useRef(null)
  const heroText = useRef(null)
  const onScreen = useOnScreen(ref)
  const [reveal, setReveal] = useState(null)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  //add animation to text
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        scrub: true,
      }
    })
    tl.to('.hero-container', {backgroundColor: 'white', duration: 0.25}, '-=2')

    gsap.to(heroText.current, { y: "100px", duration: 1, ease: "power2", scrollTrigger: {
      trigger: ref.current,
      markers: true,
      start: "top 50%",
      scrub: true,
      pin: true
    }})
  }, [])

  // useEffect(() => {
  //   if (reveal) {
  //     gsap.to(heroText.current, {y: "-100px", scale: 1.2, duration: 2, ease: "power2"})
  //   }
  // }, [reveal])
  return (
    <div ref={ref} className="hero-text-section">
      <h1 ref={heroText} id='hero-text' className="hero-text-colored">Stories meet their widest audience ever</h1>
    </div>
  )
}
