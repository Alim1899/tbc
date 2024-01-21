import tbcLogo from "../../assets/tbc.svg";
import classes from "./Navbar.module.css";
import { Fragment, useState } from "react";
import menuIcon from "../../assets/icons/manu.svg";
import closeIcon from "../../assets/icons/close.svg";
const Navbar = () => {
  const [navbar, showNavbar] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  // For responsive navbar/dropdown menu
  const showMenu = () => {
    if (window.innerWidth >725) {
      showNavbar(true);

      setDropdown(false);
      setDropMenu(false);
    } else {
      showNavbar(false);
      setDropdown(true);
    }
  };
  const showDropdownMenu = () => {
    setDropMenu(true);
  };
  const close = () => {
    setDropMenu(false);
  };
  window.addEventListener("load", showMenu);
  window.addEventListener("change", showMenu);
  window.addEventListener("resize", showMenu);

  return (
    <Fragment>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <img alt="tbcxacademy" src={tbcLogo}></img>
        </div>

        {navbar && (
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
        {dropdown && (
          <button type="button" className={classes.dropButton}>
            <img
              alt="icon"
              onClick={showDropdownMenu}
              className={classes.icon}
              src={menuIcon}
            ></img>{" "}
          </button>
        )}
      </div>

      {dropMenu && (
        <div className={classes.dropdownMenu}>
          <div className={classes.blurredArea} onClick={close}></div>

          <div className={classes.dropContent}>
            <button onClick={close} className={classes.closeButton}>
              <img
                className={classes.icon}
                alt="close icon"
                src={closeIcon}
              ></img>{" "}
            </button>
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
    </Fragment>
  );
};

export default Navbar;
