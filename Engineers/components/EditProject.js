import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import NewProject from './NewProject';

const EditProject = (props) => {
    const { id } = props;

    const [ editProject, setEditProject ] = useState({});
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects/" + id)
            .then((res) => {
                console.log(res.data);
                setEditProject(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/engineers/all");
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/projects/' + id, editProject)
            .then((res) => {
                console.log(res.data);
                navigate("/engineers/project/" + id);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors);
            })
    }

    const deleteProject = () => {
        axios.delete('http://localhost:8000/api/projects/' + id)
            .then((res) => {
                console.log(res.date);
                navigate('/engineers/del_view');
            })
            .catch((err) => {
                console.log(err);
                navigate('/engineers/all');
            })
    }
    return (
        <div>
            
            
            <NewProject
            /> 
            <br></br>
            <br></br>
            <button onClick={ deleteProject }>Delete Project</button><br /><br />
            <button onClick={() => navigate('/engineers/del_view')}>Control View</button>   
            <button onClick={() => navigate('/engineers/all')}>List View</button>   
        </div>
    )
}

export default EditProject;