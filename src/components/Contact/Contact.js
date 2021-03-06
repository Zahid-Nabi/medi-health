import React from 'react';
import './Contact.css';
import { FaRegEnvelopeOpen, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="section-title">
                            <strong>Feel free to talk</strong>
                            <h1 className="heading bold">CONTACT US</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 contact-info">
                        <h2 className="heading bold">CONTACT INFO</h2>
                        <p>If you have any questions or would like to speak with a member of our team, then please get in touch.If you are contacting us as a patient or potential patient please complete the form or call us.</p>
                        <div className="col-md-6 col-sm-4">
                            <h3 className="d-flex align-items-center"><FaRegEnvelopeOpen className="medium-icon" /> EMAIL</h3>
                            <p>hello@medihealth.com</p>
                        </div>
                        <div className="col-md-6 col-sm-4">
                            <h3 className="d-flex align-items-center"><FaPhone className="medium-icon" /> PHONES</h3>
                            <p>010-020-0340 | 090-080-0760</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <form action="#" method="get" className="wow fadeInUp" data-wow-delay="0.6s">
                            <div className="col-md-6 col-sm-6">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <input type="email" className="form-control" placeholder="Email" name="email" />
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <textarea className="form-control" placeholder="Message" rows="7" name="message"></textarea>
                            </div>
                            <div className="col-md-offset-4 col-md-8 col-sm-offset-4 col-sm-8">
                                <input type="submit" className="form-control" value="SEND MESSAGE" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;