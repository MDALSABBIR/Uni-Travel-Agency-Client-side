import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://uni-travel-34404.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div>
                <h2 className="service-title">Choose The Destination
                    Just Right For Your Vacation</h2>
            </div>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;