//import liraris
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faLock, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signoutlink = () => {
    return (
        <ul className="navUser-section text-right">
            <li className="navUser-item">
                <NavLink to="" className="navlink navUser-action"> <FontAwesomeIcon icon={faLock} />  SignIn</NavLink>
            </li>
            <li className="navUser-item">
                <NavLink to="" className="navlink navUser-action"><FontAwesomeIcon className="icon-font" icon={faGift} /> Gift Certificate</NavLink>
            </li>

        </ul>


    )
}

export default Signoutlink