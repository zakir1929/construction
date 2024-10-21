
import React from 'react';

import CleanPhone from '../../helpers/CleanPhone/CleanPhone.js';

import { NavLink } from 'react-router-dom';

const MainMenu = (props) => {

  return (
        <React.Fragment>
            <nav className="collapse">
                <ul className="nav nav-pills" id="mainNav">
                    <li className="dropdown">
                        <NavLink className="dropdown-item" to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <NavLink className="dropdown-item" to="/about-us">
                            About
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-item dropdown-toggle" href="/" onClick={(e) => e.preventDefault()}>
                            Products
                        </a>
                        <ul className="dropdown-menu">
                            {props?.divisions?.map((division,key) => (
                            <li key={key}>
                                <NavLink className="dropdown-item" to={`/division/${division.slug}`} >
                                    {division.title}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </li>
                    <li className="dropdown">
                        <NavLink className="dropdown-item" to="/contact-us">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                <ul className="header-extra-info d-flex align-items-center">
                    <li className="d-none d-sm-inline-flex align-items-center">
                        <div className="header-extra-info-icon">
                            <i className="fa fa-phone text-color-primary text-2 position-relative bottom-2" />
                        </div>
                        <div className="header-extra-info-text">
                            <label className="text-1">CALL US NOW</label>
                            <strong>
                                <CleanPhone componentClass="text-decoration-none text-color-hover-primary text-4" phone={props?.setting?.phone} />
                            </strong>
                        </div>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default MainMenu;