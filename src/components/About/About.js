import React from 'react';
import './About.css';
import aboutImg from '../../images/slide3.jpg';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="section-title">
                            <strong>Know more</strong>
                            <h1 className="heading bold">About Us</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={aboutImg} className="img-fluid" alt="about img" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3 className="bold">MEDI HEALTH</h3>
                        <h1 className="heading bold">Your total health care solution</h1>




                        {/* <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#design" aria-controls="design" role="tab" data-toggle="tab">DESIGN</a></li>
                            <li><a href="#mobile" aria-controls="mobile" role="tab" data-toggle="tab">MOBILE</a></li>
                            <li><a href="#social" aria-controls="social" role="tab" data-toggle="tab">SOCIAL</a></li>
                        </ul>
                        
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="design">
                                <p>Duis aute irure dolor in in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed id est tincidunt, iaculis nulla vel, sodales metus. Morbi interdum accumsan augue, in accumsan neque lacinia sed. Fusce cursus eu ligula ut gravida.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="mobile">
                                <p>Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                                <p>Gid in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="social">
                                <p>Pellentesque elementum, lacus sit amet posuere, quam quam tristique nisi, nec ornare ligula magna id nisl. Donec blandit enim ac semper facilisis. Curabitur eu laoreet mauris, eget fermentum velit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;