import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getRoomInfo } from "../../redux/modules/roomDetailSlice";

import classes from "./Reservation.module.css";
import { instance } from "../../core/instance";

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
  const numParamsId = Number(paramsId);
  const navigate = useNavigate();

  //! ===> 오늘, 내일 날짜 (yyyy-mm-dd)
  const today = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  const tomorrow = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
    new Date().getDate() + 1
  }`;
  //! <=== 오늘, 내일 날짜 (yyyy-mm-dd)

  //! 방 상세 정보 상태 값
  const [roomData, setRoomDate] = useState({});

  //! 코멘트 입력창 열기
  const [commentAddInput, setCommentAddInput] = useState(false);
  //! 코멘트 추가 상태 입력
  const [addCommentValue, setAddCommentValue] = useState({
    checkIn: today,
    checkOut: tomorrow,
    headCount: 2,
  });

  /* dispatch 구현 부분
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getRoomInfo(paramsId));
  }, [dispatch]);
  const { isLoading, error, roomsDetail } = useSelector((state) => {
    return state.roomsDetail;
  });
*/

  useEffect(() => {
    instance
      .get(`http://3.39.141.216:8080/api/room/${numParamsId}`)
      .then((response) => {
        setRoomDate(response.data.data);
      });
  }, []);

  // const roomTitle = roomData.title;
  // const roomId = roomData.roomId;
  // const hostName = roomData.hostName;
  // const personDefault = roomData.headDefault;
  // const personMax = roomData.headMax;
  // const roomLocation = roomData.location;
  // const price = roomData.price;
  // const extraPrice = roomData.extraPrice;
  // const roomTags = roomData.tags;

  const commentHandler = () => {
    setCommentAddInput(!commentAddInput);
  };

  //! ===> 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const checkInOutDateHandler = (e) => {
    console.log(e.target);
    const dateId = e.target.id;
    const dateValue = e.target.value;
    setAddCommentValue({ ...addCommentValue, [dateId]: dateValue });
  };
  const maxPerson = () => {
    let arr = [];
    let num = 0;
    for (let i = roomData.headDefault; i <= roomData.headMax; i++) {
      arr.push(
        <option key={num++} value={i}>
          {i}
        </option>
      );
    }
    return arr;
  };
  const personChangeHandler = (e) => {
    const pesrson = Number(e.target.value);
    setAddCommentValue({ ...addCommentValue, headCount: pesrson });
  };
  //! <=== 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const reservationSubmitHandler = () => {
    instance.post(
      `http://3.39.141.216:8080/api/book/${numParamsId}`,
      addCommentValue
    );
  };
  //! <=== 예약 등록하기
  //   if (isLoading) {
  //     return <div>로딩 중....</div>;
  //   }
  //   if (error) {
  //     return <div>{error.message}</div>;
  //   }
  return (
    <div className={classes.container}>
      <TitleDiv
        roomTitle={roomData.title}
        roomLocation={roomData.location}
        roomId={roomData.roomId}
      />
      <ImgageDiv />
      <div className={`${classes.contentsDiv} ${classes.sticky}`}>
        <div className={classes.TextDiv}>
          <RoomDescription
            hostName={roomData.hostName}
            personMax={roomData.personMax}
          />
          <CommonDescrition />
          <RoomConvinence />
          <hr />
          <TagGroup roomTags={roomData.tags} />
        </div>
        <div className={classes.reservationContent}>
          <div className={classes.priceTitleDiv}>
            <span className={classes.priceTitle}>₩{roomData.price}</span>
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
                  max="2023-12-31"
                  min={today}
                  value={addCommentValue.checkIn}
                />
              </label>
              <label htmlFor="checkOut">
                체크아웃
                <input
                  onChange={checkInOutDateHandler}
                  type="date"
                  id="checkOut"
                  max="2023-12-31"
                  min={tomorrow}
                  value={addCommentValue.checkOut}
                />
              </label>
            </div>
            <div className={classes.reservationPerson}>인원</div>
            <div>
              <span>
                기본인원:
                {roomData.personDefault}
              </span>
              <span>
                최대인원:
                {roomData.personMax}
              </span>
              <select onChange={personChangeHandler}>{maxPerson()}</select>
            </div>
          </div>
          <Button type="button" onClick={reservationSubmitHandler}>
            예약하기
          </Button>
          <div className={classes.priceNotice}>
            예약 확정 전에는 요금이 청구되지 않습니다.
          </div>
          <div>
            추가 요금(한 명당):
            {roomData.extraPrice}
          </div>
          <div className={classes.divLine}></div>
          <div className={classes.totalPriceDiv}>
            <div>총 합계</div>
            <div>
              {console.log()}

              {((new Date(addCommentValue.checkOut).getTime() -
                new Date(addCommentValue.checkIn).getTime()) /
                (60 * 60 * 24 * 1000)) *
                (roomData.price +
                  roomData.extraPrice *
                    (addCommentValue.headCount - roomData.headDefault))}
            </div>
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
        {commentAddInput ? <CommentInput /> : null}
        <div className={classes.commentList}></div>
      </div>
    </div>
  );
};

export default Reservation;
