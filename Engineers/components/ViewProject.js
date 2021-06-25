import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import AllProjects from './AllProjects';

const ProjectDetails = (props) => {
    const {id} = props;
    const [ project, setProject ]  = useState([]);



    useEffect(() => {
        console.log(props);
        axios.get("http://localhost:8000/api/projects/" + id)
            .then((res) => {
                console.log(res.data);
                setProject(res.data);
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
                <h2 className="yourDashboard"> {project.projectName} </h2>
                <div>
                    <div className="viewMiddle">
                        <div className="viewTop">
                            Start Date
                            <p><b> { project.projectStartDate } </b></p>
                            <br />
                            <br />
                            <br />
                            <span className="ProjCode">Languages Needed</span>
                             { project.languagesNeeded && project.languagesNeeded.map(language => 
                                (
                                    <p><b>{ language.name }</b></p>
                                )) } 
                        </div>
                        <div className="viewTop">
                            Project Lead
                            <p><b> { project.projectLead } </b></p>
                            <br />
                            <br />
                            <br />
                            <span className="ProjCode">Frameworks Needed</span>
                                { project.frameworksNeeded && project.frameworksNeeded.map(framework => 
                                    (
                                        <p><b>{ framework.name }</b></p>
                                    )) }
                        </div>
                    </div>
                </div>
                Description
                <br />
                <br />
                <b>{ project.description }</b>
                <br/>
                <br/>
                <br />
                <button className="ViewBtn3" onClick={() => navigate('/engineers/projects_view2')}>View Project List</button>  
                <button className="ViewBtn3" onClick={() => navigate('/engineers/new')}>Create A Profile</button>                      
            </div>

            
            
        </div>
    )
}

export default ProjectDetails;


    
