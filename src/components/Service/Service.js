import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, icon, diseases } = props.service;
    return (
        <Col>
            <div className="service">
                <div className="img-box">
                    <img src={icon} alt="" />
                </div>
                <div className="info-box">
                    <h3 className="service-title">{name}</h3>
                    <p className="service-desc">{diseases}</p>
                </div>
                <div className="order-box">
                    <Link to={`/service/${id}`} ><button className="order-btn">Show Details</button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;