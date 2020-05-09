//import liraris
import React from 'react';

import { Row, Col, Container } from 'react-bootstrap'
import SlicksliderVbanner from './SlicksliderVbanner';
import Signoutlink from './Signoutlink';
import Signinlink from './Signinlink'




// create a component
const Topheader = () => {
    return (
        <div className="top-header shadow-sm">
            <Container>
                <div className="top-header-inner">
                    <Row>
                        <Col sm={12} lg={6} >
                            <SlicksliderVbanner />
                        </Col>
                        <Col lg={6} className="text-right d-sm-none d-xs-none d-md-block">
                            <nav className="navUser">
                                <Signoutlink />
                                <Signinlink />





                            </nav>

                        </Col>

                    </Row>

                </div>
            </Container>
        </div >
    );
};


//make this component available to the app
export default Topheader;
