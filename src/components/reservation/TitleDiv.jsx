import React, { useState } from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import classes from "./TitleDiv.module.css";

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
          <button className={classes.button}>
            <FiShare /> 공유하기
          </button>
          <button className={classes.button}>
            <AiOutlineHeart />
            좋아요
          </button>
          <button className={classes.button}>
            <AiOutlineDelete />
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleDiv;
