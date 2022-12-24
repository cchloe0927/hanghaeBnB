import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import kakao from "../../../img/icon_kakao.png";
import google from "../../../img/icon_google.png";
import { FaTimes } from "react-icons/fa";
import classes from "./SignIn.module.css";

const AlertModal = () => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState({
    email: "",
    pw: "",

    isValidEmail: true,
    isValidPW: true,
  });

  //카카오 인가 코드 요청
  //   const onClickKakaoHandler = async (e) => {
  //     window.location.href = KAKAO_AUTH_URL;
  //   };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    if (name === "email" && value) {
      setLoginValue({ ...loginValue, isValidEmail: true, [name]: value });
    } else if (name === "pw" && value) {
      setLoginValue({ ...loginValue, isValidPW: true, [name]: value });
    } else if (name === "email" && !value) {
      setLoginValue({ ...loginValue, isValidEmail: false, [name]: value });
    } else {
      setLoginValue({ ...loginValue, isValidPW: false, [name]: value });
    }
  };
  //console.log("onChange :", loginValue);

  const onSubmitLoginValueHandler = (event) => {
    event.preventDefault();
    if (loginValue.email === "") {
      setLoginValue({ ...loginValue, isValidEmail: false });
    } else if (loginValue.pw === "") {
      setLoginValue({ ...loginValue, isValidPW: false });
    } else {
      const newLoginValue = {
        email: loginValue.email,
        password: loginValue.pw,
      };
      //   sign_in(newLoginValue).then((res) => {
      //     //console.log("res", res);
      //     alert(res.data.msg);
      //     localStorage.setItem("id", res.headers.authorization);
      //     localStorage.setItem("nickname", res.data.data.nickname);
      //     localStorage.setItem("generation", res.data.data.generation);
      //     navigate("/");
      //   });
    }
  };
  //console.log("onSubmit :", loginValue);

  return (
    <div className={classes.wrap}>
      <Card>
        <section className={classes.container}>
          <header className={classes.header}>
            <button>
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
                Email
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
                htmlFor="pw"
                className={`${
                  loginValue.isValidPW ? classes.label : classes.warning
                }`}
              >
                Password
              </label>
              <input
                id="pw"
                name="pw"
                type="password"
                value={loginValue.pw}
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
