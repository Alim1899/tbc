import arrow from "../../assets/icons/right.svg";

const CourseComponent = (props) => {
  return (
    <div className={props.componentClass}>
      <div className={props.detailClass}>
        <img alt="ios" src={props.src}></img>
        <h2>{props.header}</h2>
        <h3>რეგისტრაცია დასრულებულია</h3>
      </div>
      <div className={props.buttonClass}>
        <button>
          {" "}
          <img src={arrow} alt="arrowRight"></img>
          <span className={props.span}>კურსის დეტალები</span>
        </button>
      </div>
    </div>
  );
};

export default CourseComponent;
