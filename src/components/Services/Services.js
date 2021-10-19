import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <section className="services">
            <h2 className="section-title">Our Services</h2>
            <div className="grid-section">
                <Container>
                    <Row xs={1} sm={2} md={3} lg={3}>
                        {
                            services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Services;