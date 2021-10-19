import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Member from '../Member/Member';

import './Team.css';

const Team = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div className="team-section">
            <h3 className="section-title">Meet Our Doctors</h3>
            <Container>
                <Row xs={1} sm={2} md={2} lg={3} xl={4}>
                    {
                        doctors.map(doctor => <Member
                            key={doctor.id}
                            doctor={doctor}
                        ></Member>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Team;