import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getRoomInfo } from "../../redux/modules/roomDetailSlice";

import classes from "./Reservation.module.css";
import { instance } from "../../core/instance";
import axios from "axios";

import Button from "../elements/Button";
import ImgageDiv from "./ImgageDiv.jsx";
import TitleDiv from "./TitleDiv";
import Comment from "./Comment";
import TagGroup from "./TagGroup";
import RoomDescription from "./RoomDescription";
import CommonDescrition from "./CommonDescrition";
import RoomConvinence from "./RoomConvinence";
import RoomReservation from "./RoomReservation";

const Reservation = () => {
  const [state, setState] = useState(false);
  const { paramsId } = useParams();
  const numParamsId = Number(paramsId);
  const navigate = useNavigate();

  //! 방 상세 정보 상태 값
  const [roomData, setRoomData] = useState({
    comments: [
      {
        contents: "테스트 초기값",
        imgs: [
          "https://us.123rf.com/450wm/arcady31/arcady311108/arcady31110800017/10101139-%EC%83%98%ED%94%8C-%EC%9A%B0%ED%91%9C.jpg",
        ],
      },
    ],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getRoomInfo(paramsId));
  }, [dispatch]);

  useEffect(() => {
    instance.get(`room/${numParamsId}`).then((response) => {
      setState(true);
      setRoomData(response.data.data);
    });
  }, []);

  //   if (isLoading) {
  //     return <div>로딩 중....</div>;
  //   }
  //   if (error) {
  //     return <div>{error.message}</div>;
  //   }
  if (!state) {
    return <h1></h1>;
  }
  return (
    <div className={classes.container}>
      <TitleDiv
        roomTitle={roomData.title}
        roomLocation={roomData.location}
        roomId={roomData.roomId}
        roomLike={roomData.like}
      />
      <ImgageDiv imageArr={roomData.imgs} />
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
        <RoomReservation roomData={roomData} numParamsId={numParamsId} />
      </div>

      <Comment roomData={roomData} />
    </div>
  );
};

export default Reservation;
