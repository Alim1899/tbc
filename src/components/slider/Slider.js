import ufcLogoSvg from "../../assets/sliderImages/ufc.svg";
import tegetaLogo from "../../assets/sliderImages/tegeta.svg";
import spaceLogo from "../../assets/sliderImages/space.svg";
import tnetLogo from "../../assets/sliderImages/tnet.svg";
import spectreLogo from "../../assets/sliderImages/spectre.svg";
import usaidLogo from "../../assets/sliderImages/usaid.svg";
import tbcLeasingLogo from "../../assets/sliderImages/tbcleasing.svg";
import leftSlide from "../../assets/icons/leftslide.svg";
import rightSlide from "../../assets/icons/rightslide.svg";

import classes from "./Slider.module.css";
import { useState, useEffect, useCallback, useRef } from "react";
const Slider = () => {
  const [showFirstSlide, setShowFirstSlide] = useState(true);
  const [showSecondSlide, setShowSecondSlide] = useState(false);
  const [showThirdSlide, setShowThirdSlide] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  const slider = useCallback(() => {
    if (activeSlide === 1) {
      setShowFirstSlide(true);
      setShowSecondSlide(false);
      setShowThirdSlide(false);
    } else if (activeSlide === 2) {
      setShowFirstSlide(false);
      setShowSecondSlide(true);
      setShowThirdSlide(false);
    } else if (activeSlide === 3) {
      setShowFirstSlide(false);
      setShowSecondSlide(false);
      setShowThirdSlide(true);
    } else {
      if (activeSlide >= 4) {
        setActiveSlide(1);
      } else if (activeSlide <= 0) {
        setActiveSlide(3);
      }
    }
  }, [activeSlide]);

  useEffect(() => {
    slider();
  }, [slider]);
  setTimeout(() => {
    setActiveSlide(activeSlide+1)
  }, 3500);
  

  const changeByButtons = (e) => {
    if (e.target.id === "left") {
      setActiveSlide(activeSlide - 1);
    } else if (e.target.id === "right") {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className={classes.main}>
      <img
        alt="leftArrow"
        id="left"
        onClick={changeByButtons}
        className={classes.leftArrow}
        src={leftSlide}
      ></img>
      <div className={classes.content}>
        <h1 className={classes.head}>პროექტის პარტნიორები</h1>
        {showFirstSlide && (
          <div className={classes.firstSlide}>
            <div>
              <img src={usaidLogo} alt="tnet"></img>
            </div>
            <div>
              {" "}
              <img src={spaceLogo} alt="ufclogo"></img>
            </div>
            <div>
              <img src={tnetLogo} alt="tnet"></img>
            </div>
          </div>
        )}
        {showSecondSlide && (
          <div className={classes.secondSlide}>
            <div>
              <img src={tegetaLogo} alt="ufclogo"></img>
            </div>
            <div>
              {" "}
              <img src={spectreLogo} alt="tnet"></img>
            </div>
            <div>
              <img src={tbcLeasingLogo} alt="tnet"></img>
            </div>
          </div>
        )}
        {showThirdSlide && (
          <div className={classes.thirdSlide}>
            <div></div>
            <div>
              <img src={ufcLogoSvg} alt="ufclogo"></img>
            </div>
            <div></div>
          </div>
        )}
        <ul className={classes.dots}>
          <li onClick={() => setActiveSlide(1)} id="1"></li>
          <li onClick={() => setActiveSlide(2)} id="2"></li>
          <li onClick={() => setActiveSlide(3)} id="3"></li>
        </ul>
      </div>
      <img
        onClick={changeByButtons}
        id="right"
        alt="rightArrow"
        className={classes.rightArrow}
        src={rightSlide}
      ></img>
    </div>
  );
};

export default Slider;
