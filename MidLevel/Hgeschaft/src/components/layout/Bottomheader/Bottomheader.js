//import liraries
import React from 'react';
import { Container } from 'react-bootstrap'
import Allcategories from './Allcategories'

// create a component
const Bottomheader = () => {
    return (
        <div className="bottom-header shadow-sm"  >
            <Container>

                <Allcategories />

            </Container>
        </div>
    );
};


//make this component available to the app
export default Bottomheader;
