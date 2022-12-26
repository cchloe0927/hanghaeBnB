import React from "react";
import classes from "./Elements.module.css";

const Button = ({ className, onClick, children, type }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
