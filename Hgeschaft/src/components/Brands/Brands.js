//import liraries
import React, { Component } from 'react';
import Slickslider from '../common/Slickslider'
import {Image} from 'react-bootstrap'

// create a component
class Brands extends Component {
    render() {
        return (
            <ul className="brands_list p-0" >
                <Slickslider>
                    <li className="brand_wrapper d-flex justify-content-center align-items-center">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" className="img-fluid"></Image>
                        
                    </li>
                    <li className="brand_wrapper d-flex justify-content-center align-items-center">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" className="img-fluid"></Image>
                        
                    </li>

                    <li className="brand_wrapper d-flex justify-content-center align-items-center">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png" className="img-fluid"></Image>
                        
                    </li>
                  
                </Slickslider>

            </ul>
        );
    }
}



//make this component available to the app
export default Brands;
