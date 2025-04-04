import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    faUserCircle,
    faPlayCircle,
    faInfoCircle,
    faMedal,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/links.css';

const Links: React.FC = () => {
    return (
        <div className="linkContainer">
            <NavLink to="/user" className="linkIcon">
                <FontAwesomeIcon icon={faUserCircle} />
            </NavLink>
            <NavLink to="/game" className="linkIcon">
                <FontAwesomeIcon icon={faPlayCircle} />
            </NavLink>
            <NavLink to="/rules" className="linkIcon">
                <FontAwesomeIcon icon={faInfoCircle} />
            </NavLink>
            <NavLink to="/leaders" className="linkIcon">
                <FontAwesomeIcon icon={faMedal} />
            </NavLink>
        </div>
    );
};
  
export default Links;