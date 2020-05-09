import React, { Component } from "react";
import Slider from "react-slick";

export default class Slickslider extends Component {
  render() {
    const settings = {
      dots: false,
     
      infinite: true,
      speed: 500,
      slidesToScroll: 5,
      slidesToShow:5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} className="mb-4">
          {this.props.children}
        </Slider>
      </div>
    );
  }
}