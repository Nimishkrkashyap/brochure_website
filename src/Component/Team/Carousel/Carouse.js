import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card/Card";
import CarouselData from "./CarouselData";
import carouselStyle from "./Carousel.module.css";

function Carouse() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className={carouselStyle.container}>
        <Slider {...settings} className={carouselStyle.slider}>
          {CarouselData.map((val, index) => {
            return <Card 
                imgsrc={val.img}
                Name={val.Name}
                Designation={val.Designation}
            />;
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carouse;
