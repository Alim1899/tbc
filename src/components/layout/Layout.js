import classes from "./Layout.module.css";
import ufcLogoSvg from "../../assets/sliderImages/ufc.svg";
import tegetaLogo from "../../assets/sliderImages/tegeta.svg";
import spaceLogo from "../../assets/sliderImages/space.svg";
import tnetLogo from "../../assets/sliderImages/tnet.svg";
import spectreLogo from "../../assets/sliderImages/spectre.svg";
import usaidLogo from "../../assets/sliderImages/usaid.svg";
import tbcLeasingLogo from "../../assets/sliderImages/tbcleasing.svg";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <img src={ufcLogoSvg} alt="ufclogo"></img>
      <img src={tegetaLogo} alt="ufclogo"></img>
      <img src={spaceLogo} alt="ufclogo"></img>
      <img src={tnetLogo} alt="tnet"></img>
      <img src={spectreLogo} alt="tnet"></img>
      <img src={usaidLogo} alt="tnet"></img>
      <img src={tbcLeasingLogo} alt="tnet"></img>
    </div>
  );
};

export default Layout;
