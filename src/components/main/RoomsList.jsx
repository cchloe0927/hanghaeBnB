import React from "react";
import SwiperLodation from "./SwiperLocation";
import classes from "./RoomsList.module.css";

const RoomsList = () => {
  return (
    <div className={classes.wrap}>
      <header className={classes.header_category}>
        <SwiperLodation />
      </header>
    </div>
  );
};

export default RoomsList;
