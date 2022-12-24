import classes from "./SushiSummary.module.css";

const SushiSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Sushi, Delivered To You</h2>
      <p>
        Choose your favorite dishes from our broad selection of
        available sushi and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our dishes are prepared with high-quality ingredients,
        just-in-time and of course by experienced staff!
      </p>
    </section>
  );
};

export default SushiSummary;
