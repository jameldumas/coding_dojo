import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllProjects = (props) => {
    const [ allProjects, setAllProjects ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
        .then((res) => {
            console.log(res.data);
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
                navigate('/');
            })
    }
    
    return(
        <div>
            <table className="TableAll">
                        <tbody>
                            {
                                allProjects.map(( project, index) => (
                            <tr className="TableRow">
                                <td className="TDdata" > 
                                    <button className="ViewBtn2" onClick={() => navigate('/engineers/project/' + project._id )}>{project.projectName} </button> 
                                </td>
                                <td className="TDdata" >
                                { project.projectLead }
                                </td>
                            </tr>
                            ))
                            }
                        </tbody>
                    </table>
        </div>
    )
}

export default AllProjects;