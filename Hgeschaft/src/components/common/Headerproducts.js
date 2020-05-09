//import liraries
import React from 'react';



// create a components
const Headerproduct = (props) => {
    const { title } = props
    return (



        <div className="product-heading d-flex mt-4 mb-4">
            <h2 className="product_title" >
                {title}
                <ul id="flip" className="p-0 mt-2 mb-2">
                   <li><p>Laptops</p></li>
                   <li><p>Tablets</p></li>
                   <li><p>Mp3 Players</p></li>
                </ul>
            </h2>
        </div>



    );
};


//make this component available to the app
export default Headerproduct;
