import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnModal from "./BtnModal";
import logo from "../../img/logo.svg";
import { FaUserAlt, FaBars } from "react-icons/fa";
import classes from "./Layout.module.css";

const Header = () => {
  const [btnmodal, setBtnModal] = useState(false);

  const onClickBtnModalHandler = () => {
    setBtnModal(true);
  };

  const onCloseBtnHandler = () => {
    setBtnModal(false);
  };

  return (
    <div className={classes.headerContainer}>
      <Link to={"/"} className={classes.logo_btn}>
        <img style={{ objectFit: "cover" }} src={logo} />
      </Link>
      <div className={classes.headerButtonGroup}>
        <div className={classes.right_btn}>
          <p>당신의 공간을 항해비앤비하세요</p>
          <div className={classes.icons}>
            {btnmodal ? (
              <BtnModal onCloseBtnHandler={onCloseBtnHandler} />
            ) : null}
            <button
              className={classes.icons_login}
              onClick={onClickBtnModalHandler}
            >
              <FaBars size="17px" color="#524f4f" />
            </button>
            <Link to={"/mypage"}>
              <button className={classes.icons_my_btn}>
                <FaUserAlt size="18px" color="#524f4f" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
