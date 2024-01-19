import classes from "./Layout.module.css";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
