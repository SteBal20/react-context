import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import sushiImage from "../../assets/sushi.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactSushi</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={sushiImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
