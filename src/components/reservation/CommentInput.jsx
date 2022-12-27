import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./Reservation.module.css";
import __postComment from "../../redux/modules/commentSlice";
import { instance } from "../../core/instance";

import Button from "../elements/Button";

//! ===> 코멘트 등록관련 함수
const CommentInput = () => {
  const { paramsId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const commentInputHandler = (e) => {
    setComment(e.target.value);
  };
  const roomId = Number(paramsId);
  const addCommentHandler = () => {
    const newComment = { contents: comment };
    // dispatch(__postComment(comment));
    instance.post(
      `http://3.39.141.216:8080/api/room/${roomId}/comment`,
      newComment
    );
    setComment("");
  };
  //! <=== 코멘트 등록관련 함수
  return (
    <div>
      <div className={classes.commentDiv}>
        <input value={comment} onChange={commentInputHandler}></input>
        <Button
          type="button"
          className={classes.commentButton}
          onClick={addCommentHandler}
        >
          추가
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
