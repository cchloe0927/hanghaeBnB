import React, { useState } from "react";

import classes from "./TitleDiv.module.css";
import Button from "../elements/Button";

const TitleDiv = () => {
  return (
    <div>
      <div className={classes.titleDiv}>
        <h1>(13 Fl.) Fantastic Panoramic Ocean View</h1>
        <div className={classes.summaryGroup}>
          <span>★ 4.87</span>
          <span>.</span>
          <span>호스트</span>
          <span>.</span>
          <span>위치</span>
        </div>
        <div className={classes.buttonGroup}>
          <Button>공유하기</Button>
          <Button>♥︎</Button>
          <Button>삭제</Button>
        </div>
      </div>
    </div>
  );
};

export default TitleDiv;
