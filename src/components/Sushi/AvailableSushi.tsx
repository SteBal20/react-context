import classes from "./AvailableSushi.module.css";

import Card from "../UI/Card";
import { SushiItemType } from "../../models/sushiItem.type";
import SushiItem from "./SushiItem/SushiItem";

const DUMMY_SUSHI: SushiItemType[] = [
  {
    id: "m1",
    name: "Sushi Mix",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Tuna Nigiri",
    description: "A healthy taste",
    price: 3.5,
  },
  {
    id: "m3",
    name: "Chirashi",
    description: "Our salmon special dish",
    price: 12.99,
  },
  {
    id: "m4",
    name: "California Uramaki",
    description: "The classic roll",
    price: 9.99,
  },
];

const AvailableSushi = () => {
  const sushiList = DUMMY_SUSHI.map((sushi) => (
    <SushiItem key={sushi.id} item={sushi}></SushiItem>
  ));

  return (
    <section className={classes.sushi}>
      <Card>
        <ul>{sushiList}</ul>
      </Card>
    </section>
  );
};

export default AvailableSushi;
