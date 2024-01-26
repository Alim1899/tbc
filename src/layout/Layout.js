import classes from "./Layout.module.css";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Courses from "../components/courses/Courses";
import Slider from "../components/slider/Slider";
import FAQ from "../components/faq/FAQ";
import Footer from '../components/footer/Footer'
const Layout = () => {
  return (
    <div className={classes.layout}>
   <Navbar/>
   <Header/>
   <About/>
   <Courses/>
      <Slider/>
      <FAQ/>
      <Footer/>

    </div>
  );
};

export default Layout;
