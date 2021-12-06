import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    constructor(props)
    {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="container-fluid bg-blue text-white p-5 text-center">
                An open source project for students to learn and share their knowledge.
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;