import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ViewEngineer from '../components/ViewEngineer';

const DelProjects = (props) => {
    const [ allProjects, setAllProjects ] =useState ([]);
    

    useEffect(() => {
        // axios call the route for getALL
        axios.get('http://localhost:8000/api/projects')
        .then((res) => {
            console.log(res.data); // This is the body that we see in Postman's results
            setAllProjects(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, [])

    const deleteProject = (projectId) => {
        axios.delete('http://localhost:8000/api/projects/' + projectId)
            .then((res) => {
                console.log(res.date);
                let filteredProjects = allProjects.filter((oneProject) => {
                    return oneProject._id !== projectId;
                })

                setAllProjects(filteredProjects);
            })
            .catch((err) => {
                console.log(err);
                navigate('/engineers/all');
            })
    }
    
    return(
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
            <Link className="linkHead" to="/engineers/login">
                Logout
            </Link>
            </h1>

            <div className="engDashBoard">
                <h2 className="yourDashboard"> View Current Projects </h2>
                <button className="ViewBtn3" onClick={() => navigate('/engineers/new')}>Create Your Profile</button>
                    <br />
                    <br />
                <table className="TableAll">
                    <tbody>
                        {
                            allProjects.map(( project, index) => (
                                <tr className="TableRow">
                                    <td align="center" >
                                        {project.projectName}
                                    </td>
                                    <td align="center">
                                        <button className="ViewBtn" onClick={() => navigate('/engineers/projects/' + project._id )}>View Project</button>
                                        
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

export default DelProjects;