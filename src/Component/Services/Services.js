import React from "react";
import serviceStyle from "./Services.module.css";
import Card from "./Card/Card";

function Services() {
  return (
    <>
      <div className={serviceStyle.container} id="service">
        <div className={serviceStyle.main_div}>
          <h1 className={serviceStyle.heading}>Services</h1>
          <p className={serviceStyle.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={serviceStyle.card_container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
