import react from "react";

import classes from "./TagGroup.module.css";

import { FaCity } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { GiWaveSurfer } from "react-icons/gi";

const TagGroup = () => {
  return (
    <div className={classes.tagGroup}>
      <div className={classes.tag}>
        <span className={classes.tagIcon}>
          <GiParkBench />
        </span>
        <span className={classes.tagTitle}>공원</span>
      </div>
      <div className={classes.tag}>
        <span className={classes.tagIcon}>
          <GiWaveSurfer />
        </span>
        <span className={classes.tagTitle}>오션뷰</span>
      </div>
      <div className={classes.tag}>
        <span className={classes.tagIcon}>
          <FaCity />
        </span>
        <span className={classes.tagTitle}>시티뷰</span>
      </div>
    </div>
  );
};

export default TagGroup;
