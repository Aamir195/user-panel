import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock } from '@fortawesome/free-solid-svg-icons';
import {
    Profile,
    Logo,
    // Favicon
} from "../assets/images";
import '../assets/style.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center">

                <div className="d-flex align-items-center justify-content-between">
                    <Link to='/home' className="logo d-flex align-items-center">
                        <img src={Logo} alt="" />
                        <span className="d-none d-lg-block">User Exchange</span>
                    </Link>
                    {/* <!-- <i className="bi bi-list toggle-sidebar-btn"></i> --> */}
                </div>
                {/* <!-- End Logo --> */}

                <div className="search-bar">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
                        <button type="submit" title="Search"><i className="bi bi-search"></i></button>
                    </form>
                </div>

                {/* <!-- End Search Bar --> */}

                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">

                        <li className="nav-item d-block d-lg-none">
                            <a className="nav-link nav-icon search-bar-toggle " href="#">
                                {/* <i className="bi bi-search"></i> */}
                            </a>
                        </li>
                        {/* <!-- End Search Icon--> */}

                        <li className="nav-item dropdown pe-3">

                            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to="#" data-bs-toggle="dropdown">
                                <img src={Profile} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Mello</span>
                            </Link>
                            {/* <!-- End Profile Iamge Icon --> */}

                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li className="dropdown-header">
                                    <h6>Mello</h6>

                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        {/* <i className="bi bi-person"></i> */}
                                        <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>

                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        {/* <i className="bi bi-box-arrow-right"></i> */}
                                        <FontAwesomeIcon icon={faLock} ></FontAwesomeIcon>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul>
                            {/* <!-- End Profile Dropdown Items --> */}
                        </li>
                        {/* <!-- End Profile Nav --> */}

                    </ul>
                </nav>
                {/* <!-- End Icons Navigation --> */}

            </header>
        </>
    )
}
