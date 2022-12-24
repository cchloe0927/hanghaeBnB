import React, { useState } from "react";

import classes from "./Reservation.module.css";

const Reservation = () => {
  return (
    <div className={classes.container}>
      <div className={classes.buttonGroup}>
        <button>♥︎</button>
        <button>삭제</button>
      </div>
      <div className={classes.imageGroup}>
        <div style={{ width: "450px", height: "350px" }}>img1</div>
        <div style={{ width: "450px", height: "350px" }}>img2</div>
      </div>
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
        <div className={classes.reservationDiv}>
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
