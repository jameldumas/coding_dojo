import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AllEngineers from './AllEngineers';

const EngineerDetails = (props) => {
    const {id} = props;
    const [ engineer, setEngineer ]  = useState([]);


    useEffect(() => {
        console.log(props);
        axios.get("http://localhost:8000/api/engineers/" + id)
            .then((res) => {
                console.log(res.data);
                setEngineer(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    
    return(
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
            <Link className="linkHead" to="/engineers/login">
                Logout
            </Link>
            </h1>
            <div className="engDashBoard">
                <h2 className="yourDashboard"> {engineer.firstName} &nbsp; {engineer.lastName} </h2>
                <table className="engDashTable">
                    <thead className="engDashTableHead">
                        <td>
                            <b>
                                Languages
                            </b>
                        </td>
                        <td>
                            <b>
                                Bio
                            </b>
                        </td>
                        <td>
                            <b>
                                Frameworks
                            </b>
                        </td>
                    </thead>
                    <br/>
                    <tbody>
                        <td className="td">
                            { engineer.languages && engineer.languages.map(language =>
                                (
                                    <p>{language.name}</p>
                                )) }
                        </td>
                        <td>
                            { engineer.description }
                        </td>
                        <td className="td">
                        { engineer.frameworks && engineer.frameworks.map(framework =>
                                (
                                    <p>{framework.name}</p>
                                )) }
                        </td>
                    </tbody>
                </table>
            

                <br/>
                <br/>
                <br />

            </div>

            
            
        </div>
    )
}

export default EngineerDetails;


    

