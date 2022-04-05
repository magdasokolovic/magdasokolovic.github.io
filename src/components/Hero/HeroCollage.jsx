import React, { useEffect } from 'react'
import {photos} from "../../utils/sampleData"
import {mainPhotos} from "../../utils/sampleData"
import {gsap} from 'gsap';

 function ImageElement({src}) {
   return <div className="hero-element">
     <img className="collage-element" src={src} alt="hero"/>
   </div>
 }

export default function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length)

  const [leftMainPhoto, rightMainPhoto] = mainPhotos

  useEffect(()=>{
    const tl = gsap.timeline({
      delay: 0.5,

    })

    tl.fromTo('.hero-element', 
    {y: 300},
    {y: 0, duration: 1, delay: function(index){
      return 0.2*index;
    }}
    )
  }, [])

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src, i) => (
          <ImageElement key={i} src={src} />
        ))}
        <ImageElement src={leftMainPhoto} />
      </div>
      <div className="right-column">
        {rightImages.map((src, i) => (
          <ImageElement key={i} src={src} />
        ))}
        <ImageElement src={rightMainPhoto} />
      </div>
    </div>
  );
}
