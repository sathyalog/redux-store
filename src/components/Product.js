import React, { Component } from 'react'
import {connect} from 'react-redux';
import {welcomeMsg, addToCart, getAllProducts} from './../action';
import axios from 'axios';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const Zoom = cssTransition({
    enter: 'zoomIn',
    exit: 'zoomOut',
    // default to 750ms, can be omitted
    duration: 750,
  });
class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }

    async componentDidMount() {
        const {dispatch} = this.props;
        await this.getProducts();
        await dispatch(welcomeMsg());
        await dispatch(getAllProducts());
    }
    

    async getProducts(e) {
        const productsReceived = await axios.get('https://firebasestorage.googleapis.com/v0/b/redux-store-c6c24.appspot.com/o/products.json?alt=media&token=68c5e12f-1e53-4b5e-b6e8-350faefe3aa7')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
        this.setState({
            products: productsReceived,
        });
    };

    cartHandler =async  (name) => {
        const {dispatch} = this.props;
        await dispatch(addToCart(name));
        this.notify();
    }

    notify = () => toast("🚀 Item added to Cart!", {
        transition: Zoom,
    });

    filterVegetables = (allProds, veg) => {
        const vegs = allProds.filter(prod => {
            return prod.category === veg
        });
        this.setState({
            products: vegs,
        });
    }

    filterFruits = (allProds, fruit) => {
        const fruits = allProds.filter(prod => {
            return prod.category === fruit
        });
        this.setState({
            products: fruits,
        });
    }

    filterNuts = (allProds, nut) => {
        const nuts = allProds.filter(prod => {
            return prod.category === nut
        });
        this.setState({
            products: nuts,
        });
    }

    filterGroceries = (allProds, grocery) => {
        const groceries = allProds.filter(prod => {
            return prod.category === grocery
        });
        this.setState({
            products: groceries,
        });
    }

    showAll = (allProds) => {
        this.setState({
            products: allProds,
        });
    }

    render() {
        
        const {msg,productList} = this.props;
        return (
            <div>
                <ToastContainer autoClose={1500} style={{position:'absolute',top:'60px'}}/>
                <br/><br/><br/>
                <h1 className="display-4">{msg}</h1>
                <br/><br/><br/>
                
                <div class="filter-nav"> <span class="h4">Filter By</span>
                    <button type="button" className="btn padbtn btn-lg btn btn-success active" onClick={() => this.showAll(productList)} data-filter="">All</button>
                    <button type="button" className="btn padbtn btn-lg btn-primary" onClick={() => this.filterVegetables(productList,'vegetables')} data-filter="vegetables">Vegetables</button>
                    <button type="button" className="btn padbtn btn-lg btn-warning" onClick={() => this.filterFruits(productList,'fruits')} data-filter="fruits">Fruits</button>
                    <button  type="button" className="btn padbtn btn-lg btn-secondary" onClick={() => this.filterNuts(productList,'nuts')} data-filter="nuts">Nuts</button>
                    <button  type="button" className="btn padbtn btn-lg btn-info" onClick={() => this.filterGroceries(productList,'groceries')} data-filter="nuts">Groceries</button>
                </div>
                {/* <button className="btn btn-primary" onClick={(e) => this.getProducts(e)}>Get Products</button> */}
                <div className="row">
                    { this.state.products && this.state.products.map(product => {
                            return (
                                <div className="col-md-3 col-sm-6 mb-4" key={product.id}>
                                    <div className="product-grid">
                                        <div className="product-image">
                                            <a href="#">
                                                <img className="pic-1" src={product.image} />
                                            </a>
                                            <ul className="social">
                                                <li><a onClick={(name) => this.cartHandler(product)} data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="title"><a href="#">{product.name}</a></h3>
                                            <div className="price">Rs.{product.price}
                                            </div>
                                            <a className="add-to-cart" onClick={(name) => this.cartHandler(product)} >+ Add To Cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        } 
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    msg: state.welcomeMsg,
    items: state.addToCart,
    productList: state.getAllProducts.data
})

export default connect(mapStateToProps)(Product)

