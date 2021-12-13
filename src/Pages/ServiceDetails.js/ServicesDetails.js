import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import './ServicesDetails.css';

const ServicesDetails = () => {
    const { user } = useAuth();
    const { eventsDeta } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://uni-travel-34404.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    const ExactIteam = data.filter((oneData) => oneData.id == eventsDeta);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.email = user?.email;
        data.eventName = ExactIteam[0]?.name;
        data.eventImg = ExactIteam[0]?.img;
        data.eventDate = ExactIteam[0]?.date;
        data.eventPrice = ExactIteam[0]?.price;
        data.status = "Pending";
        console.log(data.email);
        console.log(data.eventName);
        axios
            .post("https://uni-travel-34404.herokuapp.com/users", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Booking Succefull");
                    reset();
                }
            });
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col className="my-5" md={8}>
                        <img className="details-img my-3" src={ExactIteam[0]?.img} alt="" />
                        <h2>{ExactIteam[0]?.title}</h2>
                        <h4>Travel Style: {ExactIteam[0]?.travel_style}</h4>
                        <h6>Service Level: {ExactIteam[0]?.service_level}</h6>
                        <h6>Trip Type: {ExactIteam[0]?.trip_type}</h6>
                        <p>Description: {ExactIteam[0]?.description}</p>
                        <h3> Fee: $ {ExactIteam[0]?.price}</h3>
                    </Col>
                    <Col md={4} className="mt-5">
                        <div className="add-reg-form">
                            <p className="text-start fw-bold global-left">
                                Start Date : {ExactIteam[0]?.eventDate}
                            </p>
                            <p className="text-start fw-bold global-left">
                                End Date: Feb 28, 2021
                                {/* End Date : {ExactIteam[0]?.eventDate} */}
                            </p>
                            <p className="text-start fw-bold global-left">
                                Address : {ExactIteam[0]?.address}
                            </p>
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    placeholder="Your Name"
                                    {...register("name", { required: true })}
                                />
                                <input
                                    placeholder="Your Address"
                                    {...register("address", { required: true })}
                                />
                                <input
                                    placeholder=" min: 18, max: 60 Age"
                                    type="number"
                                    {...register("age", { required: true, min: 18, max: 60 })}
                                />
                                <input
                                    placeholder="Your Phone Number"
                                    type="number"
                                    {...register("phone", { required: true })}
                                />
                                <input
                                    className="btn btn-warning"
                                    value="Booking Now"
                                    type="submit"
                                />
                            </form>
                            <Link to="/home">
                                <button className="btn btn-warning">Go Back Home</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default ServicesDetails;