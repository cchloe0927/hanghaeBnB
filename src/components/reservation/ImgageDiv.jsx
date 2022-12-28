import React, { useState } from "react";

import classes from "./ImgageDiv.module.css";

const ImgageDiv = ({ imageArr }) => {
  return (
    <div style={{ margin: "25px 0" }}>
      <div className={classes.imageGroup}>
        <img src={imageArr[0]} className={classes.image1} />
        <img src={imageArr[1]} className={classes.image2} />
      </div>
    </div>
  );
};

export default ImgageDiv;
