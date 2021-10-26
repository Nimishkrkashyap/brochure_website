import React from "react";
import cardStyle from "./Card.module.css";
import { GoPlus } from "react-icons/go";


function Card({Data}) {
  return (
    <>
      <div className={cardStyle.imgdata}>

      {Data.map((val) =>{
        return(
          <div className={cardStyle.img_div}>
          <img src={val.img} alt="img" />
          <div className={cardStyle.txt}>
            <h1 className={cardStyle.heading}>{val.heading}</h1>
            <p className={cardStyle.para}>{val.para}</p>
            <GoPlus className={cardStyle.icon} />
          </div>
        </div>
        )
      })}
      </div>
    </>
  );
}

export default Card;
