import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './serviceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    // const [individualService, setIndividualService] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [serviceId]);

    // const matchedService = services.length !== 0 ? services?.find(service => service.id === parseInt(serviceId));

    // console.log(matchedService);
    return (
        <div className="service-details">
            <h3>This is service details. {serviceId}</h3>

        </div>
    );
};

export default ServiceDetails;