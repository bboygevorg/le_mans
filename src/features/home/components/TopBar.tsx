import React from "react";
import * as classes from "../home.module.scss";
import logoMap from "../../../assets/logo/logo.png";

const TopBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoMap}>
        <img style={{ cursor: "pointer" }} src={logoMap} alt="map" />
      </div>
      <div className={classes.info}>
        <h1 className={classes.topName}>Every Winning car of time</h1>
        <h1 className={classes.bottomName}>24 hours of lemans</h1>
      </div>
    </div>
  );
};

export default TopBar;
