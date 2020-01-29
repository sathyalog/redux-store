import React, { Component } from 'react';
import {connect} from 'react-redux';

class Checkout extends Component {
    render() {
        const {message} = this.props;
        return (
            <div>
                <br/><br/><br/>
                {message}
                <br/>
                This is Checkout Page. 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.message
})

export default connect(mapStateToProps)(Checkout);