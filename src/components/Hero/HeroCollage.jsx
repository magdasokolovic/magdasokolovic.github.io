import React from 'react'
import {photos} from "../../utils/sampleData"
import {mainPhotos} from "../../utils/sampleData"

 function ImageElement({src}) {
   return <div className="hero-element">
     <img className="collage-element" src={src} alt="hero"/>
   </div>
 }

export default function HeroCollage() {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length)

  const [leftMainPhoto, rightMainPhoto] = mainPhotos

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
