import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <p className={classes.aboutText}>
          „ <span className={classes.span}>TBC x USAID</span> - ტექნოლოგიური
          განათლებისთვის “ პროგრამა საინფორმაციო ტექნოლოგიებით დაინტერესებულ
          ადამიანებს გთავაზობთ სრულად დაფინანსებულ ონლაინ საგანმანათლებლო
          პრაქტიკულ კურსებს სხვადასხვა <span className={classes.span}>ICT</span>
          მიმართულებით. წარმატებულ კურსდამთავრებულებს ეძლევათ შესაძლებლობა
          დასაქმდნენ თიბისისა და მის პარტნიორ კომპანიებში.
        </p>
        <button type="button" className={classes.more}>
          გაიგე მეტი
        </button>
      </div>
    </div>
  );
};

export default About;
