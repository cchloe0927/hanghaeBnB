import React from "react";
import Card from "../elements/Card";
import { FaHeart } from "react-icons/fa";
import classes from "./RoomsCard.module.css";

const RoomsCard = () => {
  return (
    <Card className={classes.room_card}>
      <img
        className={classes.room_img}
        src="https://ldb-phinf.pstatic.net/20220409_217/1649434445156V17S7_JPEG/KakaoTalk_20220406_175952648.jpg"
      />

      <div className={classes.room_info}>
        <div className={classes.location_heart}>
          <p className={classes.room_location}>제주</p>
          <div className={classes.heart_counter}>
            <FaHeart />
            <p>1004</p>
          </div>
        </div>
        <p className={classes.room_title}>물결그림</p>
        <p>
          <span className={classes.room_price}>₩495,000</span> /박
        </p>
      </div>
    </Card>
  );
};

export default RoomsCard;
