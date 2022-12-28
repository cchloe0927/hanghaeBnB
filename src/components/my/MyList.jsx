import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../../core/instance";
import classes from "./MyList.module.css";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import MyReavervationCard from "./MyReavervationCard";

const MyList = () => {
  let num = 0;
  const navigate = useNavigate();
  const sampleDate = JSON.stringify(new Date()).split("T")[0].substr(1);
  const [roomReservation, setRoomReservation] = useState([]);

  useEffect(() => {
    instance.get(`http://3.39.141.216:8080/api/book`).then((response) => {
      setRoomReservation(response.data.data.responseBookList);
      console.log(response.data.data.responseBookList);
    });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.titleDiv}>
        <h1>예약내역</h1>
      </div>
      <div className={classes.cardListDiv}>
        {roomReservation.map(
          ({ title, checkIn, headCount, totalPrice, bookId }) => (
            <MyReavervationCard
              key={num++}
              title={title}
              checkIn={checkIn}
              headCount={headCount}
              totalPrice={totalPrice}
              bookId={bookId}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MyList;
