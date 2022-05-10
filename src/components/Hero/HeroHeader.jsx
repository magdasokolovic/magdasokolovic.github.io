import React, { useEffect } from 'react'
import gsap from 'gsap';

export default function HeroHeader() {

  useEffect(() => {
    gsap.fromTo('#hero-text', 
    {autoAlpha: 0}, 
    {autoAlpha: 1, duration: 0.5})
  }, [])
  
  return (
    <div className="hero-text-section">
      <h1 id="hero-text">Stories meet their widers adience</h1>
    </div>
  );
}
