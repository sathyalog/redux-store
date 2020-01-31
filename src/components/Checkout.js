import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setQuantity,productTotal, removeFromCart} from './../action';
import PaypalBtn from 'react-paypal-checkout';

class Checkout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quantity: 1
        }
    }
    
    quantityHandler = async (e,prod) => {
        e.preventDefault();
        const quan = parseInt(e.target.value);
        const {dispatch} = this.props;
        await dispatch(setQuantity(quan,prod));
        this.updateProductTotal(prod);
    }

    updateProductTotal = (prod) => {
        const { quantity, dispatch } = this.props;
        const price = quantity.product && quantity.product.price;
        const prodQuan = quantity.product && quantity.product.quantity;
        const total = price * prodQuan;
        dispatch(productTotal(prod,total));
    }

    removeHandler = async (e,prod) => {
        e.preventDefault();
        const { dispatch } = this.props;
        await dispatch(removeFromCart(prod));
        this.updateProductTotal(prod);
    }

    render() {
        const client = {
            sandbox: 'Acar5qjKz_ASZAAdd-QK6UPagP8XF8Xd41BF8qAp7r8puu3epqmKZqRR52OrKYtnPAbkOSrjE2i-JP8Y',
        }	
        const {products, quantity, productTotal} = this.props;
        const items = products.items;
        const grandTotal = items && items.reduce((a,b) => a + b.price * b.quantity,0);
        console.log(grandTotal);
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
                                if(productTotal.product && product.id === productTotal.product.id) {
                                    product.subTotal = productTotal.product.productTotal
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
                                                <td data-th="Subtotal" className="text-center">{product.subTotal ? product.subTotal : product.price}</td>
                                                <td className="actions" data-th="">
                                                    <button className="btn btn-danger btn-sm" onClick={(e) => this.removeHandler(product)}><i className="fa fa-trash-alt"></i></button>								
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
                                    <td><Link to="/" className="btn btn-success"><i className="fa fa-angle-left"></i> Continue Shopping</Link></td>
                                    <td colSpan="2" className="hidden-xs"></td>
                                    <td className="hidden-xs text-center"><strong>Total Rs.{grandTotal}</strong></td>
                                    <td><PaypalBtn client={client} currency={'USD'} total={grandTotal} /> </td> {/* <span id="paypal-button-container"></span> */}
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
    quantity: state.setQuantity,
    productTotal: state.productTotal
})

export default connect(mapStateToProps)(Checkout);