import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import NewEngineer from './NewEngineer';


const EditEngineer = (props) => {
    const { id } = props;

    const [ editEngineer, setEditEngineer ] = useState({});
    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/engineers/" + id)
            .then((res) => {
                console.log(res.data);
                setEditEngineer(res.data);
            })
            .catch((err) => {
                console.log(err);
                navigate("/engineers/:id/dashboard");
            })
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        

        axios.put('http://localhost:8000/api/engineers/' + id, editEngineer)
            .then((res) => {
                console.log(res.data);
                navigate("/engineers/" + id);
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <NewEngineer
                submitHandler={submitHandler}
                errors={ errors }
                engineer = { editEngineer}
                setEngineer= { setEditEngineer }
            />
                
        </div>
        
    )
}


export default EditEngineer;