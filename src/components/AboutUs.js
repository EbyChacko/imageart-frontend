import { Container, Row, Col } from "react-bootstrap";
import quote from "../assets/Images/quote.webp"

export const AboutUs = () => {
    return (
        <section className="AboutUs" id="AboutUs">
            <Container>
                <Row className='Align-items-center'>
                    <Col xs={12} lg={7} className="d-flex justify-content-center align-items-center">
                        <div >
                            <div className="aboutUs-para">
                                <h3>About Us</h3>
                                <hr></hr>
                                <p>Image Art is a brand, for Digital Print and Signage needs, that has spent the last 21 years helping people build empires. Since we started in 1996 we’ve created 100’s and 1000’s of pieces of work from brand identities, items of literature, packs, brand and marketing strategies, a lot of vinyl-cut words, designed & built for supporting corporates and business firms of all scales.</p>
                                <p>In short, we name brand, position them, give them identities and personalities. Image Art is the only firm with its own co-concerns.</p>
                                <p>D-Vision & Title Graphics Pvt. Ltd, which are equipped with the Largest Production Homes for LED/LCD ad panels and Engraving/Etching needs.</p>
                                <p>We’ve been lucky enough to work with some incredibly talented people and great companies over the last two decades. Take a butcher’s at our client list.</p>
                                <br></br>
                                <h3>Why Choose Us ?</h3>
                                <hr></hr>
                               
                                <p>We are upgrade to latest technology to ensure that our customers remain Happy and Satisfied with our products and services. And since our marking in Signage Industry, we made no compromises regarding the Quality, which eventually make our clients too to stick on to High Quality Printing.</p>
                                <p >Introduction to Xerox Laser Printing has supported us in expanding our market by including Special-Texture Paper Printing and Lamination. Within a short term, Laser Printing department gained reputation through its contributions to day to day Business needs. With Digital Press and Digital Signage put together, Image Art offers you with unlimited choices for printing and branding with the finest quality possible.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5} className="d-flex justify-content-center align-items-center">
                        <img src={quote} className="home_img" alt="printer" />
                    </Col>
                </Row>
            </Container>
        </section>
    );

}