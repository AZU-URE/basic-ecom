import React, { Component } from "react"
import Product from "./Product"

export default class ShoppingCart extends Component {

    state = {
        products: []
    }

    render() {
        return (
            <div className="container-fluid">
                <h2 className="m-2">Shopping Cart</h2>
                <div className="row">
                    {this.state.products.map((prod, index) => {
                        return (
                            <Product
                                key={prod.id}
                                id={prod.id}
                                name={prod.name}
                                cost={prod.cost}
                                quantity={prod.quantity}
                                product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                                <button className="btn btn-primary">Buy Now</button></Product>
                        )
                    })}
                </div>
            </div>
        )
    }

    componentDidMount = async () => {
        var response = await fetch("http://localhost:5000/products", { method: "GET" })
        // console.log(response);
        var prod = await response.json()
        // console.log(prod);
        this.setState({ products: prod })


    }

    handleIncrement = (prod, max) => {
        var prodArray = [...this.state.products]
        let index = prodArray.map(object => object.id).indexOf(prod.id)
        var count = prodArray[index].quantity
        if (count < max) {
            count++
        }
        prodArray[index].quantity = count
        this.setState({ products: prodArray })
        // console.log(index)
    }
    handleDecrement = (prod, min) => {
        var prodArray = [...this.state.products]
        let index = prodArray.map(object => object.id).indexOf(prod.id)
        var count = prodArray[index].quantity
        if (count > min) {
            count--
        }
        prodArray[index].quantity = count
        this.setState({ product: prodArray })
    }

    handleDelete = (prod) => {
        var prodArray = [...this.state.products]
        let index = prodArray.map(object => object.id).indexOf(prod.id)
        if (window.confirm("Are you sure you want to delete")) {
            prodArray.splice(index, 1)
            this.setState({ products: prodArray })
        }

    }
}