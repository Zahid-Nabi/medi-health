import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>We are sorry! The page you request was not found.</p>
                <div className="not-found-btn">
                    <Link to="/home"><button className="go-home-btn"><FaHome /> <span>Go Home</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;