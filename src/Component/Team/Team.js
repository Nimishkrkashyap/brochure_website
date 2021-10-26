import React from "react";
import teamStyle from "./Team.module.css";
import Carousel from "./Carousel/Carouse";

function Team() {
  return (
    <>
      <div className={teamStyle.container} id="team">
        <div className={teamStyle.content}>
          <h1 className={teamStyle.heading}>Team</h1>
          <p className={teamStyle.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={teamStyle.carousel}>
          <Carousel />
        </div>
      </div>
    </>
  );
}

export default Team;
