import React, { Component } from "react";

export default class CustomersList extends Component {
    state = {
        Title: "Customer", Count: "1", customer: [
            { id: 1, name: "john", phon: "123 - 456", address: { city: "new Delhi" }, photo: "https://picsum.photos/id/1001/80" },
            { id: 2, name: "ceina", phon: "132 - 456", address: { city: "new jersey" }, photo: "https://picsum.photos/id/1002/80" },
            { id: 3, name: "jay", phon: "123 - 546", address: { city: "newYork" }, photo: "https://picsum.photos/id/1003/80" },
            { id: 4, name: "joker", phon: null, address: { city: "london" }, photo: "https://picsum.photos/id/1004/80" },
        ]
    }
    onRefreshClick = () => {
        this.setState({ Count: 2 })
    }

    render() {
        return (
            <React.Fragment>
                <div className="border-buttom m-1 p-1">{this.state.Title}</div>
                <h4><span className="badge bg-secondary m-2">{this.state.Count}</span></h4>
                <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>photo</th>
                            <th>name</th>
                            <th>phone</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customer.map((cust, index) => {
                            return (<tr key={cust.id}>
                                <td className="textColor">{cust.id}</td>
                                <td><img src={cust.photo} alt="" />
                                    <div><button className="btn btn-sm btn-primary" onClick={() => this.changePicture(cust, index)}>change picture</button></div></td>
                                <td>{cust.name}</td>
                                <td>{cust.phon ? cust.phon : <div className="bg-warning text-center">not available</div>}</td>
                                <td>{cust.address.city}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

    customerNameStyle = (custName) => {
        if (custName.startsWith("j")) {
            return { backgroundColor: "red" }
        } else {
            return { backgroundColor: "green" }
        }
    }

    changePicture = (cust, index) => {
        console.log(cust)
        // console.log(index)
        var custArray = this.state.customer
        custArray[index].photo = "https://picsum.photos/id/103/80"
        this.setState({ customer: custArray })
    }
}