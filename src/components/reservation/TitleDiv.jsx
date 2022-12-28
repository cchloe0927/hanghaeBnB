import React, { useState } from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import classes from "./TitleDiv.module.css";
import { instance } from "../../core/instance";

const TitleDiv = ({ roomId, roomTitle, roomLocation }) => {
  const roomDeleteHandler = () => {
    instance
      .delete(`http://3.39.141.216:8080/api/room/${roomId}`)
      .then((response) => console.log(response));
  };
  const roomLikeHandler = () => {
    instance
      .post(`http://3.39.141.216:8080/api/room/${roomId}/like`)
      .then((response) => console.log(response));
  };
  return (
    <div>
      <div className={classes.titleDiv}>
        <h1>
          ({roomId}) {roomTitle}
        </h1>
        <div className={classes.summaryGroup}>
          <span>★ 4.87</span>
          <span>.</span>
          <span>호스트</span>
          <span>.</span>
          <span>{roomLocation}</span>
        </div>
        <div className={classes.buttonGroup}>
          <button className={classes.button}>
            <FiShare /> 공유하기
          </button>
          <button onClick={roomLikeHandler} className={classes.button}>
            <AiOutlineHeart />
            좋아요
          </button>
          <button
            type="button"
            onClick={roomDeleteHandler}
            className={classes.button}
          >
            <AiOutlineDelete />
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleDiv;
