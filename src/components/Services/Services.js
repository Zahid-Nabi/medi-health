import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <h2 className="section-title">Our Services</h2>
            <div className="grid-section">
                <Container>
                    <Row xs={1} sm={2} md={3} lg={3}>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="service">
                                <div className="img-box">
                                    <img src="./images/breakfast1.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h3 className="service-title">Eggs Benedict</h3>
                                    <p className="service-desc">Lorem ipsum dolor sit amet.</p>
                                    <p className="price">$20</p>
                                </div>
                                <div className="order-box">
                                    <button className="order-btn">Order</button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Services;