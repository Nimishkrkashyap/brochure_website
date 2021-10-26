import React, { useState } from "react";
import themeStyle from "./ThemeSwitcher.module.css";
import setting from '../img/options.png'

function ThemeSwitcher({Menu}) {
  const [active, setActive] = useState(false);
  const main_container = active ? themeStyle.out_container : themeStyle.in_container;
  return (
    <>
      <div className={main_container}>
        <div className={themeStyle.main}>
        <img src={setting} alt="theme" className={themeStyle.setting} onClick={() => setActive(!active)}/>
          <h2 className={themeStyle.heading}>Theme color Selector</h2>
        </div>


        <div className={themeStyle.theme_container}>
          <div className={themeStyle.box}>
            <div className={themeStyle.gradient1} onClick={() => Menu('gradient1')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient2} onClick={() => Menu('gradient2')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient3} onClick={() => Menu('gradient3')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient4} onClick={() => Menu('gradient4')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient5} onClick={() => Menu('gradient5')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient6} onClick={() => Menu('gradient6')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient7} onClick={() => Menu('gradient7')}></div>
          </div>

          <div className={themeStyle.box}>
            <div className={themeStyle.gradient8} onClick={() => Menu('gradient8')}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeSwitcher;
