import React from 'react';
import './Project.css';

const PersonCard2 = props => {
    return (
        <div className="PC2">
            <h1>{ props.lastName}, { props.firstName } </h1>
            <p> Age: { props.age } </p>
            <p> Hair Color: { props.hairColor} </p>
        </div>
    );
}

export default PersonCard2;