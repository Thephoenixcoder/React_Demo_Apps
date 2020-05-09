//import liraris
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signinlink = () => {
    return (
        <ul className="navUser-section text-right p-0">
            <li className="navUser-item">
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic" className="pt-0  pb-0  navUser-action navlink ">
                        <FontAwesomeIcon icon={faUser} />  My Account
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>

            <li className="navUser-item">
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic" className="pt-0 navlink pb-0 navUser-action">
                        Lang
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">En</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Ar</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
            </li>


        </ul>


    )
}

export default Signinlink