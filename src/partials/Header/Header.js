import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import MainMenu from './MainMenu'; // Assuming MainMenu is imported correctly

//Redux Code
import { useDispatch, useSelector } from 'react-redux';
import { settingData } from '../../store/Slice/settingSlice.js'; 

const Header = (props) => {

    //Redux Code
    const dispatch = useDispatch();
    const { setting, loading, error } = useSelector((state) => state.settingStore);

    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    function handleScroll() {
        setIsSticky(window.scrollY > 120);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        dispatch(settingData());
    }, [dispatch]);

    return (
        <header
            id="header"
            className={`header-effect-shrink ${isSticky ? 'is-sticky' : ''}`}
        >
            <div className="header-body border-top-0">
                <div className="header-container container">
                    <div className="header-row">
                        <div className="header-column">
                            <div className="header-row">
                                <div className="header-logo">
                                    <NavLink to="/">
                                        <img
                                            alt="Porto"
                                            width={170}
                                            src={setting?.logo} 
                                        />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="header-column justify-content-end">
                            <div className="header-row">
                                <div className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
                                    <div className="header-nav-main header-nav-main-square header-nav-main-arrows header-nav-main-arrows header-nav-main-effect-1 header-nav-main-sub-effect-1">
                                        <MainMenu setting={setting} />
                                    </div>
                                    <button
                                        className="btn header-btn-collapse-nav"
                                        data-bs-toggle="collapse"
                                        data-bs-target=".header-nav-main nav"
                                    >
                                        <i className="fas fa-bars" />
                                    </button>
                                </div>
                                <div className="header-nav-features header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
                                    <div className="header-nav-feature header-nav-features-search d-inline-flex">
                                        <a
                                            href="#"
                                            className="header-nav-features-toggle text-decoration-none"
                                            data-focus="headerSearch"
                                            aria-label="Search"
                                            onClick={toggleVisibility}
                                        >
                                            <i className="fas fa-search header-nav-top-icon nav-header-nav-top-icon" />
                                        </a>
                                        <div className="header-nav-features-dropdown" id="headerTopSearchDropdown"
                                            style={{
                                                opacity: isVisible ? 1 : 0,
                                                top: isVisible ? '0' : '-9999999px',
                                            }}
                                        >
                                            <form role="search" action="page-search-results.html" method="get">
                                                <div className="simple-search input-group">
                                                    <input
                                                        className="form-control text-1"
                                                        id="headerSearch"
                                                        name="q"
                                                        type="search"
                                                        placeholder="Search..."
                                                    />
                                                    <button className="btn" type="submit" aria-label="Search">
                                                        <i className="fas fa-search header-nav-top-icon" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;