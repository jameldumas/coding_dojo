import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DelEngineer = (props) => {
    const [ allEngineers, setAllEngineers ] =useState ([]);
    

    useEffect(() => {
        // axios call the route for getALL
        axios.get('http://localhost:8000/api/engineers')
        .then((res) => {
            console.log(res.data); // This is the body that we see in Postman's results
            setAllEngineers(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, [])

    const deleteEngineer = (engineerId) => {
        axios.delete('http://localhost:8000/api/engineers/' + engineerId)
            .then((res) => {
                console.log(res.date);
                let filteredEngineers = allEngineers.filter((oneEngineer) => {
                    return oneEngineer._id !== engineerId;
                })

                setAllEngineers(filteredEngineers);
            })
            .catch((err) => {
                console.log(err);
                navigate('/engineers/all');
            })
    }
    
    return(
        <div className="appbackground">
            <h1>Engineers
            </h1>

            <div>
            <table className="TableAll">
                
                <tbody>
                    {
                        allEngineers.map(( engineer, index) => (
                            <tr className="TableRow">
                                <td align="center" >
                                    {engineer.firstName}
                                    &nbsp;
                                    &nbsp;
                                    {engineer.lastName}
                                </td>
                                <td align="center">
                                    <button className="ViewBtn" onClick={() => navigate('/engineers/' + engineer._id )}>View Engineer</button>
                                    &nbsp;&nbsp;
                                    <button className="DelBtn" onClick={() => deleteEngineer(engineer._id)}>Delete</button>
                                </td>
                            </tr>
                            
                        ))
                        }
                </tbody>
            </table>
            <br />
            </div>

            
               
            
        </div>
    )
}

export default DelEngineer;