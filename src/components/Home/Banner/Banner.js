import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
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
                    <div className="caption-box">
                        <h1>Hello, Hospital</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias ipsum id. Enim adipisci amet eos perspiciatis, harum ducimus ex!</p>
                        <button className="btn">Know About</button>
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
                    <div className="caption-box">
                        <h1>Hello, Hospital</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias ipsum id. Enim adipisci amet eos perspiciatis, harum ducimus ex!</p>
                        <button className="btn">Know About</button>
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
                    <div className="caption-box">
                        <h1>Hello, Hospital</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias ipsum id. Enim adipisci amet eos perspiciatis, harum ducimus ex!</p>
                        <button className="btn">Know About</button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;