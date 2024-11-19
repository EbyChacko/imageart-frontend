import { Container, Row, Col} from "react-bootstrap";
import quote from "../assets/Images/quote.webp"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className='Align-items-center'>
                    <Col xs={12}  lg={5} className="d-flex justify-content-center align-items-center">
                        <img src={quote} className="home_img" alt="printer" />
                    </Col>
                    <Col xs={12} lg={7} className="d-flex justify-content-center align-items-center">
                    <div >
                        <div className="banner_para">
                            <h1>Printing Your Vision, Perfectly Delivered!</h1>
                            <br></br>
                            <p>Welcome to <strong>Image Art</strong>, your trusted partner in digital printing solutions since 1999. Based in the vibrant city of Kothamangalam, Kerala, we've been perfecting the art of designing and printing for over 25 years.</p>
                            <p>With a rich history and a passion for innovation, we've established ourselves as a leader in the digital printing industry. Our state-of-the-art facilities and cutting-edge technology enable us to deliver top-notch prints that exceed our clients' expectations.
                            At Signtek, we're dedicated to providing exceptional quality, timely delivery, and personalised service. Our team of experts is always ready to guide you through the printing process, ensuring that your vision becomes a stunning reality.</p>
                            <p>From vibrant signage to intricate designs, we've printed it all. Trust Image Art to bring your ideas to life with our:</p>
                            <ul>
                                <li>High-quality digital printing services</li>
                                <li>Expert design and production team</li>
                                <li>Quick turnaround times</li>
                                <li>Competitive pricing</li>
                            </ul>
                            <p>As we continue to grow and evolve, we remain committed to our core values of quality, innovation, and customer satisfaction. Partner with us to experience the Image Art difference.</p>
                            <p style={{ color: "#f9cb00" }} > Visit us today and let us elevate your printing experience!</p>
                        </div>
                    </div>
                        
                    </Col>
                </Row>
            </Container>
        </section>
    );
    
}