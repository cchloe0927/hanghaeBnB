import { Link } from "react-router-dom";
import classes from "./Layout.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to={"/"} className={classes.headerLink}>
        <h2>로고</h2>
      </Link>
    </div>
  );
};

export default Header;
