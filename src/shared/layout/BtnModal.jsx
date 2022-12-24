import React from "react";
import { Link } from "react-router-dom";
import classes from "./BtnModal.module.css";

const BtnModal = ({ onCloseBtnHandler }) => {
  return (
    <div className={classes.backdrop} onClick={onCloseBtnHandler}>
      <div className={classes.modal}>
        <Link className={classes.sing_in} to={"/login"}>
          로그인
        </Link>
        <Link className={classes.sing_out} to={"/register"}>
          회원가입
        </Link>
        <Link className={classes.sing_out} to={"/post"}>
          숙소등록
        </Link>
      </div>
    </div>
  );
};

export default BtnModal;
