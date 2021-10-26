import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../img/clients/airbnb-logo.png";
import img2 from "../img/clients/amazon-logo.png";
import img3 from "../img/clients/audio-logo.png";
import img4 from "../img/clients/bootstrap-logo.png";
import img5 from "../img/clients/envato-logo.png";
import img6 from "../img/clients/geforce-logo.png";
import img7 from "../img/clients/river-logo.png";
import img8 from "../img/clients/talenthouse-logo.png";
import img9 from "../img/clients/tmobile-logo.png";
import img10 from "../img/clients/uber-logo.png";
import img11 from "../img/clients/valve-logo.png";
import img12 from "../img/clients/woo-logo.png";
import clientStyle from "./Clients.module.css";

function Clients() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          slidesPerRow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          rows: 3,
          slidesPerRow: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className={clientStyle.container} id="clients">
      <Slider {...settings} className={clientStyle.slide}>
        <div>
          <img src={img1} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img2} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img3} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img4} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img5} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img6} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img7} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img8} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img9} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img10} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img11} alt="im" className={clientStyle.image}/>
        </div>

        <div>
          <img src={img12} alt="im" className={clientStyle.image}/>
        </div>
      </Slider>
      </div>
    </>
  );
}

export default Clients;
