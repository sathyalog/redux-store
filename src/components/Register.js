import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getFormData,welcomeMsg} from './../action';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            formBuilder:[],
            inputValue:''
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(welcomeMsg());
        dispatch(getFormData());
    }

    populateStep1(formData) {
        if(formData) {
            const step1 = formData.filter(item => item.route ==='register-step1');
            return step1;
        }else {
            return formData;
        }
            
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    
    render() {
        const {message,formData} = this.props;
        const step1 = this.populateStep1(formData)
        return (
            <form>
                {step1 && step1.map(form =>{
                    return(
                        <div key={form.title}>
                            {form.elements.map(element =>  {
                                return(
                                    <div key={element.caption}>
                                        <b>{element.caption} </b>
                                        {element.name !== 'gender' && <input type={element.type} name={element.name} value={this.state.inputValue? this.state.inputValue :element.initialValue} enabled={element.enabled} required={element.required} onChange={this.inputHandler} ></input>}
                                        {element.options && element.options.map(({ type, initialValue, title,checked }, index) => (
                                            <Fragment key={title}>
                                                <span>{title} </span>
                                                <input
                                                type={type}
                                                inline
                                                checked={checked}
                                                key={`${initialValue}_${index}`}
                                                /> &nbsp;
                                            </Fragment>
                                        ))}<br/>
                                    </div>
                                )
                            },this)}
                        </div>
                    )
                },this)}
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.welcomeMsg,
    formData: state.getFormData.formjson
})

export default connect(mapStateToProps)(Register)
