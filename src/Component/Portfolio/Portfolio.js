import React, { useState } from "react";
import portfolioStyle from "./Portfolio.module.css";
import Card from "./Card/Card";
import PortfolioData from "./PortfolioData";

function Portfolio() {

  const [item, setItem] = useState(PortfolioData.filter((elem) =>{
    return elem.category === "All";
  }));

  const filterItem = (categElem) => {
    const updatedItems = PortfolioData.filter((elem) => {
      return elem.category === categElem;
    })
    setItem(updatedItems);
  };

  return (
    <>
      <div className={portfolioStyle.container} id="portfolio" >
        <div className={portfolioStyle.content}>
          <h1 className={portfolioStyle.heading}>Portfolio</h1>
          <p className={portfolioStyle.para}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
          <div className={portfolioStyle.buttons}>
            <button className={portfolioStyle.btn} onClick={() => filterItem("All")}>All</button>
            <button className={portfolioStyle.btn} onClick={() => filterItem("Wordpress")}>Wordpress</button>
            <button className={portfolioStyle.btn} onClick={() => filterItem("Web Design")}>Web Design</button>
            <button className={portfolioStyle.btn} onClick={() => filterItem("Graphic Design")}>Graphic Design</button>
            <button className={portfolioStyle.btn} onClick={() => filterItem("Php")}>Php</button>
            <button className={portfolioStyle.btn} onClick={() => filterItem("Bootstrap")}>Bootstrap</button>
          </div>
        </div>
        <div className={portfolioStyle.portfolio}>
          <Card Data = {item}/>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
