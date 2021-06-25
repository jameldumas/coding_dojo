import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate, redirectTo } from '@reach/router';
import Select from 'react-select';


const NewProject = (props) => {
    const {id} = props;
    const [ newProject, setNewProject ] = useState({
        projectName: "",
        projectStartDate: "",
        languagesNeeded: [],
        frameworksNeeded: [],
        projectLead: "",
        description: "",
    })

    const languagesNeeded = [
        { value: 'Delphi', label: 'Delphi' },
        { value: 'SQL', label: 'SQL' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Java', label: 'Java' },
        { value: 'C#', label: 'C#' },
        { value: 'C++', label: 'C++' },
        { value: 'CSS', label: 'CSS' },
        { value: 'R', label: 'R' },
        { value: 'Ruby', label: 'Ruby' },
        { value: 'Python', label: 'Python' }
    ]

    const frameworksNeeded = [
        { value: 'Django', label: 'Django' },
        { value: 'Delphi', label: 'Delphi' },
        { value: 'Flask', label: 'Flask' },
        { value: 'Rails', label: 'Rails' },
        { value: 'Spring', label: 'Spring' },
        { value: 'SQL', label: 'SQL' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Java', label: 'Java' },
        { value: 'C#', label: 'C#' },
        { value: 'C++', label: 'C++' },
        { value: 'CSS', label: 'CSS' },
        { value: 'R', label: 'R' },
        { value: 'Ruby', label: 'Ruby' },
        { value: 'MongoDB', label: 'MongoDB' },
        { value: 'Python', label: 'Python' }
    ];

    

    const [ errors, setErrors ] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(newProject)

        axios.post('http://localhost:8000/api/projects', newProject)
            .then((res) => {
                console.log(res.data);
                navigate( "/engineers/del_view");
            })
            .catch((err) => {
                console.log(JSON.stringify(err));
                setErrors(err.response.data.errors);
            })
    }

    const inputChange = (e) => {
        console.log("input name: " + e.target.name);
        const inputName = e.target.name;
        console.log("input value: " + e.target.value);
        const inputValue = e.target.value;
        

        
        let updatedProject = { ...newProject};
        updatedProject[inputName] = inputValue;

        setNewProject(updatedProject);
    }

    const selectChange = selectedOption => {
        console.log(selectedOption);
        const languages = selectedOption.map(lang => ({name:lang.value}))
        console.log(languages);
        setNewProject({...newProject, languagesNeeded: languages})
        console.log(newProject.languagesNeeded);
    }

    const selectFChange = selectedOption => {
        console.log(selectedOption);
        const frameworks = selectedOption.map(frame => ({name: frame.value}))
        console.log(frameworks);
        setNewProject({...newProject, frameworksNeeded: frameworks})
        console.log(newProject.frameworksNeeded);
    }
    
    return(        
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
                <Link className="linkHead" to="/engineers/login">
                    Logout
                </Link>
            </h1>
            <div className="engDashBoard">
                <h2 className="yourDashboard"> Project
                </h2>
                    <form onSubmit={submitHandler}>
                        <div className="detailwrapper">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Project Name:
                                        </td>
                                        &nbsp;
                                        <td>
                                        
                                        <input 
                                    
                                            style={{ borderColor: "black", borderWidth: 2}}
                                            type="text"
                                            name="projectName"
                                            size="15"
                                            value={newProject.projectName}
                                            onChange={ (e) => inputChange(e) }
                                        />
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            Project Start Date:
                                        </td>
                                        &nbsp;
                                        <td>
                                            
                                            <input 
                                                style={{ borderColor: "black", borderWidth: 2}}
                                                type="date"
                                                name="projectStartDate"
                                                size="15"
                                                value={newProject.projectStartDate}
                                                onChange={ (e) => inputChange(e) }
                                            />
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            Project Lead:
                                        </td>
                                        &nbsp;
                                        <td>
                                            
                        
                                            <input
                                                style={{ borderColor: "black", borderWidth: 2}}
                                                type="text"
                                                name="projectLead"
                                                size="15"
                                                value={newProject.projectLead}
                                                onChange={ (e) => inputChange(e) }
                                            />
                                        </td>
                                    </tr>
                                    
                                    <br/>
                                    <tr>
                                        <td>
                                            <label>Languages Needed: </label><br />
								            <br />
                                            
                                            <Select
                                                isMulti={true}
                                                style={{ borderColor: "black", borderWidth: 2}}
                                                placeholder="Languages"
                                                isSearchable
                                                autoFocus
                                                onChange={selectChange}
                                                options= {languagesNeeded}
                                                setValue={newProject.languagesNeeded}
                                                >
                                                {/* {
                                                    languagesNeeded.map((languagesNeeded, index) => (
                                                    <option value={languagesNeeded} key={index}>{languagesNeeded}</option> 
                                                    ))
                                                } */}
                                            </Select>
                                        </td>
                                        &nbsp;
                                        <td>
                                            <label>Frameworks Needed: </label><br />
								    <br />
								    
								    <Select
                                        isMulti={true}
									    style={{ borderColor: "black", borderWidth: 2}}
									    options ={frameworksNeeded}
                                        placeholder="Frameworks"
                                        isSearchable
                                        autoFocus
									    onChange={selectFChange}
                                        setValue={newProject.frameworksNeeded}
									    >
                                        {/* {
                                            frameworksNeeded.map((frameworksNeeded, index) => (
                                            <option value={frameworksNeeded} key={index}>{frameworksNeeded}</option> 
                                            ))
                                        } */}
								    </Select>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            Description:
                                        </td>
                                        &nbsp;
                                        <td>
                                            
                        
                                            <textarea
                                                style={{ borderColor: "black", borderWidth: 2}}
                                                type="text"
                                                name="description"
                                                rows="2"
                                                cols="40"
                                                value={newProject.description}
                                                onChange={ (e) => inputChange(e) }
                                            />
                                        </td>
                                    </tr>
                                    <br/>
                                    <br/>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                        <button> Save</button>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                            
                    <br/>
                    <br/>
            </div>
              
        </div>
        
    )
}

export default NewProject;