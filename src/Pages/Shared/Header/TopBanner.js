import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './TopBanner.css';
const TopBanner = () => {
    let history = useHistory();

    const handleAbout = () => {
        history.push("/about")
    }


    return (
        <div>
            <div className="banner">
                <div>
                    <h2>Amazing <span className="top-heading">Tours And Fun</span> <br /> Adventures Waiting <br /><span className="top-heading"> For You!</span></h2>
                    <h4 className="p-5">
                        Our travel agent was excellent for us and considered our unique needs and planned our itinerary. I would definitely work with you again as you made our trip easy and stress-free. It was a delight to work with UniTravel. Thank you so much..Many people visit Peru to see the impressive incaruins of Machu Picchu, Which are deservedly a stand-alone destination.</h4>
                    <Button onClick={handleAbout} className="btn" variant="secondary" size="lg" active>
                        Get Details
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;