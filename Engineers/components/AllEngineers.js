import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AllProjects from './AllProjects';

const AllEngineers = (props) => {
    const [ allEngineers, setAllEngineers ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/engineers')
        .then((res) => {
            console.log(res.data);
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
                navigate('/manager/dashboard/');
            })
    }
    
    return(
                <div className="engDashBoard3">
                    <h2 className="manDashboard"> Available Engineers </h2>
                    <table className="TableAll">
                        <tbody>
                            {
                                allEngineers.map(( engineer, index) => (
                                <tr className="TableRow">
                                    <td className="TDdata" >
                                        <p> 
                                        <button className="ViewBtn2" onClick={() => navigate('/engineers/manager_view/dashboard/' + engineer._id )}>
                                            {engineer.firstName} 
                                            &nbsp;
                                            &nbsp;
                                            { engineer.lastName } </button> 
                                            
                                        </p>
                                    </td>
                                    <td className="TDdata">
                                        
                                        
                                            {engineer.languages && engineer.languages.map(language =>
                                                (
                                                    <p>{language.name}</p>
                                                ))}
                                        
                                    </td>  
                                    <td className="TDdata" >
                                        
                                            {engineer.frameworks && engineer.frameworks.map(framework =>
                                                (
                                                    <p>{framework.name}</p>
                                                ))}
                                        
                                    </td>
                                    <td className="TDdescription">
                                        <p> 
                                            {engineer.description} 
                                        </p>    
                                    </td> 
                                </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
      
    )
}

export default AllEngineers;