import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { sign_up } from "../../../core/LoginAPI";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import { FaTimes } from "react-icons/fa";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",

    isValidEmail: true,
    isValidPassword: true,
    isValidPasswordCheck: true,
    isValidNickname: true,
  });

  const onClickCloseBtnHandler = () => {
    navigate("/login");
  };

  const onClickDuplicateCheckHandler = () => {
    const postEmail = {
      email: loginValue.email,
    };
    // if (loginValue.email !== "") {
    //   duplicate_check(postEmail).then((res) => {
    //     alert(res.data.msg);
    //   });
    //   setDuplicateCheck(true);
    // }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    //event.target.value값이 빈 값일 때 loginValue Css 변경
    const isValidList = {
      email: "isValidEmail",
      password: "isValidPassword",
      passwordCheck: "isValidPasswordCheck",
      nickname: "isValidNickname",
    };
    setLoginValue({
      ...loginValue,
      [isValidList[name]]: value ? true : false,
      [name]: value,
    });
  };

  const onSubminLoginValueHandler = (event) => {
    event.preventDefault();
    if (loginValue.email === "") {
      setLoginValue({ ...loginValue, isValidEmail: false });
    } else if (loginValue.password === "") {
      setLoginValue({ ...loginValue, isValidPassword: false });
    } else if (loginValue.passwordCheck === "") {
      setLoginValue({ ...loginValue, isValidPasswordCheck: false });
    } else if (loginValue.nickname === "") {
      setLoginValue({ ...loginValue, isValidNickname: false });
    } else {
      //모든 input이 빈 값이 아니고 duplicateCheck가 true인 경우
      if (duplicateCheck) {
        const newLoginValue = {
          email: loginValue.email,
          password: loginValue.password,
          nickname: loginValue.nickname,
        };
        // sign_up(newLoginValue).then((res) => {
        //   setDuplicateCheck(false);
        //   alert(res.data.msg);
        //   navigate(`/login`);
        // });
      } else {
        alert("이메일 중복 체크해주세요.");
      }
    }
  };

  return (
    <div className={classes.wrap}>
      <Card>
        <section className={classes.container}>
          <header className={classes.header}>
            <button onClick={onClickCloseBtnHandler}>
              <FaTimes size="20px" />
            </button>
            <h3>회원가입</h3>
          </header>

          <form onSubmit={onSubminLoginValueHandler} className={classes.box}>
            <p className={classes.title}>항해비앤비에 오신 것을 환영합니다.</p>

            <div className={`${classes.input_area} ${classes.email}`}>
              <div className={classes.email_box}>
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
                  autoComplete="off"
                  value={loginValue.email}
                  onChange={onChangeInputHandler}
                />
              </div>
              <Button
                type="button"
                className={classes.email_check}
                onClick={onClickDuplicateCheckHandler}
              >
                중복체크
              </Button>
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
                autoComplete="off"
                value={loginValue.password}
                onChange={onChangeInputHandler}
              />
            </div>

            <div className={classes.input_area}>
              <label
                htmlFor="passwordCheck"
                className={`${
                  loginValue.isValidPasswordCheck
                    ? classes.label
                    : classes.warning
                }`}
              >
                비밀번호 재확인
              </label>
              <input
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                autoComplete="off"
                value={loginValue.passwordCheck}
                onChange={onChangeInputHandler}
              />
            </div>

            <div className={classes.input_area}>
              <label
                htmlFor="nickname"
                className={`${
                  loginValue.isValidNickname ? classes.label : classes.warning
                }`}
              >
                닉네임
              </label>
              <input
                id="nickname"
                name="nickname"
                autoComplete="off"
                value={loginValue.nickname}
                onChange={onChangeInputHandler}
              />
            </div>

            <Button className={classes.login_btn}>회원가입</Button>
          </form>
        </section>
      </Card>
    </div>
  );
};

export default SignUp;
