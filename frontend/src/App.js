import './App.css'
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import {
  Routes,
  Route,
} from "react-router-dom";
import Authorise from "./components/authorise";
import Home from "./components/homecomponent";
import Landing from './components/landingPage/landingpage';

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
      </Routes>
    )
  }
}

export default App;
