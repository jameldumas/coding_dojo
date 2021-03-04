import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state ={
            likes: this.props.likes,
            title: this.props.title
        };
    }

    like = () => {
        this.setState( { 'likes': this.state.likes + 1 } );
    }

    render() {
        //this.props is created when we render the component
        const { desc } = this.props;
        return (
            <div className="ProjectStyle">
                <h4>{ this.state.title }</h4>
                <button onClick={ this.like }>Like Project</button>
                <p>Likes: { this.state.likes }</p>
                <p>Description:</p>
                <p>{ desc }</p>
            </div>
        )
    }
}

export default Project;