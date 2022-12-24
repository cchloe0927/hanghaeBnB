import React from "react";
import { Link } from "react-router-dom";
import classes from "./BtnModal.module.css";

const BtnModal = ({ onModal }) => {
  return (
    <div className={classes.backdrop} onClick={onModal}>
      <div className={classes.modal}>
        <Link className={classes.sing_in} to={"/login"}>
          로그인
        </Link>
        <Link className={classes.sing_out} to={"/register"}>
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default BtnModal;
