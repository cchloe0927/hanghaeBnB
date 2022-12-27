import react from "react";
import classes from "./RoomDescription.module.css";

import { BsDoorOpen } from "react-icons/bs";
import { CiMedal } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const RoomDescription = ({ hostName, personMax }) => {
  return (
    <div>
      <div className={classes.titleDiv}>
        <h2>{hostName} 님이 호스팅하는 레지던스 전체</h2>
        <div className={classes.titleRoomInfoDiv}>
          <span>최대 인원 {personMax}명 .</span>
          <span> 침실 1개 .</span>
          <span> 욕실 1개</span>
        </div>
        <hr />
      </div>
      <div className={classes.infoDiv}>
        <div className={classes.selfCheckInGroup}>
          <div className={classes.selfCheckInIcon}>
            <BsDoorOpen />
          </div>
          <div className={classes.selfCheckInTextGroup}>
            <div className={classes.selfCheckInTitle}>셀프 체크인</div>
            <div className={classes.selfCheckInBody}>
              키패드를 이용해 체크인하세요.
            </div>
          </div>
        </div>
        <div className={classes.selfCheckInGroup}>
          <div className={classes.selfCheckInIcon}>
            <CiMedal />
          </div>
          <div className={classes.selfCheckInTextGroup}>
            <div className={classes.selfCheckInTitle}>
              {hostName} 님은 슈퍼호스트입니다
            </div>
            <div className={classes.selfCheckInBody}>
              슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서
              편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
            </div>
          </div>
        </div>
        <div className={classes.selfCheckInGroup}>
          <div className={classes.selfCheckInIcon}>
            <CiLocationOn />
          </div>
          <div className={classes.selfCheckInTextGroup}>
            <div className={classes.selfCheckInTitle}>훌륭한 숙소 위치</div>
            <div className={classes.selfCheckInBody}>
              최근 숙박한 게스트 중 95%가 위치에 별점 5점을 준 숙소입니다.
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RoomDescription;
