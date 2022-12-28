import React, { useState, useEffect } from "react";

import classes from "./RoomReservation.module.css";
import { instance } from "../../core/instance";
import Button from "../elements/Button";

const RoomReservation = ({ roomData, numParamsId }) => {
  //! ===> 오늘, 내일 날짜 (yyyy-mm-dd)
  const today = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;
  const tomorrow = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
    new Date().getDate() + 1
  }`;
  //! <=== 오늘, 내일 날짜 (yyyy-mm-dd)

  //! ===> 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const [reservationState, setReservatioState] = useState({
    checkIn: "",
    checkOut: "",
    headCount: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const checkInOutDateHandler = (e) => {
    console.log(e.target);
    const dateId = e.target.id;
    const dateValue = e.target.value;
    setReservatioState({ ...reservationState, [dateId]: dateValue });
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
  //! totalPrice 스테이트 추가 로직
  useEffect(() => {
    const totalPrice =
      ((new Date(reservationState.checkOut).getTime() -
        new Date(reservationState.checkIn).getTime()) /
        (60 * 60 * 24 * 1000)) *
      (roomData.price +
        roomData.extraPrice *
          (reservationState.headCount - roomData.headDefault));
    setTotalPrice({
      totalPrice,
    });
  }, [reservationState]);

  //! <=== 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const reservationSubmitHandler = () => {
    if (totalPrice.totalPrice >= roomData.price) {
      instance.post(
        `room/${numParamsId}/book`,
        {
          ...reservationState,
          ...totalPrice,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } else {
      console.log("유효하지않은값", totalPrice.totalPrice);
    }
  };

  const personChangeHandler = (e) => {
    const pesrson = Number(e.target.value);
    setReservatioState({
      ...reservationState,
      headCount: pesrson,
    });
  };
  //! <=== 예약 등록하기
  return (
    <div className={classes.reservationContentDiv}>
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
                value={reservationState.checkIn}
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
                value={reservationState.checkOut}
              />
            </label>
          </div>
          <div className={classes.reservationPerson}>인원</div>
          <div>
            <span>
              기본인원:
              {roomData.headDefault}
            </span>
            <span>
              최대인원:
              {roomData.headMax}
            </span>
            <select onChange={personChangeHandler}>
              <option>인원 선택</option>
              {maxPerson()}
            </select>
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
            {/* totalPrice 계산 부분 */}
            {((new Date(reservationState.checkOut).getTime() -
              new Date(reservationState.checkIn).getTime()) /
              (60 * 60 * 24 * 1000)) *
              (roomData.price +
                roomData.extraPrice *
                  (reservationState.headCount - roomData.headDefault)) &&
            ((new Date(reservationState.checkOut).getTime() -
              new Date(reservationState.checkIn).getTime()) /
              (60 * 60 * 24 * 1000)) *
              (roomData.price +
                roomData.extraPrice *
                  (reservationState.headCount - roomData.headDefault)) >=
              roomData.price ? (
              ((new Date(reservationState.checkOut).getTime() -
                new Date(reservationState.checkIn).getTime()) /
                (60 * 60 * 24 * 1000)) *
              (roomData.price +
                roomData.extraPrice *
                  (reservationState.headCount - roomData.headDefault))
            ) : (
              <span className={classes.validCheckText}>
                필수항목을 입력해주세요
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomReservation;
