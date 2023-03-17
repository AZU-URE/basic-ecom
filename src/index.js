import React from "react"
import ReactDom from "react-dom"
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import App from "./App"
import "font-awesome/css/font-awesome.css"


// var element = <button className="btn btn-danger">hello world</button>
ReactDom.render(<App />, document.getElementById("root"))