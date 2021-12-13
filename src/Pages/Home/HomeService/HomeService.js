import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'


const Service = ({ events }) => {
    let history2 = useHistory();
    const handleService = () => {
        history2.push("/servicesDetails")
    }

    const { title, phone, address, trip_type, description, img } = events;

    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <small> {address} </small>
            <p> <span className="service-des">Contact:</span> {phone} </p>
            <p>{description}</p>
            <p> <span className="service-des">Trip Type: </span> {trip_type}</p>
            <Button onClick={handleService} className="btn" variant="secondary" size="lg" active>
                More Details
            </Button>
        </div>

    );
};

export default Service;