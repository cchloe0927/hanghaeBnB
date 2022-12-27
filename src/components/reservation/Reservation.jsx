import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getRoomInfo } from "../../redux/modules/roomDetailSlice";

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
  const { paramsId } = useParams();
  const navigate = useNavigate();

  const [commentAdd, setCommentAdd] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error, roomsDetail } = useSelector(
    (state) => state.roomsDetail
  );

  useEffect(() => {
    dispatch(__getRoomInfo(paramsId));
  }, [dispatch]);
  console.log(roomsDetail.data);
  const roomTitle = roomsDetail.data.title;
  const roomId = roomsDetail.data.roomId;
  const hostName = roomsDetail.data.hostName;
  const personDefault = roomsDetail.data.headDefault;
  const personMax = roomsDetail.data.headMax;
  const roomLocation = roomsDetail.data.location;
  const price = roomsDetail.data.price;
  const extraPrice = roomsDetail.data.extraPrice;
  const roomTags = roomsDetail.data.tags;

  const today = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  console.log(today);

  const commentHandler = () => {
    setCommentAdd(!commentAdd);
  };
  const checkInOutDateHandler = (e) => {
    console.log(e.target);
  };

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className={classes.container}>
      <TitleDiv
        roomTitle={roomTitle}
        roomLocation={roomLocation}
        roomId={roomId}
      />
      <ImgageDiv />
      <div className={`${classes.contentsDiv} ${classes.sticky}`}>
        <div className={classes.TextDiv}>
          <RoomDescription hostName={hostName} personMax={personMax} />
          <CommonDescrition />
          <RoomConvinence />
          <hr />
          <TagGroup roomTags={roomTags} />
        </div>
        <div className={classes.reservationContent}>
          <div className={classes.priceTitleDiv}>
            <span className={classes.priceTitle}>₩{price}</span>
            <span>/박</span>
          </div>
          <div className={classes.reservationTable}>
            <div className={classes.reservationDate}>
              <label htmlFor="checkIn">
                체크인
                <input
                  onChange={checkInOutDateHandler}
                  type="date"
                  id="checkIn"
                  max="2077-06-20"
                  min={today}
                  value={today}
                />
              </label>
              <label htmlFor="checkOut">
                체크아웃
                <input
                  onChange={checkInOutDateHandler}
                  type="date"
                  id="checkOut"
                  max="2077-06-20"
                  min={today}
                  value="2022-12-27"
                />
              </label>
            </div>
            <div className={classes.reservationPerson}>인원</div>
            <div>
              <span>기본인원: {personDefault} </span>
              <span>최대인원: {personMax}</span>
            </div>
          </div>
          <Button onClick={() => navigate("/mypage")}>예약하기</Button>
          <div className={classes.priceNotice}>
            예약 확정 전에는 요금이 청구되지 않습니다.
          </div>
          <div>추가 요금(한 명당): {extraPrice}</div>
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
