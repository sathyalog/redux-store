import React from 'react'

function Navbar() {
    return (
        <div>
             <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <ul class="navbar-nav mr-auto">
            <a class="navbar-brand" href="/"><i class="fas fa-home"></i> Online Store</a>
            </ul>
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/product">Products</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/checkout"><i class="fas fa-cart-plus"></i></a>
            </li>
            </ul>
            </nav> 
        </div>
    )
}

export default Navbar
