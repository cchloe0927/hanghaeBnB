import React from "react";
import classes from "./RoomsList.module.css";

const EmptyList = () => {
  return (
    <div className={classes.empty_list}>
      해당 지역에 등록된 숙소가 없습니다.
    </div>
  );
};

export default EmptyList;
