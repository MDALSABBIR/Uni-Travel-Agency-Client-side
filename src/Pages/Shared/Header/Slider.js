import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Slider.css';


const Slider = () => {
    return (
        <div>
            <Carousel className="slider-text">
                <Carousel.Item>
                    <img
                        className="d-block  slider"
                        src="https://images.unsplash.com/photo-1530122706536-c80ca06b2aad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxwbGFuZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>ENJOY YOUR LUXURY VACATION </h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  slider"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-6.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>EXPLORE YOUR WORLD </h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-16.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2>ENJOY YOUR BEST TOUR</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slider"
                        src="https://getaway.qodeinteractive.com/wp-content/uploads/2017/08/blog-post-8.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>Big TOUR</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;