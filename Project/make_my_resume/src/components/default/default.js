import React from 'react';
import './default.css';
import logo from '../images/Logo.png';
import name from '../images/Name.png';

const Defaultpage = () => {
    return (
        <div className="main">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-md">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo" className="responsive img-spacing" />
                        <img src={name} alt="Make My Resume" className="responsive img-spacing" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fontsize" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fontsize" href="templates">Templates</a>
                            </li>
                            
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a href="login" className="btn btn-outline-light fontsize">Log In</a>
                        &nbsp;
                        <a href="signup" className="btn btn-outline-light fontsize">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="center">
                <div className="card middle">
                    <a className="btn btn-dark fontsize" href="signup">&nbsp; Let's Get Started &nbsp;<i className="fas fa-arrow-right"></i>&nbsp;</a>
                </div>
            </div>
        </div>
    )
}

export default Defaultpage