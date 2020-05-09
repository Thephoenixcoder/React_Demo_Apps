//import liraries
import React, { Component } from 'react';
import Slider from "react-slick";
import {Container,Row,Col,Image,Button} from 'react-bootstrap'

// create a component
class Herocarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: true,
            autoplay: true
            
        };

        return (
            <div className="hero_carousel" >
                <Slider {...settings}>
                    <div className="background_carousel">
                        <Container>
                            <Row className="justify-content-center align-items-center carousel_wrapper">
                                <Col lg={6} sm={6}>
                                    <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" className="img-fluid carousel_img"/>
                                </Col>
                                <Col lg={6} sm={6}>
                                <div className="carousel_title">
                                    <h4>SamSung 23UC97-S 29"(21:9) FHD IPS LED 2560X1080</h4>
                                    </div>
                                  <Button className="mt-3 mb-3   btn btn-primary carousel_btn">Buy Now</Button>
                                </Col>
                            </Row>

                        </Container>
                            
                       
                        
                    </div>
                    <div className="background_carousel">
                    <Container>
                            <Row className="justify-content-center align-items-center carousel_wrapper">
                                <Col lg={6} sm={6}>
                                    <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/118/427/13__44023__66435.1522343841.jpg?c=2&imbypass=on" className="img-fluid carousel_img"/>
                                </Col>
                                <Col lg={6} sm={6}>
                                <div className="carousel_title">
                                    <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h4>
                                    </div>
                                  <Button className="mt-3 mb-3   btn btn-primary carousel_btn">Buy Now</Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                    <div className="background_carousel">
                    <Container>
                            <Row className="justify-content-center align-items-center carousel_wrapper">
                                <Col lg={6} sm={6}>
                                    <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/1280x1280/products/114/416/37__46081__22046.1522343838.jpg?c=2&imbypass=on" className="img-fluid carousel_img"/>
                                </Col>
                                <Col lg={6} sm={6}>
                                <div className="carousel_title">
                                    <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h4>
                                    </div>
                                  <Button className="mt-3 mb-3  btn btn-primary carousel_btn">Buy Now</Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                    <div className="background_carousel">
                    <Container>
                            <Row className="justify-content-center align-items-center carousel_wrapper">
                                <Col lg={6} sm={6}>
                                    <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/135/468/63__04614.1520036421.1280.1280__97449__17761.1522343851.jpg?c=2&imbypass=on" className="img-fluid carousel_img"/>
                                </Col>
                                <Col lg={6} sm={6}>
                                <div className="carousel_title">
                                    <h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h4>
                                    </div>
                                  <Button className="mt-3 mb-3  btn btn-primary carousel_btn">Buy Now</Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                   
                </Slider>
            </div>
        );
    }
}



//make this component available to the app
export default Herocarousel;
