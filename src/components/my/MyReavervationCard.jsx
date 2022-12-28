import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MyReavervationCard.module.css";
import { instance } from "../../core/instance";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Card = ({ title, checkIn, headCount, totalPrice, bookId }) => {
  const navigate = useNavigate();

  const cancleButtonHandler = (bookId) => {
    instance
      .delete(`http://3.39.141.216:8080/api/book/${bookId}`)
      .then((response) => console.log(response));
  };
  return (
    <div className={classes.container}>
      <div className={classes.contentsDiv}>
        <div className={classes.roomList}>
          <div className={classes.roomImageDiv}>
            <div className={classes.roomImage}></div>
          </div>
          <div className={classes.roomContents}>
            <div className={classes.roomTitle}>{title}</div>
            <div className={classes.roomDate}>
              <span>예약 날짜: </span>
              <span>{checkIn}</span>
            </div>
            <div className={classes.roomPeson}>
              <span>인원 수: </span>
              <span>{headCount}</span>
            </div>
            <div className={classes.roomTotalPrice}>
              <span>Total Price: </span>
              <span>{totalPrice}</span>
              <div>(기본 숙박료 + 추가 요금)</div>
            </div>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <Button
            className={classes.cancleButton}
            onClick={() => cancleButtonHandler(bookId)}
          >
            예약 취소
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
