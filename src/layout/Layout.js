import classes from "./Layout.module.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Courses from "../components/courses/Courses";
const Layout = () => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <Header />
      <About />
      <Courses />
    </div>
  );
};

export default Layout;
