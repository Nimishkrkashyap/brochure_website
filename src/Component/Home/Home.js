import React from "react";
import homeStyle from "./Home.module.css";
import Menu from "../Menu/Menu";

function Home() {
  return (
    <>
      <div className={homeStyle.container}>
        <div className={homeStyle.overlay}>
          <Menu />
          <div className={homeStyle.content}>
            <h4 className={homeStyle.sub_heading}>Creative Digital</h4>
            <h1 className={homeStyle.heading}>Agency</h1>
            <p className={homeStyle.para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
            <button className={homeStyle.btn}>Services</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
