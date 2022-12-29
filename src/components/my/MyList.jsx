import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../core/instance";
import classes from "./MyList.module.css";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import MyReavervationCard from "./MyReavervationCard";

const MyList = () => {
  const [state, setState] = useState(false);
  const [reservationList, setReservationList] = useState("");
  console.log(reservationList);
  let num = 0;
  const navigate = useNavigate();
  const sampleDate = JSON.stringify(new Date()).split("T")[0].substr(1);
  const [roomReservation, setRoomReservation] = useState([]);

  useEffect(() => {
    instance.get(`book`).then((response) => {
      setRoomReservation(response.data.data.responseBookList);
      setReservationList(response.data.data.responseBookList);
      setState(true);
    });
  }, []);
  const cancleButtonHandler = (bookId) => {
    setReservationList(
      reservationList.filter((room) => room.bookId !== bookId)
    );
    instance.delete(`book/${bookId}`).then((response) => console.log(response));
  };
  if (!state) {
    return <h1></h1>;
  }
  return (
    <div className={classes.container}>
      <div className={classes.titleDiv}>
        <h1>예약내역</h1>
      </div>
      <div className={classes.cardListDiv}>
        {reservationList.map(
          ({
            title,
            checkIn,
            headCount,
            totalPrice,
            bookId,
            roomId,
            photos,
          }) => (
            <div className={classes.cardDiv}>
              <MyReavervationCard
                key={roomId}
                title={title}
                checkIn={checkIn}
                headCount={headCount}
                totalPrice={totalPrice}
                bookId={bookId}
                roomId={roomId}
                reservationList={reservationList}
                photos={photos[0]}
              />
              <div className={classes.buttonDiv}>
                <Button
                  className={classes.cancleButton}
                  onClick={() => cancleButtonHandler(bookId)}
                >
                  예약 취소
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyList;
