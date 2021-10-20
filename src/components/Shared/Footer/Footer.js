import React from 'react';
import { Container, Row, Col, ListGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container>
                    <Row xs={1} sm={2} md={2} lg={4}>
                        <Col className="p-3">
                            <img className="w-75 mb-3" src={logo} alt="" />
                            <p>Medi Health introduces the latest technology and design features within the facility, aimed at specifically enhancing the patients’ experience and perception of the hospital’s facilities.</p>
                        </Col>
                        <Col className="text-center px-5 py-3 footer-links">
                            <h5 className="footer-title">Help Links</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-transparent"><Link to="/home">Home</Link></ListGroup.Item>
                                <ListGroup.Item className="bg-transparent"><Link to="/about">About</Link></ListGroup.Item>
                                <ListGroup.Item className="bg-transparent"><Link to="/contact">Contact</Link></ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className="text-center p-3">
                            <h5 className="footer-title">Open-Close Time</h5>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-transparent d-flex justify-content-between">
                                    <span>Sat - Wed:</span>
                                    <span>08.00am - 10.00pm</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-transparent d-flex justify-content-between">
                                    <span>Thursday:</span>
                                    <span>08.00am - 08.00pm</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-transparent d-flex justify-content-between">
                                    <span>Friday:</span>
                                    <span>08.00am - 04.00pm</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col className="p-3">
                            <h5 className="footer-title">Newsletter</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <button className="login-btn" type="submit">Submit</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr />
            <div className="footer-bottom">
                <Container>
                    <div className="d-block d-md-flex justify-content-between text-center">
                        <div className="copyright">
                            <p className="mb-5 mb-md-0">&copy; Copyright 2021 | All rights reserved by Medihealth</p>
                        </div>
                        <ul className="social-icons">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaGoogle /></li>
                            <li><FaInstagram /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;