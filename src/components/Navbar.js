import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styleBrand = {
    color: '#ffffff',
    cursor: 'pointer'
}

const styleLinks = {
    color: '#ffffff',
    cursor:'pointer',
    marginLeft:'10px',
    marginRight: '20px'

}

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to="/" className="navbar-brand" style={styleBrand}><i className="fas fa-home"></i> Online Store</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/product" className="nav-link" style={styleLinks}>Products</Link>
                </li>
                <li className="nav-item">
                    <Link to="/checkout" className="nav-link" style={styleLinks}><i className="fas fa-cart-plus"></i></Link>
                </li>
                </ul>
                </nav> 
            </div>
        )
    }
}

export default Navbar