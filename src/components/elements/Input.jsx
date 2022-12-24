import React from "react";
import classes from "./Elements.module.css";

const Input = ({ className, children, onChange, name, type, id }) => {
  return (
    <input
      className={`${classes.input} ${className}`}
      onChange={onChange}
      name={name}
      type={type}
      id={id}
    >
      {children}
    </input>
  );
};

export default Input;
