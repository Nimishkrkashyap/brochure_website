import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonialStyle from "./Testimonials.module.css";
import TestimonialData from "./TestimonialData";

function Testimonials() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className={testimonialStyle.container} id="testimonials">
        <div className={testimonialStyle.content}>
          <h1 className={testimonialStyle.heading}>Testimonials</h1>
          <p className={testimonialStyle.para}>
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className={testimonialStyle.carouse}>
          <Slider {...settings} className={testimonialStyle.slide}>
            {TestimonialData.map((val) => {
              return (
                <div className={testimonialStyle.card}>
                  <div className={testimonialStyle.sub_card}>
                    <div className={testimonialStyle.cont}>
                      <img
                        src={val.img}
                        alt="im"
                        className={testimonialStyle.image}
                      />
                      <p className={testimonialStyle.card_para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>
                    <h3 className={testimonialStyle.sub_heading}>
                      <span>{val.name},</span> CEO Talenthouse
                    </h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
