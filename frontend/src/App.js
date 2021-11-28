import React, { Component } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";
import Authorise from "./components/authorise";
import Home from "./components/homecomponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/authorise" element={<Authorise/>} />
      </Routes>
    )
  }
}

export default App;
