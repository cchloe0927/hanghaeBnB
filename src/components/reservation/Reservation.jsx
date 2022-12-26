import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Reservation.module.css";
import Button from "../elements/Button";
import ImgageDiv from "./ImgageDiv.jsx";
import TitleDiv from "./TitleDiv";
import CommentInput from "./CommentInput";

import { AiOutlinePlusCircle } from "react-icons/ai";

const Reservation = () => {
  const navigate = useNavigate();
  const [commentAdd, setCommentAdd] = useState(false);

  const commentHandler = () => {
    setCommentAdd(!commentAdd);
  };
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
