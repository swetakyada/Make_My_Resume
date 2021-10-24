import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import logo from '../images/Logo.png';
import name from '../images/Name.png';

const Login = ( { setLoginUser } ) => {

    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        console.log(e.target);
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const login = () => {
        axios.post("http://localhost:8080/login", user)
        .then(response => {
            alert(response.data.message);
            setLoginUser(response.data.user);
            // navigator.push("/home");
            history.push("/home");
        });
    }

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
            <div className="col d-flex justify-content-center">
                <div className="card my-card">
                    <div className="card-header">
                        <center className="head">
                            <h2>Log In</h2>
                        </center>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={user.email} className="form-control" id="exampleInputEmail" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" value={user.password} className="form-control" id="exampleInputPassword" onChange={handleChange} required />
                                </div>
                                <br />
                                <div className="mx-auto text-center">
                                    <button type="reset" className="btn btn-secondary fontsize">Reset</button>&nbsp;
                                    <button className="btn btn-dark fontsize" onClick={login}>Log In</button>
                                </div>
                            </div>
                            <br />
                            <div className="mb-3 text-center">
                                <label className="form-check-label">Don't have an account? &nbsp;<u className="cursor-style" href="/" onClick={() => history.push("/signup")}>SignUp</u>
                                </label>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login