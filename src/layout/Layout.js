import classes from "./Layout.module.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.navbar}>
        <Navbar />
      </div>
      <div className={classes.header}>
        <Header/>
      </div>
    </div>
  );
};

export default Layout;
