import React from "react";
import cardStyle from "./Card.module.css";

function Card() {
  return (
    <>
      <div className={cardStyle.container}>
        <div className={cardStyle.pricing_top_box}>
          <h1 className={cardStyle.heading}>Basic</h1>
          <h1 className={cardStyle.sub_heading}>$39</h1>
        </div>
        <div className={cardStyle.list}>
          <ul>
            <li>Free Download</li>
            <li>1000+ Softwear</li>
            <li>Full Access</li>
            <li>Free Update</li>
            <li>Live Support</li>
          </ul>
        </div>
        <div className={cardStyle.btn}>
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Card;
