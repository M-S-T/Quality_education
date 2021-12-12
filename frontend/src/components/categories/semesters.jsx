import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Semesters extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sem_count : 8,
        }
    }

    

    render() {
        return (
            <div>
                <RenderSem count={this.state.sem_count}/>
            </div>
        );
    }
}

const RenderSem = props => {
    return (
        <h1>semester1</h1>
    )
}

Semesters.propTypes = {
    sem_count : PropTypes.number,
};

export default Semesters;