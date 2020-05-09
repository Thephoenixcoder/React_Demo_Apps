import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
export default class SlicksliderVbanner extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            arrows: false,
            mobileFirst: true,
            autoplay: true

        };
        return (
            <div className="sb-pormotion sb-pormotion--pormotion ">

                <div className="d-lg-block text-sm-center text-md-left">
                    <Slider {...settings}>
                        <div className="sb-pormotion--text">
                            <Link to="" className="navlink">Free 3 day delivery and free returns within the US</Link>
                        </div>
                        <div className="sb-pormotion--text">
                            <Link to="" className="navlink"><strong>20% Discount</strong> on Selected Items</Link>
                        </div>
                        <div className="sb-pormotion--text">
                            <Link to="" className="navlink"><strong>Free Shipping</strong> on all Orders. No Minimum Purchases Required*</Link>
                        </div>
                        <div className="sb-pormotion--text">
                            <Link to="" className="navlink">Free 3 day delivery and free returns within the US</Link>
                        </div>

                    </Slider>
                </div>
            </div>
        )
    }
}
