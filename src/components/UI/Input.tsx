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

const Input: React.FC<{ label: string; input: InputConfig }> = (
  props
) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
