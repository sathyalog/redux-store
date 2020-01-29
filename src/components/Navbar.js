import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <ul className="navbar-nav mr-auto">
                <a className="navbar-brand" href="/"><i className="fas fa-home"></i> Online Store</a>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/product">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/checkout"><i className="fas fa-cart-plus"></i></a>
                </li>
                </ul>
                </nav> 
            </div>
        )
    }
}

export default Navbar