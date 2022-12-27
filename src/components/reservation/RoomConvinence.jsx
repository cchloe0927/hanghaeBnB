import react from "react";
import classes from "./RoomConvinence.module.css";

import { GiKnifeFork } from "react-icons/gi";
import { BsWifi } from "react-icons/bs";
import { AiOutlineCar } from "react-icons/ai";
import { CiMonitor } from "react-icons/ci";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { MdBalcony } from "react-icons/md";
import { GiHanger } from "react-icons/gi";
import { GiFireExtinguisher } from "react-icons/gi";
import { MdOutlineMicrowave } from "react-icons/md";
import { CgSmartHomeRefrigerator } from "react-icons/cg";

const RoomConvinence = () => {
  return (
    <div>
      <div className={classes.roomConvinenceDiv}>
        <div className={classes.ConvinenceTitle}>
          <h2>숙소 편의시설</h2>
        </div>
        <div className={classes.ConvinenceBody}>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <GiKnifeFork />
            </div>
            <div>주방</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <BsWifi />
            </div>
            <div>무선 인터넷</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <AiOutlineCar />
            </div>
            <div>건물 내 무료 주차</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <CiMonitor />
            </div>
            <div>42인치 HDTV</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <MdOutlineLocalLaundryService />
            </div>
            <div>세탁기</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <BsSnow />
            </div>
            <div>에어컨</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <CiTempHigh />
            </div>
            <div>난방</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <CgSmartHomeRefrigerator />
            </div>
            <div>냉장고</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <MdOutlineMicrowave />
            </div>
            <div>전자레인지</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <MdBalcony />
            </div>
            <div>발코니</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <GiFireExtinguisher />
            </div>
            <div>소화기</div>
          </div>
          <div className={classes.ConvinenceIconTextGroup}>
            <div className={classes.ConvinenceIcon}>
              <GiHanger />
            </div>
            <div>옷걸이</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomConvinence;
