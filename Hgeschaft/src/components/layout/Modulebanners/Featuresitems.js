//import liraries
import React from 'react';
import { Container } from 'react-bootstrap';
import { faGift, faTruck, faPhoneAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// create a component
const Featuresitems = () => {
    return (
        <Container>
            <div className="feautures_Wrapper" >
                <ul className="features_items p-0">
                    <li>
                        <div className="fitem">
                            <div className="fitem_details">
                                <FontAwesomeIcon icon={faGift} />
                                <h6>
                                    FREE GIFT BOX<small>& gift note</small></h6>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="fitem">
                            <div className="fitem_details">
                                <FontAwesomeIcon icon={faTruck} />
                                <h6>FREE DELIVERY </h6>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="fitem">
                            <div className="fitem_details">
                                <FontAwesomeIcon icon={faPhoneAlt} />
                                <h6>Contact with Us </h6>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="fitem">
                            <div className="fitem_details">
                                <FontAwesomeIcon icon={faUsers} />
                                <h6>
                                    LOYALTY </h6>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </Container>
    );
};



//make this component available to the app
export default Featuresitems;
