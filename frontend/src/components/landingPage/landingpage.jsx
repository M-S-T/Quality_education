import React, { Component } from 'react';
import PropTypes from 'prop-types';
import About from './aboutus';
import Navbar from '../navbarComponent';
import Footer from './footercomponent';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid bg-blue text-white p-5">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <h1>Welcome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, itaque magnam omnis natus ea sapiente, iusto quae officiis aliquid at ullam porro blanditiis voluptatibus harum veniam necessitatibus pariatur aperiam iste?</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-12">
                        <button className="btn btn-primary">Let's go</button>
                    </div>
                    </div>
                </div>
                <About />
                <Footer/>
            </div>
        );
    }
}

Landing.propTypes = {

};

export default Landing;