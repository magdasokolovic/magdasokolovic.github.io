import React, { useState } from "react";
import { featureSlides } from "../../../utils/sampleData";
import cn from 'classnames'

function RenderImages({activeFeatureIndex}) {
    return featureSlides.map(({imageUrl}, index) => {
        <img className={cn({'as-primary': activeFeatureIndex === index})} key={imageUrl} style={{backgroundImage: `url(${imageUrl})`}}  alt="" />
    })
}
export default function FeatureSlides() {
    const [activeFeatureIndex, setFeatureIndex] = useState(0)

  return (
    <div className="feature-slides-container">
      <div className="feature-slides-left"></div>

      <RenderImages activeFeatureIndex={activeFeatureIndex} />
      <div className="feature-slides-right"></div>
    </div>
  );
}
