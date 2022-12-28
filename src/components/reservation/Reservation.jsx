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
  const [roomData, setRoomData] = useState({
    comments: [{ contents: "테스트 초기값" }],
  });

  //! 코멘트 입력창 열기
  const [commentAddInput, setCommentAddInput] = useState(false);

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
        setRoomData(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const commentHandler = () => {
    setCommentAddInput(!commentAddInput);
  };

  //! ===> 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const [addCommentValue, setAddCommentValue] = useState({
    checkIn: "",
    checkOut: "",
    headCount: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
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
  const totoalPriceHandler = () => {
    console.log(roomData);

    console.log(addCommentValue.checkOut);
    console.log(addCommentValue.checkIn);

    return (
      ((new Date(addCommentValue.checkOut).getTime() -
        new Date(addCommentValue.checkIn).getTime()) /
        (60 * 60 * 24 * 1000)) *
      (roomData.price +
        roomData.extraPrice *
          (addCommentValue.headCount - roomData.headDefault))
    );
  };
  const personChangeHandler = (e) => {
    const pesrson = Number(e.target.value);
    setAddCommentValue({
      ...addCommentValue,
      headCount: pesrson,
    });
  };
  //! totalPrice 스테이트 추가 로직
  useEffect(() => {
    const totalPrice =
      ((new Date(addCommentValue.checkOut).getTime() -
        new Date(addCommentValue.checkIn).getTime()) /
        (60 * 60 * 24 * 1000)) *
      (roomData.price +
        roomData.extraPrice *
          (addCommentValue.headCount - roomData.headDefault));
    setTotalPrice({
      totalPrice,
    });
  }, [addCommentValue]);
  console.log(totalPrice);
  //! <=== 예약관련 로직 (체크인, 체크아웃, 최대인원) 설정하기
  const reservationSubmitHandler = () => {
    console.log({ ...addCommentValue, ...totalPrice });
    if (totalPrice.totalPrice >= roomData.price) {
      instance.post(`http://3.39.141.216:8080/api/room/${numParamsId}/book`, {
        ...addCommentValue,
        ...totalPrice,
      });
    } else {
      console.log("유효하지않은값", totalPrice.totalPrice);
    }
  };
  //! <=== 예약 등록하기

  //! <=== 코멘트 삭제
  const commentDeleteHandler = (e) => {
    const commetsList = roomData.comments;
    const deleteCommentId = e;

    // const newArr = commetsList.filter((comment) => {
    //   return comment.commentId !== deleteCommentId;
    // });
    // console.log(newArr);
    instance
      .delete(`http://3.39.141.216:8080/api/room/comment/${deleteCommentId}`)
      .then((response) => console.log(response));
  };
  //! ===> 코멘트 삭제

  //! <=== 코멘트 수정
  //! 코멘트 수정 인풋창 스테이트
  const [commentEditInput, setCommentEditInput] = useState({
    commentId: "",
    commentEdit: false,
    editComment: "",
  });
  //! 수정 인풋창 생성
  const commentUpdateHandler = (e) => {
    setCommentEditInput({
      ...commentEditInput,
      commentId: e,
      commentEdit: true,
    });
  };
  //! 코멘트 수정값 스테이트 저장
  const editCommentInput = (e) => {
    const editCommentId = commentEditInput.commentId;
    const editContent = e.target.value;
    setCommentEditInput({
      ...commentEditInput,
      commentId: editCommentId,
      editComment: editContent,
    });
    console.log(commentEditInput);
  };
  //! 코멘트 업데이트 통신
  const commentEditHandler = () => {
    instance
      .post(
        `http://3.39.141.216:8080/api/room/comment/${commentEditInput.commentId}`,
        { contents: commentEditInput.editComment }
      )
      .then((response) => console.log(response));
    console.log(commentEditInput);
  };

  //! ===> 코멘트 수정
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
            personMax={roomData.headMax}
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
              {((new Date(addCommentValue.checkOut).getTime() -
                new Date(addCommentValue.checkIn).getTime()) /
                (60 * 60 * 24 * 1000)) *
                (roomData.price +
                  roomData.extraPrice *
                    (addCommentValue.headCount - roomData.headDefault)) &&
              ((new Date(addCommentValue.checkOut).getTime() -
                new Date(addCommentValue.checkIn).getTime()) /
                (60 * 60 * 24 * 1000)) *
                (roomData.price +
                  roomData.extraPrice *
                    (addCommentValue.headCount - roomData.headDefault)) >=
                roomData.price ? (
                ((new Date(addCommentValue.checkOut).getTime() -
                  new Date(addCommentValue.checkIn).getTime()) /
                  (60 * 60 * 24 * 1000)) *
                (roomData.price +
                  roomData.extraPrice *
                    (addCommentValue.headCount - roomData.headDefault))
              ) : (
                <span className={classes.validCheckText}>
                  필수항목을 입력해주세요
                </span>
              )}
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

        {/* 코멘트 수정 인풋 부분 */}
        <div className={classes.commentList}>
          {commentEditInput.commentEdit ? (
            <div>
              <input onChange={editCommentInput} />
              <Button
                type="button"
                onClick={commentEditHandler}
                className={classes.commentEditButton}
              >
                수정
              </Button>
            </div>
          ) : null}
          {/* 코멘트 수정 인풋 부분 */}

          {roomData.comments.map((item) => {
            return (
              <form key={item.createdAt} className={classes.commetCard}>
                <input className={classes.commetTitle} value={item.contents} />
                <div className={classes.buttonGroup}>
                  <Button
                    type="button"
                    onClick={() => commentUpdateHandler(item.commentId)}
                    className={classes.commentEditButton}
                  >
                    수정
                  </Button>
                  <Button
                    type="button"
                    onClick={() => commentDeleteHandler(item.commentId)}
                    className={classes.commentEditButton}
                  >
                    삭제
                  </Button>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
