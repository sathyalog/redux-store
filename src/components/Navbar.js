import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

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

const styleBadge = {
    position: 'absolute',
    top: '13px',
    right: '32px',
    background: 'transparent',
    fontSize: '8px'
}

class Navbar extends Component {
    render() {
        const {products} = this.props;
        console.log('totalitems',products.items.length)
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
                    <Link to="/product" className="nav-link" style={styleLinks}>All Products &nbsp;<i className="fa fa-th-large" aria-hidden="true"></i></Link>
                </li>
                <li className="nav-item">
        <Link to="/checkout" className="nav-link" style={styleLinks}>Cart <i className="fas fa-cart-plus"></i><span className="badge" style={styleBadge}>{products.items ? products.items.length : 0}</span></Link>
                </li>
                </ul>
                </nav> 
            </div>
        )
    }
}

const mapStateToProps= (state) => ({
    products: state.addToCart
})

export default connect(mapStateToProps)(Navbar)