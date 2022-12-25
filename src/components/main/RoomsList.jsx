import React, { useEffect } from "react";
import SwiperLodation from "./SwiperLocation";
import RoomsCard from "./RoomsCard";
import classes from "./RoomsList.module.css";
//redux
import { useDispatch, useSelect } from "react-redux";
import { __getRooms } from "../../redux/modules/roomsSlice";

const RoomsList = () => {
  const dispatch = useDispatch();
  // const roomsList = useSelect((room) => room.rooms);

  useEffect(() => {
    dispatch(__getRooms);
  }, [dispatch]);

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
