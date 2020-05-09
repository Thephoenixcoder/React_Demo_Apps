import React, { Component } from 'react';
import { Col, Row, Badge, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faLaptop,  faMobileAlt, faHeadphones, faChevronRight,faChartLine,faBorderAll,faBuilding ,faStar,faDonate,faCubes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartShop from './Cartshop'



export default class Allcategories extends Component {
    componentDidMount() {

    }
    render() {
        return (

            <div className="megamenu-wrapper">

                <ul className="mega-dropdown-menu">
                    <li className="drop-down"><Link to="/" className="navlink  text-truncate"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-right" className="svg-inline--fa fa-align-left fa-w-16 icon-size" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg> <strong> All Categories </strong> <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-down" className="svg-inline--fa d-sm-none d-lg-block d-md-none fa-arrow-alt-circle-down fa-w-16 float-right mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"></path></svg></Link>

                        <ul className="drop-down-ul animated fadeIn  drop-down-style shadow-sm">
                            <li className="flyout-right">
                                <Link to="/" className="navlink">
                                    <FontAwesomeIcon icon={faLaptop} className="drop-down-icon" />  Laptops <span className="float-right"> <FontAwesomeIcon icon={faChevronRight} className="drop-down-icon" /> </span>
                                </Link>
                                <ul className="animated fadeIn  p-0  drop-down-style shadow-sm">
                                    <Row className="drop-down-wrapper">
                                        <Col lg={9}>
                                            <Row>
                                                <Col lg={4} className="col">
                                                    <h5 className="drop-down-title"> <FontAwesomeIcon icon={faChartLine} className="mr-1"/> Best Laptops</h5>
                                                    <ul className="drop-down-list mt-2 mb-2">
                                                        <li>
                                                            <Link to="#" className="navlink" >Best Overall</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >ChromeBooks</Link>
                                                        </li>

                                                        <li>
                                                            <Link to="#" className="navlink" >Ultra books</Link>
                                                        </li>

                                                        <li>
                                                            <Link to="#" className="navlink" >Vr Ready</Link>
                                                        </li>


                                                    </ul>

                                                </Col>
                                                <Col lg={4} className="col">
                                                    <h5 className="drop-down-title"><FontAwesomeIcon icon={faBorderAll} className="mr-1"/> By Usage</h5>
                                                    <ul className="drop-down-list mt-2 mb-2">
                                                        <li>
                                                            <Link to="#" className="navlink" >Gaming</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Colleges</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Business</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Video Editing</Link>
                                                        </li>



                                                    </ul>

                                                </Col>
                                                <Col lg={4} className="col">
                                                    <h5 className="drop-down-title"><FontAwesomeIcon icon={faBuilding} className="mr-1"/> By Brand</h5>
                                                    <ul className="drop-down-list mt-2 mb-2">
                                                        <li>
                                                            <Link to="#" className="navlink" >Acer Laptops</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Apple Laptops</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Asus Laptops</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Dell Laptops</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >HP Laptops </Link> 
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Lenovo Laptops</Link>
                                                        </li>



                                                    </ul>

                                                </Col>
                                                <Col lg={4} className="col">
                                                    <h5 className="drop-down-title"><FontAwesomeIcon icon={faStar} className="mr-1"/>Top Reviews</h5>
                                                    <ul className="drop-down-list mt-2 mb-2">
                                                        <li>
                                                            <Link to="#" className="navlink" >MacBook Pro 13</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Dell XPS 13</Link>
                                                        </li>

                                                        <li>
                                                            <Link to="#" className="navlink" >Dell XPS 15</Link>
                                                        </li>


                                                    </ul>

                                                </Col>
                                                <Col lg={4} className="col">
                                                    <h5 className="drop-down-title"> <FontAwesomeIcon icon={faDonate} className="mr-1"/> Budget Picks</h5>
                                                    <ul className="drop-down-list mt-2 mb-2">
                                                        <li>
                                                            <Link to="#" className="navlink" >Cheap Hard Drives</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >Cheap Mice</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="navlink" >prod03</Link>
                                                        </li>



                                                    </ul>

                                                </Col>
                                               
                                            </Row>
                                        </Col>
                                        <Col lg={3}>
                                            <div className="banners">
                                                <div className="banners-overlay">

                                                </div>
                                                <Link to="/">
                                                    <Image src="https://i.ibb.co/nMGKLWY/8.png" className="img-fluid banners-img" />
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </ul>
                            </li>
                            <li className="flyout-right">
                                <Link to="/" className="navlink"><FontAwesomeIcon icon={faMobileAlt} className="drop-down-icon" />  Tablets  <span className="float-right"> <FontAwesomeIcon icon={faChevronRight} className="drop-down-icon" /> </span></Link>
                                <ul className="animated fadeIn dropdown-style ">
                                    <ul className="animated fadeIn  p-0  drop-down-style shadow-sm">
                                        <Row className="row drop-down-wrapper">
                                            <Col lg={4} className="col">
                                                <h5 className="drop-down-title"><FontAwesomeIcon icon={faChartLine} className="mr-1"/> Best Tablets</h5>
                                                <ul className="drop-down-list mt-2 mb-2">
                                                    <li>
                                                        <Link to="#" className="navlink" >Best Overall</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >2-in-1s</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Kids Tablets</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Longest Battery</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Budget Tablets</Link>
                                                    </li>
                                                </ul>

                                            </Col>
                                            <Col lg={4} className="col">
                                                <h5 className="drop-down-title"><FontAwesomeIcon icon={faCubes} className="mr-1"/> Apps & Extras</h5>
                                                <ul className="drop-down-list mt-3">
                                                    <li>
                                                        <Link to="#" className="navlink" >Must-Have Accessories</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Kids Tablet Cases</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >iPad Apps</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Apple Pencil Apps</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Amazon Fire Apps</Link>
                                                    </li>



                                                </ul>

                                            </Col>
                                            <Col lg={4} className="col">
                                                <h5 className="drop-down-title"><FontAwesomeIcon icon={faStar} className="mr-1"/> Top Reviews</h5>
                                                <ul className="drop-down-list mt-3">
                                                    <li>
                                                        <Link to="#" className="navlink" >Samsung Galaxy Tab S4</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Lenovo Tab 4 10"</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Apple iPad 9.7"</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#" className="navlink" >Amazon Fire HD 8 Kids</Link>
                                                    </li>
                                                </ul>

                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col lg={12} className="col">
                                                <div className="banners">
                                                    <div className="banners-overlay">

                                                    </div>
                                                    <Link to="/" className="mt-3">
                                                        <Image src="https://i.ibb.co/DbJvDns/9.jpg" className="img-fluid banners-img" />
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>

                                    </ul>
                                </ul>
                            </li>
                     
                            <li><Link to="/" className="navlink"><FontAwesomeIcon icon={faHeadphones} className="drop-down-icon" /> Mp3 Players</Link></li>

                        </ul>
                    </li>
                    <li><Link to="/" className="navlink"> Home</Link></li>
                    <li className="link-with-badge">
                        <Badge variant="primary" className="link-with-badge__top--deal">Top Deal</Badge>
                        <Link to="/" className="navlink "><i className="fa fa-briefcase"></i> Top Deal</Link>


                    </li>
                    <li className="mega-drop-down ">
                        <div className="link-with-badge">
                            <Badge variant="primary" className="link-with-badge__hot--deal">Hot Offer</Badge>
                        </div>

                        <Link to="/" className="navlink"><i className="fa fa-list"></i>Hot offers</Link>
                        <div className="animated fadeIn mega-menu">
                            <div className="mega-menu-wrap">
                                <Row className=" shadow-sm">
                                    <Col lg={4} className="col">
                                        <h4 className="row mega-title">LapTops</h4>
                                        <ul className=" m-0 p-0">
                                            <li><Link to="/" className="navlink">prod01</Link></li>
                                            <li><Link to="/" className="navlink">prod02</Link></li>
                                            <li><Link to="/" className="navlink">prod03</Link></li>
                                            <li><Link to="/" className="navlink">prod04</Link></li>
                                            <li><Link to="/" className="navlink">prod05</Link></li>
                                            <li><Link to="/" className="navlink">prod06</Link></li>

                                        </ul>
                                    </Col>
                                    <Col lg={4} className="col">
                                        <h4 className="row mega-title">Tablets</h4>
                                        <ul className=" m-0 p-0">
                                            <li><Link to="/" className="navlink">prod01</Link></li>
                                            <li><Link to="/" className="navlink">prod02</Link></li>
                                            <li><Link to="/" className="navlink">prod03</Link></li>
                                            <li><Link to="/" className="navlink">prod04</Link></li>


                                        </ul>
                                    </Col>
                                    <Col lg={4} className="col">
                                        <h4 className="row mega-title">Music mp3</h4>
                                        <ul className="description p-0">
                                            <li><Link to="/" className="navlink">prod01</Link>

                                            </li>
                                            <li><Link to="/" className="navlink">prod02</Link>

                                            </li>
                                            <li><Link to="/" className="navlink">prod03</Link>

                                            </li>
                                            <li><Link to="/" className="navlink">prod04</Link>

                                            </li>

                                        </ul>
                                    </Col>
                                   

                                </Row>
                            </div>
                        </div>
                    </li>
                    <li className="col-md-1 float-right navlink d-flex  justify-content-around cart_shop_wrapper p-0">
                       
                        <CartShop />

                    </li>

                </ul>

            </div >

        )
    }
}
