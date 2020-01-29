import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }

    async componentDidMount() {
        await this.getProducts();
    }
    

    async getProducts(e) {
        const productsReceived = await axios.get('https://firebasestorage.googleapis.com/v0/b/buyforyou-a5fdc.appspot.com/o/products.json?alt=media&token=8a6d0757-478d-4f53-b73d-1245636f7468')
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
        this.setState({
            products: productsReceived,
        });
        console.log(this.state)
    };


    
    render() {
        const {msg} = this.props
        console.log(this.state.products)
        return (
            <div>
                <br/><br/><br/>
                <h1 class="display-4">{msg}</h1>
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
                                                <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="title"><a href="#">{product.name}</a></h3>
                                            <div className="price">Rs.{product.price}
                                            </div>
                                            <a className="add-to-cart" href="">+ Add To Cart</a>
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
    msg: state.message
})

export default connect(mapStateToProps)(Product)

