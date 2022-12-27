import React, { useState } from "react";
import classes from "./SignIn.module.css";
import { FaTimes } from "react-icons/fa";
import kakao from "../../../img/icon_kakao.png";
import google from "../../../img/icon_google.png";
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { sign_in } from "../../../core/LoginAPI";

const AlertModal = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",

    isValidEmail: true,
    isValidPassword: true,
  });

  //카카오 인가 코드 요청
  //   const onClickKakaoHandler = async (e) => {
  //     window.location.href = KAKAO_AUTH_URL;
  //   };

  const onClickCloseBtnHandler = () => {
    navigate("/");
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email" && value) {
      setLoginValue({ ...loginValue, isValidEmail: true, [name]: value });
    } else if (name === "password" && value) {
      setLoginValue({ ...loginValue, isValidPassword: true, [name]: value });
    } else if (name === "email" && !value) {
      setLoginValue({ ...loginValue, isValidEmail: false, [name]: value });
    } else {
      setLoginValue({ ...loginValue, isValidPassword: false, [name]: value });
    }
  };
  //console.log("onChange :", loginValue);

  const onSubmitLoginValueHandler = (event) => {
    event.preventDefault();
    if (loginValue.email === "") {
      setLoginValue({ ...loginValue, isValidEmail: false });
    } else if (loginValue.password === "") {
      setLoginValue({ ...loginValue, isValidPassword: false });
    } else {
      const newLoginValue = {
        email: loginValue.email,
        password: loginValue.password,
      };
      sign_in(newLoginValue).then((res) => {
        //console.log("res", res);
        alert(res.data.msg);
        localStorage.setItem("id", res.headers.authorization);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("nickname", res.data.data.nickname);
        navigate("/");
      });
    }
  };
  //console.log("onSubmit :", loginValue);

  return (
    <div className={classes.wrap}>
      <Card>
        <section className={classes.container}>
          <header className={classes.header}>
            <button onClick={onClickCloseBtnHandler}>
              <FaTimes size="20px" />
            </button>
            <h3>로그인</h3>
          </header>

          <form onSubmit={onSubmitLoginValueHandler} className={classes.box}>
            <p className={classes.title}>항해비앤비에 오신 것을 환영합니다.</p>
            <Link className={classes.signup_txt} to="/register">
              아직 회원이 아니신가요?
            </Link>

            <div className={classes.input_area}>
              <label
                htmlFor="email"
                className={`${
                  loginValue.isValidEmail ? classes.label : classes.warning
                }`}
              >
                이메일
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={loginValue.email}
                onChange={onChangeInputHandler}
              />
            </div>

            <div className={classes.input_area}>
              <label
                htmlFor="password"
                className={`${
                  loginValue.isValidPassword ? classes.label : classes.warning
                }`}
              >
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={loginValue.password}
                onChange={onChangeInputHandler}
              />
            </div>

            <Button className={classes.login_btn}>로그인</Button>
            <div className={classes.or_txt}>또는</div>
            <div className={classes.simple_login_btn}>
              <button type="button" className={classes.kakao_btn}>
                <img src={kakao} />
                <p>카카오로 로그인하기</p>
              </button>
              <button type="button" className={classes.google_btn}>
                <img src={google} />
                <p>구글로 로그인하기</p>
              </button>
            </div>
          </form>
        </section>
      </Card>
    </div>
  );
};

export default AlertModal;
