//import liraries
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Herocarousel from '../layout/Heroslider/Herocarousel';
import Featuresitems from '../layout/Modulebanners/Featuresitems'
import Headerproduct from '../common/Headerproducts'
import Productui from '../Products/Productui'
import Adshorizontal from '../adds/Addshorizontal'
import Footer from '../HomeLayout/Footer'
import Brands from '../Brands/Brands'
// create a component
const Homelayout = () => {
    return (
        <div className="theme_layout">
            <Herocarousel />
            <Featuresitems />
            <Container>
                <Row className="mt-4 mb-4">
                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-ghg2xirqxi/content/site/banner/home3/banner-51.jpg" />
                    </Col>
                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-ghg2xirqxi/content/site/banner/home3/banner-53.jpg" />
                    </Col>

                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-ghg2xirqxi/content/site/banner/home3/banner-52.jpg" />
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={2} className="header_wrapper p-0">
                        <Headerproduct title="Top products" />
                    </Col>

                    <Col md={12} xs={10} className="p-0">
                        <Productui bordercolor="2px solid rgb(80, 108, 240)" />
                    </Col>
                </Row>
                <Row className="mt-4 mb-4">
                    <Col md={6} xs={6}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-ghg2xirqxi/content/site/banner/home1/4.jpg" />
                    </Col>
                    <Col md={6} xs={6}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-ghg2xirqxi/content/site/banner/home1/5.jpg" />
                    </Col>
                </Row>

                <Row>
                    <Col md={12} xs={2} className="header_wrapper p-0">
                        <Headerproduct title="New Products" themecolor="#fe7860" />
                    </Col>
                    <Col md={12} xs={10} className="p-0">
                        <Productui />
                    </Col>
                </Row>

                <Row className="mt-4 mb-4">
                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-o5qtva12q8/content/site/banner/home4/6.jpg" />
                    </Col>
                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-o5qtva12q8/content/site/banner/home4/6.jpg" />

                    </Col>
                    <Col md={4} xs={4}>
                        <Adshorizontal source="https://cdn11.bigcommerce.com/s-o5qtva12q8/content/site/banner/home4/8.jpg" />
                    </Col>

                </Row>
                <Row>
                    <Col md={12} xs={2} className="header_wrapper p-0">
                        <Headerproduct title="Top Brands"  />
                    </Col>
                    <Col md={12} xs={10} className="p-0">
                       <Brands/>
                    </Col>
                </Row>




            </Container>
            <Footer />
        </div>
    );
};



//make this component available to the app
export default Homelayout;
