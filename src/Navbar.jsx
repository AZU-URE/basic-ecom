import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.css"

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-expand-lg bg-body-tertiary highlight">
            <div className="container-fluid">
                <a className="navbar-brand heading" href="/#">E-com</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" >
                        <Link to="/" className="nav-link " style={{ color: "white" }} aria-current="page" >Home</Link>
                        <Link to="/dashboard" className="nav-link " style={{ color: "white" }} aria-current="page" >Dashboard</Link>
                        <Link to="/customers" className="nav-link " style={{ color: "white" }} aria-current="page" >Customers List</Link>
                        <Link to="/cart" className="nav-link " style={{ color: "white" }} aria-current="page" >Shopping Cart</Link>

                    </div>
                </div>
            </div>
        </nav >



    }
}

export default Navbar