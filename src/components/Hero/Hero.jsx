import React from 'react'
import HeroCollage from './HeroCollage';
import HeroHeader from './HeroHeader';
import HeroPhoneBlock from './HeroPhoneBlock';
import HeroUsedBy from './HeroUsedBy';
import HeroFooter from './HeroFooter';
import './style.scss';


export default function Hero({onCursor}) {
  return (
    <>
      <div className="hero-container">
        <HeroHeader />
        <div className="hero-media">
          <HeroCollage 
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          />
          <HeroPhoneBlock />
        </div>

        <HeroUsedBy />
        <HeroFooter />
      </div>
    </>
  );
}
