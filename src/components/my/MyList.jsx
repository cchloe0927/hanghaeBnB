import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./MyList.module.css";

import Button from "../elements/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Card from "./Card";

const MyList = () => {
  const navigate = useNavigate();
  const sampleDate = JSON.stringify(new Date()).split("T")[0].substr(1);
  const sampleList = [
    {
      roomId: 1,
      title: "(1 Fl.) Fantastic Panoramic Ocean View",
      checkIn: sampleDate,
      checkOut: sampleDate,
      headCount: 3,
      totalPrice: "₩85,000",
    },
    {
      roomId: 2,
      title: "(2 Fl.) Fantastic Panoramic Ocean View",
      checkIn: sampleDate,
      checkOut: sampleDate,
      headCount: 3,
      totalPrice: "₩85,000",
    },
    {
      roomId: 3,
      title: "(3 Fl.) Fantastic Panoramic Ocean View",
      checkIn: sampleDate,
      checkOut: sampleDate,
      headCount: 3,
      totalPrice: "₩85,000",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.titleDiv}>
        <h1>예약내역</h1>
      </div>
      {sampleList.map(({ title, checkIn, headCount, totalPrice }) => (
        <Card
          title={title}
          checkIn={checkIn}
          headCount={headCount}
          totalPrice={totalPrice}
        />
      ))}
    </div>
  );
};

export default MyList;
