import React, { useState } from "react";
import axios from "axios";
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const Login = () => {
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [errorMessage, setErrorMessage] = useState ("");

    const login = event => {
        event.preventDefault();
        axios.post("http://localhost:8000/api/userEngineer/login", {
            email: email,
            password: password,
        }
        )
        .then((res) => {
            console.log(res.data);
            navigate("/engineers/projects_view");
        })
        .catch(err => {
            console.log(err.response);
            setErrorMessage(err.response.data.message);
        });
    };

    return (
        <div>
            <h1 className="appHeaderInside">Engineers
            <Link className="linkHead2" to="/engineers/login">
                Engineer Login
            </Link>
            <Link className="linkHead" to="/engineers/management/login">
                Management Login
            </Link>
            </h1>
            <div className="engDashBoard2">
                <h2 className="yourDashboard"> Login</h2>
                <p className="error"> { errorMessage ? errorMessage : "" }</p>
                <form onSubmit={login}>
                    <div className="detailwrapper" >
                        
                            <div>
                                <label><b>Email: </b></label>
                                
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div>
                                <label><b>Password:  </b></label>
                                
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div>
                                <button className="loginBtn" type="submit" >Login</button>

                            </div>
                        
                    </div>
                    

                </form>
                <br/>

            </div>
        </div>
    );
};

export default Login;