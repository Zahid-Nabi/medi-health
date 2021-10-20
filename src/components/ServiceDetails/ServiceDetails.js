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
        <div className="service-details">
            <h3>This is service details. {serviceId}</h3>
            <h5>{singleService?.name}</h5>

        </div>
    );
};

export default ServiceDetails;