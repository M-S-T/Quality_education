import { Component } from "react";
import { Link } from "react-router-dom"
import PropTypes from "prop-types";

import logo from "../static/images/favicon.ico";

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: true,
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo} alt="Quality Education" width="30" height="24" className="d-inline-block align-text-top" />
                        Quality Education
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {this.state.isAuthorized &&
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/subjects" className="nav-link">Subjects</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Universities
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/universities">Universities</Link></li>
                                        <li><Link className="dropdown-item" to="/semesters">Semester</Link></li>
                                        <li><Link className="dropdown-item" to="/courses">Courses</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        }
                        {this.state.isAuthorized === false ?
                            <div className="d-flex">
                                <button type="button" className="btn text-primary mx-3">Login</button>
                                <button type="button" className="btn btn-primary mx-3">Signup</button>
                            </div>
                            :
                            <div>
                                <Link to="/profile"><span className="fas fa-user-circle h4 mb-0 text-white"></span></Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    isAuthorized: PropTypes.bool
}

export default Navbar;