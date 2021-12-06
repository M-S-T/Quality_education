import React from 'react'
import PropTypes from 'prop-types';

import itachi from "../../static/images/itachi.jpg"

function About(props) {
    return (
        <div className="container w-75 mt-3 border">
            <div className="row py-3 mb-5">
                <div className="col-12 col-md-6">
                    <img src={itachi} alt="People" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6">
                    <h1>About us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint voluptatem dolorem molestiae impedit quisquam totam inventore, assumenda tempore! Eum!</p>
                </div>
            </div>
            <div className="row py-3 mb-5">
                <div className="col-12 col-md-6">
                    <h1>Our Mission</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit temporibus eveniet esse, fuga necessitatibus repudiandae! Laudantium possimus numquam ipsam dolor.</p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={itachi} alt="Our Mission" className="img-fluid"/>
                </div>
            </div>
            <div className="row py-3 mb-5">
                <div className="col-12">
                    <h1>Our partners</h1>
                </div>
                <div className="col-12 d-flex">
                    <div className="col-sm-6 col-12 col-md-3">
                        <img src={itachi} alt="Itachi" className="img-fluid"/>
                    </div>
                    <div className="col-sm-6 col-12 col-md-3">
                        <img src={itachi} alt="Itachi" className="img-fluid"/>
                    </div>
                    <div className="col-sm-6 col-12 col-md-3">
                        <img src={itachi} alt="Itachi" className="img-fluid"/>
                    </div>
                    <div className="col-sm-6 col-12 col-md-3">
                        <img src={itachi} alt="Itachi" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.propTypes = {

}

export default About

