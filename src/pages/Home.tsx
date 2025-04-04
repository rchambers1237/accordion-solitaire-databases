import React from 'react';
import { NavLink } from 'react-router-dom';

import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/home.css';

const Home: React.FC = () => {
    return (
            <div className="loadScreen">
                <NavLink to="/game">
                    <FontAwesomeIcon icon={faPlay} className="playIcon" />
                </NavLink>
            </div>
    );
};
  
export default Home;
