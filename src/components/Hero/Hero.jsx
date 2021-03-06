import React from "react";
import HeroCollage from "./HeroCollage";
import HeroHeader from "./HeroHeader";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";
import HeroFooter from "./HeroFooter";
import "./style.scss";

export default function Hero() {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
        <HeroPhoneBlock />
      </div>

      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}
