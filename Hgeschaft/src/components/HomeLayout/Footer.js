//import liraries
import React from 'react';
import {Container} from 'react-bootstrap'
import Subscribe from '../HomeLayout/Subscribe'
// create a component
const Footer = () => {
    return (
        <footer className="footer mt-4 mb-4">
             <Subscribe/>
            <Container>
                <div className="footer_details ">
                   

                </div>
            </Container>
         
        </footer>
    );
};


//make this component available to the app
export default Footer;
