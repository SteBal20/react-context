import { useEffect, useState } from "react";
import classes from "./AvailableSushi.module.css";

import Card from "../UI/Card";
import { SushiItemType } from "../../models/sushiItem.type";
import SushiItem from "./SushiItem/SushiItem";

const AvailableSushi = () => {
  const [sushi, setSushi] = useState<SushiItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<Error>();

  useEffect(() => {
    setIsLoading(true);
    const fetchSushi = async () => {
      const res = await fetch(
        "https://reactest-1a5ec-default-rtdb.europe-west1.firebasedatabase.app/sushi.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();

      const loadedSushi: SushiItemType[] = [];

      for (const key in data) {
        loadedSushi.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setSushi(loadedSushi);
      setIsLoading(false);
    };

    fetchSushi().catch((err) => {
      setIsLoading(false);
      setHttpError(err as Error);
    });
  }, []);

  const sushiList = sushi.map((sushi) => (
    <SushiItem key={sushi.id} item={sushi}></SushiItem>
  ));

  return (
    <section className={classes.sushi}>
      <Card>
        {!isLoading && <ul>{sushiList}</ul>}
        {isLoading && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )}
        {httpError && (
          <p style={{ textAlign: "center", color: "red" }}>
            {httpError.message}
          </p>
        )}
      </Card>
    </section>
  );
};

export default AvailableSushi;
