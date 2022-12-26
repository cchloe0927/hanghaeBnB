import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Reservation.module.css";
import Button from "../elements/Button";
import ImgageDiv from "./ImgageDiv.jsx";
import TitleDiv from "./TitleDiv";
import CommentInput from "./CommentInput";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaCity } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { GiWaveSurfer } from "react-icons/gi";

const Reservation = () => {
  const navigate = useNavigate();
  const commentScrollRef = useRef();
  const [commentAdd, setCommentAdd] = useState(false);

  const commentHandler = () => {
    setCommentAdd(!commentAdd);
    // commentScrollRef.current.focus();
  };
  return (
    <div className={classes.container}>
      <TitleDiv />
      <ImgageDiv />
      <div className={`${classes.contentsDiv} ${classes.sticky}`}>
        <div className={classes.TextDiv}>
          <div>title</div>
          <hr />
          <div>body</div>
          <hr />
          <div className={classes.tagGroup}>
            <div className={classes.tag}>
              <span className={classes.tagIcon}>
                <GiParkBench />
              </span>
              <span className={classes.tagTitle}>공원</span>
            </div>
            <div className={classes.tag}>
              <span className={classes.tagIcon}>
                <GiWaveSurfer />
              </span>
              <span className={classes.tagTitle}>오션뷰</span>
            </div>
            <div className={classes.tag}>
              <span className={classes.tagIcon}>
                <FaCity />
              </span>
              <span className={classes.tagTitle}>시티뷰</span>
            </div>
          </div>
        </div>
        <div className={classes.reservationContent}>
          <div>price</div>
          <Button onClick={() => navigate("/mypage")}>예약하기</Button>
          <div>DetailPrice</div>
        </div>
      </div>
      <hr />
      <div className={classes.reviewDiv}>
        <div className={classes.reviewButtonGroup}>
          <button className={classes.button} onClick={commentHandler}>
            <AiOutlinePlusCircle />
            후기
          </button>
        </div>
        {commentAdd ? <CommentInput /> : null}
        <div className={classes.commentList}></div>
      </div>
    </div>
  );
};

export default Reservation;
