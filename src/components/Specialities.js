import { Container, Row, Col } from "react-bootstrap";
import customerService from "../assets/Images/customer-service.webp"
import quality from "../assets/Images/quality.webp"
import innovation from "../assets/Images/innovation.webp"

export const Specialities = () => {
    return (
        <section className="specialities" id="specialities">
            <Container>
                <Row>
                    <h3 className="text-center pb-3">OUR SPECIALITIES</h3>
                    <Col xs={12} className="d-flex justify-content-center align-items-stretch">
                        <Row className="d-flex justify-content-center align-items-stretch">
                            <Col xs={12} lg={3} className="text-center customer-service m-3">
                                <div>
                                    <img src={customerService} alt="Customer-Service" />
                                    <h4>Customer Service</h4>
                                    <p>Image Art prioritizes customer satisfaction by offering personalized assistance, ensuring each project aligns with the client’s vision. Our friendly and professional team ensures a seamless experience, addressing queries and providing tailored solutions efficiently.</p>
                                </div>
                            </Col>
                            <Col xs={12} lg={3} className="text-center customer-service m-3">
                                <div>
                                    <img src={quality} alt="Quality-Service" />
                                    <h4>Quality Service</h4>
                                    <p>Image Art is known for uncompromising quality, using cutting-edge technology and premium materials to ensure vibrant, sharp, and durable results.</p>
                                </div>
                            </Col>
                            <Col xs={12} lg={3} className="text-center customer-service m-3">
                                <div>
                                    <img src={innovation} alt="Innovation" />
                                    <h4>Innovation</h4>
                                    <p>Image Art offers innovative solutions like custom branding strategies, LED signage, and textured paper printing to enhance brand presence.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}