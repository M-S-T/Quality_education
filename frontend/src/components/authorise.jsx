import React, { Component } from "react";

class Authorise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
        }
        this.handleclick = this.handleclick.bind(this);
    }
    handleclick = e => {

        if (e.target.className === "signup") {
            this.setState({
                isLogin: false,
            })
        }
        else if (e.target.className === "login") {
            this.setState({
                isLogin: true,
            })
        }
    }

    render() {
        return (
            <div className="mt-5">
                { this.state.isLogin ? <LoginForm handleclick={this.handleclick}/> : <SignupForm handleclick={this.handleclick}/>}
            </div>
        )
    }
}

const LoginForm = (props) => {
    return (
        <form className="container col-12 col-md-6 bg-dark text-white p-5">
            <div className="mb-3">
                <h1>Login</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
            <div className="mb-3 d-flex align-items-center justify-content-around" onClick={props.handleclick}>
                <span>Forgot password ?</span>
                <span className="signup">Don't have an account ?</span>
            </div>
        </form>
    )
}

const SignupForm = (props) => {
    return (
        <form className="container col-12 col-md-6 bg-dark text-white p-5">
            <div className="mb-3">
                <h1>Signup</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
            <div className="mb-3 d-flex align-items-center justify-content-around" onClick={props.handleclick}>
                <span className="login">Already have an account ?</span>
            </div>
        </form>
    )
}

export default Authorise;