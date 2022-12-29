import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import classes from "./Comment.module.css";
import __postComment from "../../redux/modules/commentSlice";
import { instance } from "../../core/instance";

import Button from "../elements/Button";

import { AiOutlinePlusCircle } from "react-icons/ai";

const Comment = ({ roomData }) => {
  //   const [state, setState] = useState(false);
  //   useEffect(() => {
  //     setState(true);
  //   }, []);
  const [commentList, setCommentList] = useState(roomData.comments);
  //console.log(commentList);
  //! 코멘트 입력창 열기
  const [commentAddInput, setCommentAddInput] = useState(false);
  const commentHandler = () => {
    setCommentAddInput(!commentAddInput);
  };

  const { paramsId } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const commentInputHandler = (e) => {
    setComment(e.target.value);
  };
  const roomId = Number(paramsId);
  const addCommentHandler = () => {
    const newComment = { contents: comment };
    instance.post(`room/${roomId}/comment`, newComment);
    setComment("");
    setCommentList([
      ...commentList,
      {
        contents: comment,
        commentId: commentList[commentList.length - 1].commentId + 1,
      },
    ]);
  };
  //! <=== 코멘트 등록관련 함수
  //! <=== 코멘트 수정
  //! 코멘트 수정 인풋창 스테이트
  const [commentEditInput, setCommentEditInput] = useState({
    commentId: "",
    commentEdit: false,
    editComment: "",
  });
  //! 수정 인풋창 생성
  const commentUpdateHandler = (e) => {
    setCommentEditInput({
      ...commentEditInput,
      commentId: e,
      commentEdit: true,
    });
  };
  //! <=== 코멘트 삭제
  const commentDeleteHandler = (e) => {
    const deleteCommentId = e;
    const newArr = commentList.filter((comment) => {
      return comment.commentId !== deleteCommentId;
    });
    setCommentList(newArr);
    console.log(commentList);
    instance
      .delete(`room/comment/${deleteCommentId}`)
      .then((response) => console.log(response));
  };
  //! <=== 코멘트 삭제
  //! 코멘트 수정값 스테이트 저장
  const editCommentInput = (e) => {
    const editCommentId = commentEditInput.commentId;
    const editContent = e.target.value;
    setCommentEditInput({
      ...commentEditInput,
      commentId: editCommentId,
      editComment: editContent,
    });
    // setCommentList([...commentList,]);
  };
  //! 코멘트 업데이트 통신
  const commentEditHandler = () => {
    setCommentList(
      commentList.map((comment) =>
        comment.commentId === commentEditInput.commentId
          ? { ...comment, contents: commentEditInput.editComment }
          : comment
      )
    );
    instance
      .post(`room/comment/${commentEditInput.commentId}`, {
        contents: commentEditInput.editComment,
      })
      .then((response) => console.log(response));
    setCommentEditInput(false);
  };

  //! ===> 코멘트 수정
  //   if (!state) {
  //     return <h1>로당</h1>;
  //   }
  return (
    <div>
      <div className={classes.reviewDiv}>
        <div className={classes.reviewButtonGroup}>
          <button className={classes.button} onClick={commentHandler}>
            <AiOutlinePlusCircle />
            <span>후기</span>
          </button>
        </div>
        {commentAddInput ? (
          <div className={classes.commentDiv}>
            <input
              value={comment}
              onChange={commentInputHandler}
              className={classes.commenInput}
            ></input>
            <div className={classes.commentButtonDiv}>
              <Button
                type="button"
                className={classes.commentButton}
                onClick={addCommentHandler}
              >
                추가
              </Button>
            </div>
          </div>
        ) : null}

        {/* 코멘트 수정 인풋 부분 */}
        <div className={classes.commentList}>
          {commentEditInput.commentEdit ? (
            <div className={classes.editCommentDiv}>
              <input
                onChange={editCommentInput}
                className={classes.commentEditInput}
              />
              <div className={classes.commentEditButtonDiv}>
                <Button
                  type="button"
                  onClick={commentEditHandler}
                  className={classes.commentEditButton}
                >
                  수정
                </Button>
              </div>
            </div>
          ) : null}
          {/* 코멘트 수정 인풋 부분 */}
          {commentList.map((item) => {
            return (
              <form key={item.createdAt} className={classes.commetCard}>
                <input className={classes.commetTitle} value={item.contents} />
                <div className={classes.buttonGroup}>
                  <Button
                    type="button"
                    onClick={() => commentUpdateHandler(item.commentId)}
                    className={classes.commentEditButton}
                  >
                    수정
                  </Button>
                  <Button
                    type="button"
                    onClick={() => commentDeleteHandler(item.commentId)}
                    className={classes.commentEditButton}
                  >
                    삭제
                  </Button>
                </div>
              </form>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comment;
