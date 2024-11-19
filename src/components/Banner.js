import { Container, Row, Col} from "react-bootstrap";
import { useState, UseEfeect } from "react";
import printer from "../assets/Images/printer.webp"
import quote from "../assets/Images/quote.webp"

export const Banner = () => {


    return (
        <section className="banner" id="home">
            <Container>
                <Row className='Align-items-center'>
                    <Col xs={12}  lg={5} className="d-flex justify-content-center align-items-center">
                        <img src={quote} className="home_img" alt="printer" />
                    </Col>
                    <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
                    <div >
                        <div className="banner_para">
                            <h2>Welcome to Image Art – The Printing Expert.</h2>
                            <br></br>
                            <p>For over 20 years, we have proudly served as the premier destination for flex printing, vinyl printing, laser etching, custom mug printing, and a wide range of innovative printing solutions in Kothamangalam, the gateway to the high ranges. Whether you’re looking for vibrant banners, eye-catching signage, or personalized gifts, our expertise ensures every project exceeds expectations.</p>
                            <p>Our journey is strengthened by our sister concerns—Colour Dots, Image Digital, and Tiso Tech—who share our commitment to quality and creativity. Together, we deliver unmatched printing services tailored to your needs.</p>
                            <p>Step into our shop and experience cutting-edge printing technology combined with decades of craftsmanship. At Image Art, your ideas come to life with precision and flair, ensuring your brand or personal project makes a lasting impression.</p>
                            <p style={{ color: "#f9cb00" }} > Visit us today and let us elevate your printing experience!</p>
                        </div>
                    </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
    
}