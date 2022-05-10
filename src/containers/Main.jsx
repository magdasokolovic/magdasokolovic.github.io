import React, { useEffect, useState } from "react";
import Hero from '../components/Hero/Hero'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import FeatureSlides from "../components/Hero/FeatureSlides";
import useMousePosition from '../hooks/useMousePosition'
import Banner from '../components/Banner'
import Loader from "../components/Loader";


export default function Main() {
  const [bannerElements, setBannerElements] = useState({})
  const [loader, setLoader] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoader(false);
      }, 4000);
    }, []);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
    }, []);

    return loader ? (
      <Loader />
    ) : (
      <div>
        <Hero />
        <FeatureSlides />
        <div className="footer">Build your ideal story today</div>
        <Banner setBannerElements={setBannerElements} />
      </div>
    );
}
