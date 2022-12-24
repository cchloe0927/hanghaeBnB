import React, { useState } from "react";

import classes from "./Reservation.module.css";
import ImgageDiv from "./ImgageDiv.jsx";
import TitleDiv from "./TitleDiv";

const Reservation = () => {
  return (
    <div className={classes.container}>
      <TitleDiv />
      <ImgageDiv />
      <div className={classes.contentsDiv}>
        <div className={classes.TextDiv}>
          <div>title</div>
          <hr />
          <div>body</div>
          <hr />
          <div className={classes.tagGroup}>
            <div>tag1</div>
            <div>tag2</div>
            <div>tag3</div>
          </div>
        </div>
        <div className={classes.reservationContent}>
          <div>price</div>
          <button>예약하기</button>
          <div>DetailPrice</div>
        </div>
      </div>
      <hr />
      <div className={classes.reviewDiv}>
        <div className={classes.reviewButtonGroup}>
          <span>후기</span>
          <button>(+)</button>
        </div>
        <div className={classes.commentDiv}>
          <input></input>
          <button>추가</button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
