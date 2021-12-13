
import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const HomeService = (props) => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('https://uni-travel-34404.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <div>
                <h2 className="service-title">OTHER DESTINATIONS</h2>
            </div>
            <div className="service-container">
                {
                    services?.slice(0, 6)?.map(events => <Service
                        key={events.id}
                        events={events}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default HomeService;