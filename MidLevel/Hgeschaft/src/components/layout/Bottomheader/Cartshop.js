//import liraries
import React, { Component } from 'react';
import { Badge,  Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create a component
class CartShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2
        };
    }
    componentDidMount() {

    }
    render() {

        return (
            <div className="cart_icon_wrapper  d-flex justify-content-center align-items-center" >
                <Link to="/" className="navlink d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <Badge variant="primary" className="cart_badge_count d-flex justify-content-center align-items-center">{this.state.count}</Badge>
                <div className="cart_Shop_contain " id="cart_Shop_contain">
                    <div className="preview_cart">
                        <ul className="previewCartList p-0">
                            <li className="previewCartItem text-left">
                                <div className="previewCartItem-image">
                                    <img className="lazyautosizes lazyloaded" data-sizes="auto" src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/100x100/products/127/427/2__54826.1524064736.jpg?c=2" data-src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/100x100/products/127/427/2__54826.1524064736.jpg?c=2" alt="Landjaeger shankle pork tempus turpis" title="Landjaeger shankle pork tempus turpis" sizes="50px" />
                                </div>

                                <div className="previewCartItem-content">
                                    <span className="previewCartItem-brand">
                                        Common Good
                                    </span>

                                    <h6 className="previewCartItem-name ">
                                        <Link to="/" className="navlink" alt="Landjaeger shankle pork tempus turpis" title="Landjaeger shankle pork tempus turpis">Landjaeger shankle pork tempus turpis</Link>
                                    </h6>

                                    <span className="previewCartItem-price">
                                        $400.00
                                    </span>
                                </div>
                            </li>

                            <li className="previewCartItem text-left">
                                <div className="previewCartItem-image">
                                    <img className="lazyautosizes lazyloaded" data-sizes="auto" src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/100x100/products/127/427/2__54826.1524064736.jpg?c=2" data-src="https://cdn11.bigcommerce.com/s-o5qtva12q8/images/stencil/100x100/products/127/427/2__54826.1524064736.jpg?c=2" alt="Landjaeger shankle pork tempus turpis" title="Landjaeger shankle pork tempus turpis" sizes="50px" />
                                </div>

                                <div className="previewCartItem-content">
                                    <span className="previewCartItem-brand">
                                        Common Good
                                    </span>

                                    <h6 className="previewCartItem-name ">
                                        <Link to="/" className="navlink" alt="Landjaeger shankle pork tempus turpis" title="Landjaeger shankle pork tempus turpis">Landjaeger shankle pork tempus turpis</Link>
                                    </h6>

                                    <span className="previewCartItem-price">
                                        $400.00
                                     </span>
                                </div>
                            </li>


                        </ul>
                        <Row className="d-flex justify-content-center align-items-center mt-2 mb-2 text-center">
                            <Col lg={6}>
                                <Button variant="primary" className="full--width">Check Out</Button>
                            </Col>
                            <Col lg={6}>
                                <Button variant="primary" className="btn-secondary full--width">View Cart</Button>
                            </Col>
                        </Row>
                    </div>

                </div>
            </div>

        );
    }
}



//make this component available to the app
export default CartShop
