import './App.css'
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

import {
  Routes,
  Route,
} from "react-router-dom";
import Authorise from "./components/authorise";
import Home from "./components/homecomponent";
import Landing from './components/landingPage/landingpage';
import Universities from './components/categories/universities';
import Semesters from './components/categories/semesters';
import Courses from './components/categories/coureses';
import Profile from './components/profiles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedin : false,
    }
    this.logincallback = this.logincallback.bind(this);
  }

  logincallback = () => {
    this.setState({
      isloggedin: true,
    })
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home isloggedin={this.state.isloggedin}/>} />
        <Route path="/authorise" element={<Authorise callback={this.logincallback}/>} />
        <Route path="/universities" element={<Universities/>} />
        <Route path="/semesters" element={<Semesters/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    )
  }
}

export default App;
