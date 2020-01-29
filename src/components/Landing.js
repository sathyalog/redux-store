import React, { Component } from 'react';
import {connect} from 'react-redux';

class Landing extends Component {
    render() {
        const {message,identifier} = this.props;
        return (
            <div>
                <br/><br/><br/>
                {message}
                <br/>
                This is Landing Page. My Identifier is {identifier}
            </div>
        )
    }
}

const mapStateToProps = (state,props) => ({
    message: state.message,
    identifier: props.id
})

export default connect(mapStateToProps)(Landing)
