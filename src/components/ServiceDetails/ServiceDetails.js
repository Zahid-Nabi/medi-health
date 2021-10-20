import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './serviceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    useEffect(() => {
        const foundService = services.find(service => service.id === parseInt(serviceId));
        setSingleService(foundService);
    }, [services]);
    console.log(singleService);
    return (
        // <div className="service-details">
        //     <h3>This is service details. {serviceId}</h3>
        //     <h5>{singleService?.name}</h5>

        // </div>

        <section id="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="section-title">
                            <div className="icon-img">
                                <img src={singleService?.icon} alt="" className="img-fluid" />
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 service-info">
                        <h2 className="heading bold">{singleService?.name}</h2>

                        <div className="col-md-6 col-sm-4">
                            <h3 className="d-flex align-items-center">Service available for</h3>
                            <p>{singleService?.diseases}</p>
                        </div>
                        <hr />
                        <p>{singleService?.desc}</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="service-img">
                            <img className="img-fluid" src={singleService?.image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ServiceDetails;