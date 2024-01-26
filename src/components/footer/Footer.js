import classes from "./Footer.module.css";
import tbc from "../../assets/tbcFooter.svg";
import youtube from '../../assets/icons/youtube.svg';
import facebook from '../../assets/icons/facebook.svg';
const Footer = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.about}>
          <img alt="tbc" src={tbc}></img>
          <h2>© 2023 ყველა უფლება დაცულია</h2>
          <h2>წესები და პირობები</h2>
        </div>
        <div className={classes.contact}>
        <div className={classes.social}>
           <img alt='facebook' src={facebook}></img>
        <img alt="youtube" src={youtube}></img>
        </div>
       
        <button className={classes.text}>მოგვწერეთ</button>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
