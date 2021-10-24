import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import logo from '../images/Logo.png';
import name from '../images/Name.png';

const Signup = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () =>{
        const { firstName, lastName, email, password, confirmPassword } = user;
        if( firstName && lastName && email && password && (password === confirmPassword)){
            console.log(firstName, " ", lastName, " ", email, " ", password, " ", confirmPassword);
            axios.post("http://localhost:8080/register", user)
            .then( response => {
                alert(response.data.message);
                history.push("/login");
            })
        } else {
            alert("invlid input")
        }
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
                        <h2>Sign Up</h2>
                    </center>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div>
                                <div className="mb-3">
                                    <label className="form-label">First Name</label>
                                    <input type="text" name="firstName" value={user.firstName} className="form-control" id="firstName" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" name="lastName" value={user.lastName} className="form-control" id="lastName" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" value={user.email} className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" name="password" value={user.password} className="form-control" id="password" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" name="confirmPassword" value={user.confirmPassword} className="form-control" id="confirmPassword" onChange={handleChange} required />
                                </div>
                                <br />
                                <div className="mx-auto text-center">
                                    <button type="reset" className="btn btn-secondary fontsize">Reset</button>&nbsp;
                                    <button className="btn btn-dark fontsize" onClick={register}>Sign Up</button>
                                </div>
                            </div>
                            <br />
                                <div className="mb-3 text-center">
                                    <label className="form-check-label">Already have an account? &nbsp;<u className="cursor-style" href="/" onClick={() => history.push("/login")}>LogIn</u>
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

export default Signup