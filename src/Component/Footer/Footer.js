import React from "react";
import footerStyle from "./Footer.module.css";
import logo from "../img/footer-logo.png";
import {
  FaTwitter,
  FaFacebookF,
  FaBehance,
  FaPinterest,
  FaGoogle,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={footerStyle.container}>
        <div className={footerStyle.overlay}>
          <img src={logo} alt="logo" className={footerStyle.logo} />
          <p className={footerStyle.para}>
            logo-footerLorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className={footerStyle.icons}>

            <div className={footerStyle.icon_div}>
              <FaTwitter className={footerStyle.icon} />
            </div>

            <div className={footerStyle.icon_div}>
              <FaFacebookF className={footerStyle.icon} />
            </div>

            <div className={footerStyle.icon_div}>
              <FaBehance className={footerStyle.icon} />
            </div>

            <div className={footerStyle.icon_div}>
              <FaPinterest className={footerStyle.icon} />
            </div>

            <div className={footerStyle.icon_div}>
              <FaGoogle className={footerStyle.icon} />
            </div>
          </div>

          <p className={footerStyle.copyright}>Copyright © xBe 2021 Created By <span className={footerStyle.spn}>Nimish Kumar</span>
</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
