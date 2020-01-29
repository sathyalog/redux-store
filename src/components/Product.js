import React, { Component } from 'react'
import {connect} from 'react-redux';
class Product extends Component {
    render() {
        const {msg} = this.props
        return (
            <div>
                <br/><br/><br/>
                {msg}
                <br/>
                This is Product Page. 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    msg: state.message
})

export default connect(mapStateToProps)(Product)

