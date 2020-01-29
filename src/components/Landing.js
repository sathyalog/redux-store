import React, { Component } from 'react';
import {connect} from 'react-redux';

class Landing extends Component {
    render() {
        const {message} = this.props;
        return (
            <div>
                <br/><br/><br/>
                {message}
                <br/>
                This is Landing Page. 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.message
})

export default connect(mapStateToProps)(Landing)
