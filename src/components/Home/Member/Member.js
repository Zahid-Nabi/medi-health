import React from 'react';
import { Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Member.css';

const Member = (props) => {
    const { name, speciality, img } = props.doctor;
    return (
        <Col>
            <div className="card mx-3">
                <div className="card-front" style={{ backgroundImage: `url("${img}")` }}></div>
                <div className="card-back">
                    <div className="desc">
                        <h2>{name}</h2>
                        <h5>{speciality}</h5>
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
    );
};

export default Member;