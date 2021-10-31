import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'


const Service = ({ service }) => {
    let history2 = useHistory();
    const handleService = () => {
        history2.push("/serviceDetails")
    }


    const { title, doctor, phone, location, history, description, img, method, treatment } = service;



    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{title}</h2>
            <h3> {doctor} </h3>
            <small> {location} </small>
            <p> <span className="service-des">Contact:</span> {phone} </p>
            <p> <span className="service-des">Treatment:</span> {treatment} </p>
            <p>{description}</p>
            <p> <span className="service-des">Method:</span> {method} </p>
            <p> <span className="service-des">History: </span> {history}</p>
            <Button onClick={handleService} className="btn" variant="secondary" size="lg" active>
                More Details
            </Button>
        </div>

    );
};

export default Service;