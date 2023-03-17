import React, { Component } from "react";
import Navbar from "./Navbar";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import CustomersList from "./CustomersList"
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom"

export default class App extends Component {

    render() {

        return (<BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact Component={Login} />
                <Route path="/dashboard" exact Component={Dashboard} />
                <Route path="/customers" eact Component={CustomersList} />
                <Route path="cart" exact Component={ShoppingCart} />
                <Route path="*" Component={NotFound} />
            </Routes>
        </BrowserRouter>
        )
    }

}