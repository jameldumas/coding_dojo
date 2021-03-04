import React, { Component} from 'react';

class PersonCard extends Component {
    render(){
        const { firstName, lastName, age, hairColor} =this.props;
        return(
            <div>
            <h1>{lastName}{firstName}</h1>
            <h2>{age}</h2>
            <h3>{hairColor}</h3>
            </div>
        );
    }
}

export default PersonCard;