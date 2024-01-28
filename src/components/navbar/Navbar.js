import tbcLogo from "../../assets/tbc.svg";
import classes from "./Navbar.module.css";
import {  useState } from "react";
import menuIcon from "../../assets/icons/manu.svg";
import closeIcon from "../../assets/icons/close.svg";
const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [dropMenu, setDropMenu] = useState(false);
  const [navbarColor, setNavbarColor] = useState("#1a1e1f");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) setNavbarColor("#222222f2");
    else setNavbarColor("#1a1e1f");
  });

  window.addEventListener("resize",()=>{
    setWidth(window.innerWidth)
  });

  const showDropdownMenu = () => {
    setDropMenu(true);
  };
  const close = () => {
    setDropMenu(false);
  };

  return (
    <div style={{ backgroundColor: navbarColor }} className={classes.main}>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img alt="tbcxacademy" src={tbcLogo}></img>
        </div>

        {width > 725 && (
          <nav className={classes.navLinks}>
            <li>
              {" "}
              <a href="/" className={classes.link}>
                მთავარი
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                TBC IT
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className={classes.usaid}>
                TBC<span className={classes.span}>x</span>USAID
              </a>
            </li>
            <li>
              <a href="/" className={classes.link}>
                რისკები
              </a>
            </li>
          </nav>
        )}
        {width < 725 &&
          (!dropMenu ? (
            <button type="button" className={classes.dropButton}>
              <img
                alt="icon"
                onClick={showDropdownMenu}
                className={classes.icon}
                src={menuIcon}
              ></img>{" "}
            </button>
          ) : (
            <button onClick={close} className={classes.closeButton}>
              <img
                className={classes.icon}
                alt="close icon"
                src={closeIcon}
              ></img>{" "}
            </button>
          ))}
      </div>

      {dropMenu && (
        <div className={classes.dropdownMenu}>
          <div className={classes.blurredArea} onClick={close}></div>

          <div className={classes.dropContent}>
            <nav className={classes.dropNavLinks}>
              <li>
                {" "}
                <a href="/" className={classes.dropLink}>
                  მთავარი
                </a>
              </li>
              <li>
                <a href="/" className={classes.dropLink}>
                  TBC IT
                </a>
              </li>
              <li>
                {" "}
                <a href="/" className={classes.dropUsaid}>
                  TBC<span className={classes.dropSpan}>x</span>USAID
                </a>
              </li>
              <li>
                <a href="/" className={classes.dropLink}>
                  რისკები
                </a>
              </li>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
