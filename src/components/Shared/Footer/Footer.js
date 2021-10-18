import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container>

                </Container>
            </div>
            <div className="footer-bottom">
                <Container>
                    <div>
                        <div className="copyright">
                            <p>&copy; Copyright 2021 | All rights reserved by Medihealth</p>
                        </div>
                        <div className="social-icons">

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Footer;