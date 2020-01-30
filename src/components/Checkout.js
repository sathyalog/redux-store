import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Checkout extends Component {

    render() {
        const {products} = this.props;
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
                                return (
                                    
                                                        <tr>
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
                                                                <input type="number" className="form-control text-center" value="1" />
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
                                    <td><Link to="/"><a className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></Link></td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center"><strong>Total $150.00</strong></td>
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
    products: state.addToCart
})

export default connect(mapStateToProps)(Checkout);