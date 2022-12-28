import React, { useState } from "react";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import classes from "./TitleDiv.module.css";
import { instance } from "../../core/instance";

const TitleDiv = ({ roomId, roomTitle, roomLocation, roomLike }) => {
  console.log(roomLike);
  const [like, setLike] = useState(roomLike);

  const roomDeleteHandler = () => {
    instance.delete(`room/${roomId}`).then((response) => console.log(response));
  };
  const roomLikeHandler = () => {
    instance
      .post(`room/${roomId}/like`)
      .then((response) => setLike(response.data.data.like));
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
            {like ? <AiFillHeart /> : <AiOutlineHeart />}
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
