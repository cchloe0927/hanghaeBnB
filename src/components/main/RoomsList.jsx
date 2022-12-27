import React, { useEffect } from "react";
import LocationSwiper from "./LocationSwiper";
import RoomsCard from "./RoomsCard";
import classes from "./RoomsList.module.css";
//redux
import { useDispatch, useSelect } from "react-redux";
import { __getRooms } from "../../redux/modules/roomsSlice";
//dummy
import dummy from "../../db.json";

const RoomsList = () => {
  // console.log(dummy);
  const dispatch = useDispatch();
  // const roomsList = useSelect((room) => room.rooms);

  useEffect(() => {
    dispatch(__getRooms);
  }, [dispatch]);

  return (
    <div>
      <header className={classes.header_category}>
        <LocationSwiper />
      </header>
      <div className={classes.rooms_container}>
        {dummy.data.map((card, index) => (
          <RoomsCard
            key={index}
            roomId={card.roomId}
            title={card.title}
            location={card.location}
            price={card.price}
            img={card.img}
            likeCount={card.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
