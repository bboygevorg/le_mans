import TopBar from "@features/home/components/TopBar";
import React from "react";
import * as classes from "@features/home/home.module.scss";
import BottomBar from "@features/home/components/BottomBar";

const HomePage: React.FC = () => {
  return (
    <>
      <div className={classes.mainWrapper}>
        {" "}
        <TopBar />
        <BottomBar />
      </div>
    </>
  );
};

export default HomePage;
