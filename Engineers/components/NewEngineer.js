import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate, redirectTo } from '@reach/router';
import Select from 'react-select';




const NewEngineer = (props) => {
    const {id} = props;
    const [ newEngineer, setNewEngineer ] = useState({
        firstName: "",
        lastName: "",
        description: "",
        languages: [],
        frameworks: [],
    })

    const languages = [
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

    const frameworks = [
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
    ]

    const [ errors, setErrors ] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/engineers', newEngineer)
            .then((res) => {
                console.log(res.data);
                navigate( "/engineers/projects_view2");
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
        

        // create a copy of the entire hero object and puts the copy in updatedHero
        let updatedEngineer = { ...newEngineer};
        updatedEngineer[inputName] = inputValue;

        setNewEngineer(updatedEngineer);
    }

    const selectLChange = selectedOption => {
        console.log(selectedOption);
        const languages = selectedOption.map(lang => ({name:lang.value}))
        console.log(languages);
        setNewEngineer({...newEngineer, languages: languages})
        console.log(newEngineer.languages);
    }

    const selectFChange = selectedOption => {
        console.log(selectedOption);
        const frameworks = selectedOption.map(frame => ({name: frame.value}))
        console.log(frameworks);
        setNewEngineer({...newEngineer, frameworks: frameworks})
        console.log(newEngineer.frameworks);
    }
    
    return(        
        <div className="appbackground">
            <h1 className="appHeaderInside">Engineers
                <Link className="linkHead" to="/engineers/login">
                    Logout
                </Link>
            </h1>
            <div className="engDashBoard">
                <h2 className="yourDashboard"> Your Information
                </h2>
                    <form onSubmit={submitHandler}>
                        <div className="detailwrapper">

                            <div className="label">
                                <div>
                                    <label>First Name: </label><br />
                                    <br />
                                    {/* {
                                        errors.firstName ?
                                        <span className="error">{errors.firstName.message}</span>
                                        : null
                                    } */}
                                    <input 
                                
                                        style={{ borderColor: "black", borderWidth: 2}}
                                        type="text"
                                        name="firstName"
                                        size="10"
                                        value={newEngineer.firstName}
                                        onChange={ (e) => inputChange(e) }
                                     />
                                </div>
                                <br />
                                <br/>

                                <div>
                                    <label>Last Name: </label><br />
                                    <br />
                                    {/* {
                                        errors.lastName ?
                                        <span className="error">{errors.lastName.message}</span>
                                        : null
                                    } */}
                                    <input 
                                        style={{ borderColor: "black", borderWidth: 2}}
                                        type="text"
                                        name="lastName"
                                        size="15"
                                        value={newEngineer.lastName}
                                        onChange={ (e) => inputChange(e) }
                                    />
                                </div>
                                <br />
                                <br />
                                
                                
                            </div>

                            <div>
                            <div>
                                    <label>Your Bio: </label><br />
                                    <br />
                                    {/* {
                                        errors.description ?
                                        <span className="error">{errors.description.message}</span>
                                        : null
                                    } */}
                   
                                    <textarea
                                        style={{ borderColor: "black", borderWidth: 2}}
                                        type="text"
                                        name="description"
                                        rows="8"
                                        cols="70"
                                        value={newEngineer.description}
                                        onChange={ (e) => inputChange(e) }
                                    />
                                </div>
                                <br />
                                <br />
                            </div>

                            <div>
                                <div>
								    <label>Languages: </label><br />
								    <br />
								    {/* {
									    errors.languages ?
                                        <span className="error">{errors.languages.message}</span>
                                        : null
								    } */}
								    <Select
                                        isMulti={true}
									    style={{ borderColor: "black", borderWidth: 2}}
									    placeholder="Languages"
                                        isSearchable
                                        autoFocus
									    onChange={ selectLChange }
                                        options= { languages }
                                        setValue= {newEngineer.languages}
									    >
                                        {/* {
                                            languages.map((languages, index) => (
                                            <option value={languages} key={index}>{languages}</option> 
                                            ))
                                        } */}
								    </Select>
							    </div>
							    <br />
							    <br />
							    <br />
                      
							    <div>
								    <label>Frameworks: </label><br />
								    <br />
								    {/* {
									    errors.frameworks ?
                                        <span className="error">{errors.frameworks.message}</span>
                                        : null
								    } */}
								    <Select
                                        isMulti={true}
									    style={{ borderColor: "black", borderWidth: 2}}
									    placeholder="Frameworks"
                                        isSearchable
                                        autoFocus
									    onChange={ selectFChange }
                                        options= { frameworks }
                                        setValue= {newEngineer.frameworks}
									    >
                                        {/* {
                                            frameworks.map((frameworks, index) => (
                                            <option value={frameworks} key={index}>{frameworks}</option> 
                                            ))
                                        } */}
								    </Select>
							    </div>
                            </div>
                            <div>
                                <br/>
                                <br/>
                                <button> Save</button>
                            </div>
                        </div>
                    </form>
                            
                    <br/>
                    <br/>
            </div>
              
        </div>
        
    )
}

export default NewEngineer;