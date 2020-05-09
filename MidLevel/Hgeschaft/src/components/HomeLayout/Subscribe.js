//import liraries
import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';



// create a component
class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe_Wrapper" >
                <Container>
                    <Row className="d-flex justify-content-center align-items-center subscribe_form" >
                        <Col lg={4} xs={12} >
                            <h6 className="p-0 m-0 white--text">SIGN UP FOR NEWSLETTER</h6>

                        </Col>
                        <Col lg={8} xs={12}>
                            <form>
                                <div className="input-group">
                                    <input type="email" className="form-control subscribe_input" placeholder="Enter your email" />
                                    <span className="input-group-btn">
                                    <Button className="sb-quicksearch-btn btn-secondary" type="submit" >
                                      Send 
                                       </Button>
                                    </span>
                                </div>
                            </form>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}



//make this component available to the app
export default Subscribe;
