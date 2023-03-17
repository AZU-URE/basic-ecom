import React, { Component } from "react"

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="m-4 border-bottom"><h3>Login form</h3></div>
                <form className="m-4">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    </div>

                    <button className="btn btn-primary" onClick={this.onLoginClick}>Login</button>
                    {this.state.message}
                </form>
            </div>
        )
    }

    onLoginClick = async () => {
        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET" })
        var body = await response.json()
        console.log(body)
        if (body.length > 0) {
            this.setState({ message: <span className="text-success m-2">Your are logged in</span> })
        } else {
            this.setState({ message: <span className="text-danger">Incorrect credentials</span> })
        }
    }
}