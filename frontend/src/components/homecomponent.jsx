import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render()
    {
        return(
            <div>
                <h1>This is home page.</h1>
                <Link to="/authorise">Authorise</Link>
            </div>
        )
    }
}

export default Home;