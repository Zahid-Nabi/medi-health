import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Counter.css';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className="counter-section">
            <Container>
                <Row xs={1} sm={2} md={2} lg={4}>
                    <Col>
                        <div className="counter">

                            <h2>
                                <CountUp end={537} duration={5} />
                            </h2>
                            <h5>Happy Patients</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">

                            <h2>
                                <CountUp end={2394} duration={5} />
                            </h2>
                            <h5>Expart Doctors</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">

                            <h2>
                                <CountUp end={169} duration={5} />
                            </h2>
                            <h5>Health Departments</h5>
                        </div>
                    </Col>
                    <Col>
                        <div className="counter">

                            <h2>
                                <CountUp end={324} duration={5} />
                            </h2>
                            <h5>Total Branches</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counter;