import React, { useEffect } from "react";
import LocationSwiper from "./LocationSwiper";
import RoomsCard from "./RoomsCard";
import classes from "./RoomsList.module.css";
//redux
import { useDispatch, useSelector } from "react-redux";
import { __getRooms } from "../../redux/modules/roomsSlice";

const RoomsList = () => {
  // console.log(dummy);
  const dispatch = useDispatch();
  const roomsList = useSelector((room) => room.rooms.rooms);

  useEffect(() => {
    dispatch(__getRooms());
  }, [dispatch]);

  useEffect(() => {
    if (roomsList.length === 0 || roomsList === undefined) {
      return;
    }
  }, []);

  return (
    <div>
      <header className={classes.header_category}>
        <LocationSwiper />
      </header>
      <div className={classes.rooms_container}>
        {roomsList.map((card, index) => (
          <RoomsCard
            key={index}
            roomId={card.roomId}
            title={card.title}
            location={card.location}
            price={card.price}
            imgs={card.imgs[0]}
            likeCount={card.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
