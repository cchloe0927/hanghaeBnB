import React from "react";
import SwiperLodation from "./SwiperLocation";
import RoomsCard from "./RoomsCard";
import classes from "./RoomsList.module.css";

const RoomsList = () => {
  return (
    <div>
      <header className={classes.header_category}>
        <SwiperLodation />
      </header>
      <div className={classes.rooms_container}>
        <RoomsCard />
        <RoomsCard />
        <RoomsCard />
        <RoomsCard />
        <RoomsCard />
        <RoomsCard />
      </div>
    </div>
  );
};

export default RoomsList;
