import tbcLogo from "../../assets/tbc.svg";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img alt="tbcxacademy" src={tbcLogo}></img>
      </div>
      <nav className={classes.navLinks}>
        <a href="/" className={classes.link}>
          მთავარი
        </a>
        <a href="/" className={classes.link}>
          TBC IT
        </a>
        <a href="/" className={classes.usaid}>
          TBC x USAID
        </a>
        <a href="/" className={classes.link}>
          რისკები
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
