import classes from "./Courses.module.css";
import ios from "../../assets/courseImages/ios.webp";
import react from "../../assets/courseImages/react.webp";
import pythonIntro from "../../assets/courseImages/python-intro.webp";
import pythonAdvance from "../../assets/courseImages/python-advanced.webp";
import cyberSec from "../../assets/courseImages/cyperSecurity.webp";
import tot from "../../assets/courseImages/tot.webp";
import blockchain from "../../assets/courseImages/blockchain.webp";
import devOps from "../../assets/courseImages/devOps.webp";
import ist from "../../assets/courseImages/infoSecurity.webp";
import CourseComponent from "./CourseComponent";
const Courses = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <div className={classes.header}>
          <header className={classes.head}>სასწავლო კურსები</header>
        </div>
        <div className={classes.components}>
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            header="iOS Development"
            src={ios}
            buttonClass={classes.button}
            span={classes.span}
          />{" "}
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={react}
            header="React"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={pythonIntro}
            header="Intro to Python"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={pythonAdvance}
            header="Advanced python"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={cyberSec}
            header="Advanced Cybersecurity Course"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={tot}
            header="ToT - Training of Trainers"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={blockchain}
            header="Blockchain"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={devOps}
            header="DevOps"
            span={classes.span}
            buttonClass={classes.button}
          />
          <CourseComponent
            componentClass={classes.component}
            detailClass={classes.details}
            src={ist}
            header="Information Security Governance"
            span={classes.span}
            buttonClass={classes.button}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
