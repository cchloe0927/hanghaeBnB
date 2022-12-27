import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Reservation.module.css";
import Button from "../elements/Button";
import ImgageDiv from "./ImgageDiv.jsx";
import TitleDiv from "./TitleDiv";
import CommentInput from "./CommentInput";
import TagGroup from "./TagGroup";
import RoomDescription from "./RoomDescription";
import CommonDescrition from "./CommonDescrition";
import RoomConvinence from "./RoomConvinence";

import { AiOutlinePlusCircle } from "react-icons/ai";

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
          <RoomDescription />
          <CommonDescrition />
          <RoomConvinence />
          <hr />
          <TagGroup />
        </div>
        <div className={classes.reservationContent}>
          <div className={classes.priceTitleDiv}>
            <span className={classes.priceTitle}>₩70,000</span>
            <span>/박</span>
          </div>
          <div className={classes.reservationTable}>
            <div className={classes.reservationDate}>
              <div>체크인</div>
              <div>체크아웃</div>
            </div>
            <div className={classes.reservationPerson}>인원</div>
          </div>
          <Button onClick={() => navigate("/mypage")}>예약하기</Button>
          <div className={classes.priceNotice}>
            예약 확정 전에는 요금이 청구되지 않습니다.
          </div>
          <div className={classes.divLine}></div>
          <div className={classes.totalPriceDiv}>
            <div>총 합계</div>
            <div>₩70,000</div>
          </div>
        </div>
      </div>

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
