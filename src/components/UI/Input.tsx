import React from "react";

import classes from "./Input.module.css";

type InputConfig = {
  id: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
};

const Input = React.forwardRef<
  HTMLInputElement,
  { input: InputConfig; label: string }
>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
