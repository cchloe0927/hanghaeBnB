import react from "react";

import classes from "./CommonDescrition.module.css";

const CommonDescrition = () => {
  return (
    <div>
      <div className={classes.CommonDescrition}>
        <div className={classes.CommonDescritionTitle}>
          <span style={{ color: "var(--color-main)" }}>에어</span>
          <span>커버</span>
        </div>
        <div className={classes.CommonText}>
          모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
          경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
          포함됩니다.
        </div>
        <span className={classes.CommonTextMore}>더 알아보기</span>
      </div>
      <hr />
    </div>
  );
};

export default CommonDescrition;
