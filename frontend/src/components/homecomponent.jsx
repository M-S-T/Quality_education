import { Component } from "react";
import Navbar from "./navbarComponent";
import RenderPosts from "./renderposts";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorised : true
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Navbar isAuthorised={this.state.isAuthorised}/>
                <RenderPosts/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <header className="p-3 text-center bg-blue text-white">
            <h1>Quality Education</h1>
        </header>
    )
}

export default Home; 