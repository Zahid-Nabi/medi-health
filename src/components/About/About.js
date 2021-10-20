import React from 'react';
import './About.css';
import aboutImg1 from '../../images/slide1.jpg';
import aboutImg2 from '../../images/slide2.jpg';
import aboutImg3 from '../../images/slide3.jpg';
import Accordion from 'react-bootstrap/Accordion';

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
                        <div className="mb-5">
                            <img src={aboutImg1} className="img-fluid" alt="about img" />
                        </div>
                        <div className="mb-5">
                            <img src={aboutImg3} className="img-fluid" alt="about img" />
                        </div>
                        <div className="mb-5">
                            <img src={aboutImg2} className="img-fluid" alt="about img" />
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h5 className="bold text-danger">MEDI HEALTH</h5>
                        <h1 className="heading bold">Your total health care solution</h1>
                        <hr />
                        <h2>Types of our Health Care Facilities</h2>
                        <p>With the increasing complexity of the health care system, patients now have an incredible array of choices when it comes to receiving care. This often includes the option of selecting what type of health care facility they wish to utilize</p>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Hospital</Accordion.Header>
                                <Accordion.Body>
                                    A hospital's primary task is to provide short-term care for people with severe health issues resulting from injury, disease or genetic anomaly. Open 24 hours a day, seven days a week, hospitals bring together physicians in assorted specialties, a highly skilled nursing staff, various medical technicians, health care administrators and specialized equipment to deliver care to people with acute and chronic health conditions. Many hospitals offer a wide range of services, including emergency care, scheduled surgeries, labor and delivery services, diagnostic testing, lab work, and patient education. Depending on their health situation, patients may receive inpatient or outpatient care from a hospital.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Surgical Center</Accordion.Header>
                                <Accordion.Body>
                                    Some surgeries are too complex to be done safely in a doctor's office but simple enough that patients generally do not require hospital care after undergoing them. Ambulatory surgical centers are designed to provide these types of procedures. Also referred to as outpatient or same day surgery centers, these facilities offer a safe environment for the surgery and basic monitoring during the initial post-operation hours. Ambulatory surgical centers are often a less expensive option than a hospital. A study led by Dr. John Hollingsworth, a researcher at the University of Michigan's Dow Division of Health Services Research and Center for Healthcare Outcomes & Policy and an assistant professor of urology at the university, compared the cost of 22 common urology procedures at various health care facilities and found that the same procedures generally cost significantly less when performed at an ambulatory surgical center instead of a hospital.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Urgent Care Clinic</Accordion.Header>
                                <Accordion.Body>
                                    When patients are unable to get to their doctor's office or want basic medical care without an appointment, an urgent care clinic might be the perfect choice. Sometimes called walk-in clinics, these facilities offer outpatient care immediately. However, it is important to note that an urgent care clinic is not the same as a hospital's emergency room. If the issue is something that you would normally see your doctor for like a stomach virus or a sprained ankle, then an urgent care clinic is appropriate. If you have a complex health situation or your issue is a true medical emergency like chest pain, breathing difficulties, broken bones or an extremely high fever, then you should head to the hospital's emergency room without delay.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Nursing Home</Accordion.Header>
                                <Accordion.Body>
                                    A nursing home is designed for patients who require constant care but do not need to be hospitalized and cannot be cared for at home. Often associated with seniors who require custodial care in a residential facility, it can actually serve patients of all ages who require this level of care. Nursing homes have medical personal onsite 24 hours a day. A physician, skilled nurses and therapists are on staff to oversee and provide medical care, assistance with medications, and services like physical, speech and occupational therapy. In addition, the nursing home's staff offers help with basic tasks that can be challenging for individuals with health issues, including feeding, bathing and dressing.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;