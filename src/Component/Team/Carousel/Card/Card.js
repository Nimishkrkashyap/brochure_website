import React from "react";
import cardStyle from "./Card.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Card(props) {
  return (
    <>
      <div className={cardStyle.container}>
        <div className={cardStyle.left}>
          <img src={props.imgsrc} alt="img" />
        </div>
        <div className={cardStyle.right}>
          <h1 className={cardStyle.heading}>{props.Name}</h1>
          <h3 className={cardStyle.sub_heading}>{props.Designation}</h3>
          <p className={cardStyle.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className={cardStyle.icons}>
            <div className={cardStyle.icon_div}>
              <FaTwitter className={cardStyle.icon} />
            </div>

            <div className={cardStyle.icon_div}>
              <FaFacebookF className={cardStyle.icon} />
            </div>

            <div className={cardStyle.icon_div}>
              <FaLinkedinIn className={cardStyle.icon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
