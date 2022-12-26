import react from "react";

import classes from "./Reservation.module.css";
import Button from "../elements/Button";

const CommentInput = () => {
  return (
    <div>
      <div className={classes.commentDiv}>
        <input></input>
        <Button className={classes.commentButton}>추가</Button>
      </div>
    </div>
  );
};

export default CommentInput;
