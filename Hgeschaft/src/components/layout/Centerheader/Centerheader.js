//import liraris
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search'


const Centerheader = () => {
    return (
        <div className="center-header">
            <Container>

                <Row className="justify-content-between align-items-center">
                    <Col lg={3} md={6} className="logo-container col-4">
                        <Link to="/" className="d-block header-logo">
                            <div className="header-logo-image-container">
                                <Image src="https://i.ibb.co/MNLTKTX/logo.png" alt="logo" className="img-fluid" />
                            </div>
                        </Link>
                    </Col>
                    <Col lg={6} md={6} className="col-8 header-bottom__search">
                        <Search />
                    </Col>
                    <Col lg={3} md={3} className="col-4 navbar-container d-sm-none d-md-block mt-2 mb-2">
                        <div className="navbar-phone d-none d-sm-block">
                            <svg id="icon-headset_mic" viewBox="0 0 24 24" width="40" height="40">
                                <path d="M12 0.984c4.969 0 9 4.031 9 9v10.031c0 1.641-1.359 3-3 3h-6v-2.016h6.984v-0.984h-3.984v-8.016h3.984v-2.016c0-3.891-3.094-6.984-6.984-6.984s-6.984 3.094-6.984 6.984v2.016h3.984v8.016h-3c-1.641 0-3-1.359-3-3v-7.031c0-4.969 4.031-9 9-9z"></path>
                            </svg>
                            <div className="navbar-phone__inner">
                                <strong>Call us now : </strong>
                                <small className="phone">(011+) 4567 421</small>
                                <br></br>
                                <span> Email :  </span>
                                <a href="mailto:contact@hazem.com" className="navlink"> <small> contact@hazem.com</small></a>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    )
}

export default Centerheader