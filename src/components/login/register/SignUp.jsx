import React, { useState, useEffect } from "react";
import classes from "./SignUp.module.css";
import { FaTimes } from "react-icons/fa";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import { useNavigate } from "react-router-dom";
import { sign_up, duplicate_check } from "../../../core/AxiosAPI";

const SignUp = () => {
  const navigate = useNavigate();

  //회원가입 상태값
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nickname, setNickname] = useState("");
  //유효성 검사
  const [duplicateCheck, setDuplicateCheck] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordCheck, setIsPasswordCheck] = useState(true);
  const [isNickname, setIsNickname] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      //console.log("mount");
      setIsPasswordCheck(passwordCheck === password);
    }, 100);
    // return () => {
    //   clearTimeout(timer);
    // };
  }, [passwordCheck, password]);

  //클로즈 버튼
  const onClickCloseBtnHandler = () => {
    navigate("/login");
  };

  //데이터 전송
  const onSubminLoginValueHandler = (event) => {
    event.preventDefault();
    const newLoginValue = {
      email: email,
      password: password,
      nickname: nickname,
    };
    if (
      email !== "" &&
      password !== "" &&
      passwordCheck !== "" &&
      nickname !== "" &&
      duplicateCheck === true
    ) {
      sign_up(newLoginValue).then((res) => {
        alert(res.data.msg);
        setDuplicateCheck(false);
        navigate("/login");
      });
    }
  };

  //이메일 중복체크
  const onClickDuplicateCheckHandler = () => {
    const emailDuplicateCheck = {
      email: email,
    };
    if (email !== "") {
      duplicate_check(emailDuplicateCheck).then((res) => {
        alert(res.data.msg);
      });
      setDuplicateCheck(true);
    }
  };
  //console.log("duplicateCheck :", duplicateCheck);

  //이메일
  const onChangEmailHandler = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    if (emailValue === "") {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  //비밀번호
  const onChangPasswordHandler = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    if (passwordValue === "") {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  //비밀번호 재확인
  const onChangePasswordCheckHandler = (event) => {
    const passwordCheckValue = event.target.value;
    setPasswordCheck(passwordCheckValue);
    //값 변화를 통해서 비밀번호 = 비밀번호 재확인을 비교해야하는데 useState는 비동기적이기 떄문에 한박자 느림!
    //따라서 useEffect를 통해서 값 변화를 감지하고 다시 재 렌더링 해줌!
  };

  //닉네임
  const onChangeNicknameHandler = (event) => {
    const nicknameValue = event.target.value;
    setNickname(nicknameValue);
    if (nicknameValue === "") {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  //리턴
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
                  className={`${isEmail ? classes.label : classes.warning}`}
                >
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="off"
                  value={email}
                  onChange={onChangEmailHandler}
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
                className={`${isPassword ? classes.label : classes.warning}`}
              >
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                value={password}
                onChange={onChangPasswordHandler}
              />
            </div>

            <div className={classes.input_area}>
              <label
                htmlFor="passwordCheck"
                className={`${
                  isPasswordCheck ? classes.label : classes.warning
                }`}
              >
                비밀번호 재확인
              </label>
              <input
                id="passwordCheck"
                name="passwordCheck"
                type="password"
                autoComplete="off"
                value={passwordCheck}
                onChange={onChangePasswordCheckHandler}
              />
            </div>

            <div className={classes.input_area}>
              <label
                htmlFor="nickname"
                className={`${isNickname ? classes.label : classes.warning}`}
              >
                닉네임
              </label>
              <input
                id="nickname"
                name="nickname"
                autoComplete="off"
                value={nickname}
                onChange={onChangeNicknameHandler}
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
