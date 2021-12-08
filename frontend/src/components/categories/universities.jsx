import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../navbarComponent';
import { COLLEGES } from '../../static/data';

class Universities extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        // const url = ""
        // axios()
    }


    render() {
        return (
            <>
                <Navbar />
                <div className="container-fluid my-3 px-2">
                    <div className="row">
                        <RenderUniv/>
                    </div>
                </div>
            </>
        );
    }
}

const RenderUniv = props => {
    return (
        COLLEGES.map((college, index) => {
            return (
                    <div class="card col-12 col-sm-6 col-md-3 bg-success text-white" key={index}>
                        <div class="card-body">
                            <h5 class="card-title"><span>{college["S. No."]}. </span>{college["University Name"]}</h5>
                            <h6 class="card-subtitle mb-2">{college["College Name"]}</h6>
                            <p>{college["College Type"]}</p>
                            <p>{college["State Name"]}</p>
                            <p>{college["District Name"]}</p>
                        </div>
                    </div>
            )
        })
    )
}

Universities.propTypes = {

};

export default Universities;