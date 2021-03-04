import React, { Component } from 'react';


class Together extends Component {
    constructor(props) {
        super(props);
        this.state ={
            ages: this.props.ages,
        };
    }

    age = () => {
        this.setState( { 'ages': this.state.ages + 1 } );
    }

    render() {
        return (
            <div>
                <h2> { this.props.revname } </h2>
                <h3>Age: { this.state.ages }</h3>
                <h3>hair Color: { this.props.hair } </h3>
                <button onClick={ this.age }>Birthday Button for { this.props.name }</button>
            </div>
        )
    }
}

export default Together;