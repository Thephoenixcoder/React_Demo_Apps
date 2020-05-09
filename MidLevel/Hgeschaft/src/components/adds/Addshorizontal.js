//import liraries
import React from 'react';
import { Link} from 'react-router-dom';
import {Image} from 'react-bootstrap'

// create a component
const Adshorizontal = (props) => {
    const {source} =props
    return (
        <div className="banners">
        <div className="banners-overlay">

        </div>
        <Link to="/" >
            <Image src={source} className="img-fluid banners-img" />
        </Link>
    </div>
    );
};


//make this component available to the app
export default Adshorizontal;
