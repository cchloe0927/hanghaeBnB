import React, { useState } from "react";

import classes from "./ImgageDiv.module.css";

const ImgageDiv = () => {
  return (
    <div style={{ margin: "25px 0" }}>
      <div className={classes.imageGroup}>
        <div className={classes.image1}></div>
        <div className={classes.image2}>
          <div className={classes.image2_1}>
            <div className={classes.image2_1_1}></div>
            <div className={classes.image2_1_1}></div>
          </div>
          <div className={classes.image2_2}>
            <div className={classes.image2_2_1}></div>
            <div className={classes.image2_2_2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgageDiv;
