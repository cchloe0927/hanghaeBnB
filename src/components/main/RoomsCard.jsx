import React from "react";
import classes from "./RoomsCard.module.css";
import { FaHeart } from "react-icons/fa";
import Card from "../elements/Card";
import { useNavigate } from "react-router-dom";

const RoomsCard = ({ roomId, title, location, price, img, likeCount }) => {
  const navigate = useNavigate();

  const onClickCardHandler = () => {
    navigate(`/reservation/${roomId}`);
  };

  return (
    <Card className={classes.room_card} onClick={onClickCardHandler}>
      <img className={classes.room_img} src={img} />

      <div className={classes.room_info}>
        <div className={classes.location_heart}>
          <p className={classes.room_location}>{location}</p>
          <div className={classes.heart_counter}>
            <FaHeart />
            <p>{likeCount}</p>
          </div>
        </div>
        <p className={classes.room_title}>{title}</p>
        <p>
          <span className={classes.room_price}>₩{price}</span> /박
        </p>
      </div>
    </Card>
  );
};

export default RoomsCard;
