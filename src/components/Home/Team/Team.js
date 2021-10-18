import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Team.css';

const Team = () => {
    return (
        <div className="team-section">
            <h3 className="section-title">Meet Our Doctors</h3>
            <Container>
                <Row xs={1} sm={2} md={2} lg={4}>
                    <Col>
                        <div class="card mx-3">
                            <div class="card-front"></div>
                            <div class="card-back">
                                <div className="desc">
                                    <h2>Jane Doe</h2>
                                    <h5>Web Designer</h5>
                                </div>
                                <ul className="social-icons">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaGoogle /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="card-front"></div>
                            <div class="card-back">
                                <div className="desc">
                                    <h2>Jane Doe</h2>
                                    <h5>Web Designer</h5>
                                </div>
                                <ul className="social-icons">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaGoogle /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="card-front"></div>
                            <div class="card-back">
                                <div className="desc">
                                    <h2>Jane Doe</h2>
                                    <h5>Web Designer</h5>
                                </div>
                                <ul className="social-icons">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaGoogle /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="card">
                            <div class="card-front"></div>
                            <div class="card-back">
                                <div className="desc">
                                    <h2>Jane Doe</h2>
                                    <h5>Web Designer</h5>
                                </div>
                                <ul className="social-icons">
                                    <li><FaFacebookF /></li>
                                    <li><FaTwitter /></li>
                                    <li><FaGoogle /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedinIn /></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default Team;