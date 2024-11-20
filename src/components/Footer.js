import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/Images/ia_logo.webp"

import facebookIcon from "../assets/Images/facebook.svg";
import instagramIcon from "../assets/Images/instagram.svg";

export const Footer = () => {
    return (
        <section className="footer" id="footer">
            <Container className=" d-flex justify-content-center align-items-center">
                <Row className='d-flex justify-content-center  Align-items-center'>
                    <Col xs={12} lg={10} className="py-3">
                        <Row className='d-flex Align-items-center'>
                            <Col xs={12} lg={4} className="d-none d-sm-flex d-flex justify-content-center align-items-center">
                                <div className="footer_logo_div" >
                                    <img src={logo} className="footer_logo" alt="printer" />
                                    <p>At ImageArt, we combine cutting-edge technology with unmatched craftsmanship to make your brand stand out. Explore our tailored solutions for businesses and individuals to elevate your advertising game.</p>
                                </div>
                            </Col>
                            <Col xs={12} lg={8} className="footer_sections">
                                <Row>
                                    <Col xs={12} lg={6} className="py-3" >
                                        <div >
                                            <h4>Explore Us</h4>
                                            <ul>
                                                <li>Home</li>
                                                <li>About Us</li>
                                                <li>Services</li>
                                                <li>Gallery</li>
                                            </ul>

                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className="py-3">
                                        <div >
                                            <h4>Meet Us</h4>
                                            <address>
                                                <small>Thankalam</small><br></br>
                                                <small>Kothamangalam</small><br></br>
                                                <small>Pin : 686 691</small><br></br>
                                            </address>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className="py-3">
                                        <div >
                                            <h4>Reach Us</h4>
                                            <small>
                                                <a href="tel:+919605595533">
                                                     +91 96055 95533
                                                </a>
                                            </small>
                                            <br></br>
                                            <small>
                                                <a href="mailto:imageart.klm@gmail.com">
                                                    imageart.klm@gmail.com
                                                </a>
                                            </small>
                                        </div>
                                    </Col>
                                    <Col xs={12} lg={6} className="py-3">
                                        <div className="social-icon" >
                                            <h4>Connect With Us</h4>
                                            <a href="https://www.facebook.com/imageart.flexprinting" target="_blank" rel="noopener noreferrer">
                                                <img src={facebookIcon} alt="Facebook icon" />
                                            </a>
                                            <a href="https://www.instagram.com/imageartkothamangalam/" target="_blank" rel="noopener noreferrer">
                                                <img src={instagramIcon} alt="Instagram icon" />
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <hr></hr>
                    <Col xs={12} lg={10} className='d-flex justify-content-center  Align-items-center py-3' >
                        <small>Copyright &copy; <span id="year">{new Date().getFullYear()}</span> Image Art Flex & vinyl printing.</small>
                    </Col>
                </Row>

            </Container>
        </section>
    )
}