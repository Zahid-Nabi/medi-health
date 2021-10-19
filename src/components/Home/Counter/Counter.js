import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Counter.css';

const Counter = () => {
    return (
        <div className="counter-section">
            <Container>
                <Row xs={1} sm={2} md={2} lg={4}>
                    <Col>
                        <div className="counter">
                            <h1>icon</h1>
                            <h2>500</h2>
                            <h5>Happy Patients</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <h1>icon</h1>
                            <h2>2394</h2>
                            <h5>Expart Doctors</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <h1>icon</h1>
                            <h2>137</h2>
                            <h5>Health Departments</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">
                            <h1>icon</h1>
                            <h2>324</h2>
                            <h5>Total Branches</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counter;