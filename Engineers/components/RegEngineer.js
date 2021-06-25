import React, { useState } from "react";
import axios from "axios";
import { Link } from '@reach/router';

const Register = props => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    const [ userEngineer, setUserEngineer ] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        setUserEngineer({
            ...userEngineer,
            [e.target.name]: e.target.value,
        })
    }

    const register = e => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/userEngineer/register",
        userEngineer
        )
        .then(res => {
            console.log(res.data);
            setUserEngineer({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
            })

            setConfirmReg("Thank you for registering yourself as an engineer, you can now log in!");
            setErrs({});
        })
        .catch((err) => {
            console.log(err);
            setErrs(err.response.data.errors);
        });
    };

    return (
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
            
            <Link className="linkHead2" to="/engineers/login">
                Engineer Login
            </Link>
            <Link className="linkHead" to="/engineers/management/login">
                Management Login
            </Link>
            </h1>
            <div className="engDashBoard2">
            <h2 className="yourDashboard"> Engineer Sign-Up</h2>
            {
                confirmReg ?
                <h4 style={{color: "green"}}> {confirmReg} </h4>
                : null
            }
            <form onSubmit={register}>
                <div className="detailwrapper2">
                    <div >
                        <label>First Name:</label>
                        <br />
                        {
                            errs.firstname ?
                                <span className="error"> {errs.firstname.message} </span>
                                : null
                        }
                        <input 
                            type="text"
                            name="firstname"
                            value= {userEngineer.firstname}
                            onChange= {(e) => handleChange(e)}
                        />
                    </div>
                    <br/>
                    &nbsp;
                    &nbsp;
                    <div>
                        <label>Last Name:</label>
                        <br />
                        {
                            errs.lastname ?
                                <span className="error"> {errs.lastname.message} </span>
                                : null
                        }
                        <input 
                            type="text"
                            name="lastname"
                            value= {userEngineer.lastname}
                            onChange= {(e) => handleChange(e)}
                        />
                    </div>
                    <br />
                </div>
                
                <div >
                    <br/>
                    <div >
                        <label className="emailEngReg">Email:</label>
                        <br />
                        {
                            errs.email ?
                                <span className="error"> {errs.email.message} </span>
                                : null
                        }
                        <input 
                            type="email"
                            name="email"
                            size="45"
                            value= {userEngineer.email}
                            onChange= {(e) => handleChange(e)}
                        />
                    </div>
                    <br />
                    <div>
                        <label className="passwordEngReg" >Password:</label>
                        <br />
                        {
                            errs.password ?
                                <span className="error"> {errs.password.message} </span>
                                : null
                        }
                        <input 
                            type="password"
                            name="password"
                            size="45"
                            value= {userEngineer.password}
                            onChange= {(e) => handleChange(e)}
                        />
                    </div>
                    <br />
                    <div>
                        <label className="confirmPasswordEngReg" >Confirm Password:</label>
                        <br />
                        {
                            errs.confirmPassword ?
                                <span className="error"> {errs.confirmPassword.message} </span>
                                : null
                        }
                        <input 
                            type="password"
                            name="confirmPassword"
                            size="45"
                            value= {userEngineer.confirmPassword}
                            onChange= {(e) => handleChange(e)}
                        />
                    </div>
                        <br/>
                        <br/>

                    <div>
                        <button className="loginBtn" type="submit">Register</button>
                    </div>
                </div>
                
            </form>
            <br />

            </div>

        </div>
    )
}

export default Register;