import React, { Component } from "react"
const MAX = 10
const MIN = 0
export default class Product extends Component {
    state = { currProduct: this.props.product }
    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-4">
                    <div className="card-body">
                        <h4 className="card-title">#{this.props.id} {this.props.name}
                            <i className="fa fa-trash float-end cursor" onClick={() => { this.props.onDelete(this.state.currProduct) }} /> </h4>
                        <h5 className="card-subtitle border-top pt-4">${this.props.cost}</h5>
                    </div>
                    <div className="card-footer">
                        <div className="float-start">
                            <span className="mt-2">{this.props.quantity} </span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.state.currProduct, MAX) }}>+</button>
                                <button className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.state.currProduct, MIN) }}>-</button>
                            </div>
                        </div>
                        <div className="float-end">
                            {this.props.children}
                        </div>
                        {/* <button className="btn btn-danger" onClick={() => { console.log(this.props.product) }}></button> */}
                    </div>
                </div>
            </div>
        )
    }
}