import React, { Component } from 'react'
import {connect} from 'react-redux';
import {welcomeMsg, addToCart} from './../action';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        await dispatch(welcomeMsg())
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

    notify = () => toast("Item added to Cart !", {
        position: toast.POSITION.TOP_RIGHT
    });

    render() {
        
        const {msg,items} = this.props
        return (
            <div>
                <ToastContainer autoClose={1500} />
                <br/><br/><br/>
                <h1 className="display-4">{msg}</h1>
                <br/><br/><br/>
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
    items: state.addToCart
})

export default connect(mapStateToProps)(Product)

