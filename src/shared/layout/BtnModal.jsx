import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./BtnModal.module.css";

const BtnModal = ({ onCloseBtnHandler }) => {
  const [token, setToken] = useState(localStorage.getItem("id"));
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));
  console.log(userRole);

  const onClickLogoutButtonHandler = () => {
    setToken(localStorage.removeItem("id"));
    setToken(localStorage.removeItem("nickname"));
    setToken(localStorage.removeItem("email"));
    setToken(localStorage.removeItem("role"));
  };

  return (
    <div className={classes.backdrop} onClick={onCloseBtnHandler}>
      <div className={classes.modal}>
        {token ? (
          <Link
            className={classes.sing_in}
            to={"/"}
            onClick={onClickLogoutButtonHandler}
          >
            로그아웃
          </Link>
        ) : (
          <Link className={classes.sing_in} to={"/login"}>
            로그인
          </Link>
        )}
        <Link className={classes.sing_out} to={"/register"}>
          회원가입
        </Link>
        {userRole === "HOST" ? (
          <Link className={classes.sing_out} to={"/post"}>
            숙소등록
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default BtnModal;
