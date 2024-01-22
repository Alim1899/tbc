import classes from "./Header.module.css";
import background from "../../assets/background/back.webp";
const Header = () => {
  return (
    <div className={classes.main}>
      <img alt="back" className={classes.background} src={background}></img>
      <div className={classes.headers}>
        <div className={classes.head}>
        <h1 className={classes.headOne}>
          TBC<span className={classes.span}>x</span>USAID
        </h1>
        <h1 className={classes.headTwo}>ტექნოლოგიური განათლებისთვის</h1>
      </div>
      </div>
      
    </div>
  );
};

export default Header;
