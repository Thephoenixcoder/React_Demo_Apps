//import liraries
import React from 'react';
import { Image ,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slickslider from '../common/Slickslider'
import StarRating from '../common/Starrating'

// create a component
const Productui = (props) => {
    // product :  id   -   name - numberrate - prod image
    
    return (

      

            <ul className="product_list p-0" >
                <Slickslider>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/1280x1280/products/114/416/37__46081__22046.1522343838.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/135/468/63__04614.1520036421.1280.1280__97449__17761.1522343851.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                   
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/117/426/17__35662__40989.1522343840.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/1280x1280/products/114/416/37__46081__22046.1522343838.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/135/468/63__04614.1520036421.1280.1280__97449__17761.1522343851.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/134/467/57__19304.1520036381.1280.1280__20862__03444.1522343850.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/116/421/19__95246__55597.1522343839.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/1280x1280/products/114/416/37__46081__22046.1522343838.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/135/468/63__04614.1520036421.1280.1280__97449__17761.1522343851.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/133/466/2__94135.1520036143.1280.1280__25785__70130.1522343850.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                   
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/117/426/17__35662__40989.1522343840.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/1280x1280/products/114/416/37__46081__22046.1522343838.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/500x659/products/135/468/63__04614.1520036421.1280.1280__97449__17761.1522343851.jpg?c=2&imbypass=on" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/134/467/57__19304.1520036381.1280.1280__20862__03444.1522343850.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                    <li>
                        <div className="card product_card">
                            
                            <div className="card_img_wrapper">
                                <div className="offer">40%</div>
                               
                                <Image src="https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/116/421/19__95246__55597.1522343839.jpg?c=2" alt="img" />
                            </div>
                            <div className="card_detail">
                                <h4 className="card_title">
                                    <Link to="" className="navlink productlink">
                                        product one top
                                    </Link>
                                </h4>
                                <StarRating rating={4} changeRating={() => this.rating()} />
                                <div className="price">
                                    <span>$120 </span> <span className="offer_price">$150</span>
                                </div>

                                <Button className="addcart mt-3 mb-3" size="sm">
                                    Add to cart
                                </Button>


                            </div>

                        </div>
                    </li>
                   


                </Slickslider>

            </ul>



     


    );
};


//make this component available to the app
export default Productui;
