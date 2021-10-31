import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/4O4.png';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" />
            <Link to="/">
                <button className="btn">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;