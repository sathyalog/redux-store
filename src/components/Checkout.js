import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setQuantity} from './../action';

class Checkout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 1
        }
    }
    
    quantityHandler = (e,prod) => {
        e.preventDefault();
        const quan = parseInt(e.target.value);
        const {dispatch} = this.props;
        dispatch(setQuantity(quan,prod));
    }

    render() {
        const {products, quantity} = this.props;
        const items = products.items;
        
        return (
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                            <thead>
                                <tr>
                                    <th style={{width:'50%'}}>Product</th>
                                    <th style={{width:'10%'}}>Price</th>
                                    <th style={{width:'8%'}}>Quantity</th>
                                    <th style={{width:'22%'}} className="text-center">Subtotal</th>
                                    <th style={{width:'10%'}}></th>
                                </tr>
                            </thead>
                            <tbody>
                             { items && items.map(product => {
                                if(quantity.product && product.id === quantity.product.id) {
                                    product.quantity = quantity.product.quantity
                                }
                                return (
                                            <tr key={product.id}>
                                                <td data-th="Product">
                                                    <div className="row">
                                                        <div className="col-sm-2 hidden-xs"><img src={product.image} alt="..." className="img-responsive"/></div>
                                                        <div className="col-sm-10">
                                                        <h4 className="nomargin">{product.name}</h4>
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price">Rs.{product.price}</td>
                                                <td data-th="Quantity">
                                                    <input type="number" className="form-control text-center" onChange={(e) => this.quantityHandler(e,product)} value={product.quantity} />
                                                </td>
                                                <td data-th="Subtotal" className="text-center">{product.price}</td>
                                                <td className="actions" data-th="">
                                                    <button className="btn btn-info btn-sm"><i className="fa fa-sync"></i></button>
                                                    <button className="btn btn-danger btn-sm"><i className="fa fa-trash-alt"></i></button>								
                                                </td>
                                            </tr>
                                                    
                                    )
                                }
                            )
                            }
                            </tbody>
                            <tfoot>
                                <tr className="visible-xs">
                                    <td className="text-center"><strong>Total 1.99</strong></td>
                            
                                </tr>
                                <tr>
                                    <td><Link to="/product" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center"><strong>Total Rs.180.00</strong></td>
                                    <td><a href="https://www.paypal.com/webapps/shoppingcart?mfid=1546373779156_cb91e3a2b2dc7&flowlogging_id=cb91e3a2b2dc7#/checkout/shoppingCart" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
        )
    }
}

const mapStateToProps = (state) =>({
    msg: state.welcomeMsg,
    products: state.addToCart,
    quantity: state.setQuantity
})

export default connect(mapStateToProps)(Checkout);