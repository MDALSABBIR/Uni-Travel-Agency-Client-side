import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'


const Service = ({ events }) => {
    let history2 = useHistory();
    const handleService = () => {
        history2.push(`/servicesDetails/${events.id}`)
    }
    const { title, travel_style, service_level, trip_type, description, img, price, } = events;



    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3>Travel Style: {travel_style} </h3>
            <p>Service Level: {service_level} </p>
            <p>Trip Type: {trip_type} </p>
            <h4>Price: {price}</h4>
            <p> <span className="service-des">Description:</span> {description} </p>
            <Button onClick={handleService} className="btn" variant="secondary" size="lg" active>
                More Details
            </Button>
        </div>

    );
};

export default Service;