import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MyList.module.css";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Card = ({ title, checkIn, headCount, totalPrice }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.contentsDiv}>
        <div className={classes.roomList}>
          <div className={classes.roomImageDiv}>
            <div>image1</div>
          </div>
          <div className={classes.roomContents}>
            <div className={classes.roomTitle}>{title}</div>
            <div className={classes.roomDate}>
              <span>예약 날짜</span>
              <span>{checkIn}</span>
            </div>
            <div className={classes.roomPeson}>
              <span>인원 수</span>
              <span>{headCount}</span>
            </div>
            <div className={classes.roomTotalPrice}>
              <span>Total Price: </span>
              <span>{totalPrice}</span>
            </div>
          </div>
        </div>
        <div className={classes.buttonDiv}>
          <Button className={classes.cancleButton}>예약 취소</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
