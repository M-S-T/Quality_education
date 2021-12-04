import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbarComponent";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <h1>This is home page.</h1>

            </div>
        )
    }
}

const Header = (props) => {
    return (
        <header className="p-3 text-center bg-dark text-white">
            <h1>Quality Education</h1>
            {/* {!props.isloggedin ?
                <button className="btn btn-success"><Link to="/authorise" className="text-white text-decoration-none">Authorise</Link></button>
                : <h1>Logged in</h1>} */}
        </header>
    )
}

export default Home; 