import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="slider">
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className="img-box">
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                    </div>
                    <div className="caption-box d-none d-sm-block">
                        <h1 className="banner-title">Medical Services, <span>that you can trust</span></h1>
                        <p className="d-none d-lg-block">Medi Health is home to the latest theatres, luxury ensuite bedrooms, specialist rehabilitation physiotherapy and outpatient diagnostic facilities including fast-track access to X-ray, MRI, CT and ultrasound.</p>
                        <Link to="/about"><button className="btn">About Us</button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-box">
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />
                    </div>
                    <div className="caption-box d-none d-sm-block">
                        <h1 className="banner-title">We care <span>for you</span></h1>
                        <p className="d-none d-lg-block">Medi Health introduces the latest technology and design features within the facility, aimed at specifically enhancing the patients’ experience and perception of the hospital’s facilities.</p>
                        <Link to="/about"><button className="btn">About Us</button></Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-box">
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />
                    </div>
                    <div className="caption-box d-none d-sm-block">
                        <h1 className="banner-title">Qualified Staff With <span>Expertise in Services</span></h1>
                        <p className="d-none d-lg-block"> Medi Health offers a full range of surgical procedures and treatments.</p>
                        <Link to="/about"><button className="btn">About Us</button></Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;