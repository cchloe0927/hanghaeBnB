import React, { useEffect, useState } from "react";
import classes from "./RoomsList.module.css";
import LocationSwiper from "./LocationSwiper";
import RoomsCard from "./RoomsCard";
import EmptyList from "./EmptyList";
//redux
import { useDispatch, useSelector } from "react-redux";
import { __postRooms } from "../../redux/modules/roomsSlice";

const RoomsList = () => {
  const dispatch = useDispatch();
  const roomsList = useSelector((room) => room.rooms.rooms);
  const [list, setList] = useState(roomsList);

  useEffect(() => {
    dispatch(__postRooms());
  }, [dispatch]);

  useEffect(() => {
    if (roomsList.length === 0 || roomsList === undefined) {
      return;
    }
    setList(roomsList);
  }, []);

  return (
    <div>
      <header className={classes.header_category}>
        <LocationSwiper />
      </header>
      <div className={classes.rooms_container}>
        {roomsList.length === 0 ? (
          <EmptyList />
        ) : (
          roomsList.map((card, index) => (
            <RoomsCard
              key={index}
              roomId={card.roomId}
              title={card.title}
              location={card.location}
              price={card.price}
              imgs={card.imgs[0]}
              likeCount={card.likeCount}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default RoomsList;
