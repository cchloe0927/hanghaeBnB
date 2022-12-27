import React from "react";
import classes from "./Elements.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default Card;
