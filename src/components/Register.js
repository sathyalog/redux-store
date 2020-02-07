import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getFormData,welcomeMsg} from './../action';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            formBuilder:[]
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(welcomeMsg());
        dispatch(getFormData());
    }
    
    render() {
        const {message,formData} = this.props;
        return (
            <div>
                {message}
                {formData && formData.map(form => {
                    return(
                        <div key={form.title}>
                            {form.title}
                            {form.route}
                            {form.elements.map(element => {
                                return(
                                    <div>
                                        {element.name}
                                        {element.type}
                                        {element.component}
                                        {element.caption}
                                        {element.initialValue}
                                        {element.enabled}
                                        {element.required}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <form>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.welcomeMsg,
    formData: state.getFormData.formjson
})

export default connect(mapStateToProps)(Register)
