import React, { useRef, useEffect } from 'react'
import './Hero/style.scss'

const Banner = ({setBannerElements}) => {
    const websites = useRef(null);
    const apps = useRef(null)
    const branding = useRef(null)

    useEffect(() => {
        let elements = {
            websites: websites,
            apps: apps,
            branding: branding
        };
        setBannerElements(elements)
    }, [setBannerElements])
  return (
    <div className="banner-container">
         <div className="banner-inner">
             <div className="banner-title">
                 <h2>We make it happen</h2>
             </div>
             <div className="banner-items-container">
                 <div className="banner-item">
                     <h1 ref={websites}>Websites</h1>
                 </div>
                 <div className="banner-item">
                     <h1 ref={apps}>Apps</h1>
                 </div> 
                 <div className="banner-item">
                     <h1 ref={branding}>Branding</h1>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Banner