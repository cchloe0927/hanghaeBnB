import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./MyReavervationCard.module.css";
import { instance } from "../../core/instance";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Card = ({
  title,
  checkIn,
  headCount,
  totalPrice,
  bookId,
  roomId,
  reservationList,
  photos,
}) => {
  const [state, setState] = useState(false);

  const [room, setRoom] = useState([]);
  const navigate = useNavigate();
  const roomsList = useSelector((room) => [
    room.rooms.rooms.find((room) => room.roomId === roomId),
  ]);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return <h1></h1>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.contentsDiv}>
        <div className={classes.roomList}>
          <div className={classes.roomImageDiv}>
            <img className={classes.roomImage} src={photos}></img>
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
      </div>
    </div>
  );
};

export default Card;
