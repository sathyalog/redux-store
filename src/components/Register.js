import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {getFormData,welcomeMsg, updateFormFields} from './../action';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            formBuilder:[],
            firstName:'',
            lastName:'',
            gender:''
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

    inputHandler = (e,elem) => {
        console.log(e.target);
        if(elem.name === 'firstName'){
            this.setState({
                firstName: e.target.value
            }) 
        }
        if(elem.name === 'lastName'){
            this.setState({
                lastName: e.target.value
            }) 
        }
    }

    updateInput = (val,elem) => {
        const {dispatch} = this.props;
        console.log(val);
        dispatch(updateFormFields(val,elem));
    }
    
    render() {
        const {message,formData, updateForm} = this.props;
        const step1 = this.populateStep1(formData)
        return (
            <form>
                {step1 && step1.map(form =>{
                    return(
                        <div key={form.title}>
                            {form.elements.map(element =>  {
                                if(updateForm.step1FormState && element.name === 'firstName') {
                                    element.initialValue = updateForm.step1FormState.firstName;
                                }
                                if(updateForm.step1FormState && element.name === 'lastName') {
                                    element.initialValue = updateForm.step1FormState.lastName;
                                }
                                return(
                                    <div key={element.caption}>
                                        <b>{element.caption} </b>
                                         <input type={element.type} name={element.name} value={element.initialValue ? element.initialValue : this.state.inputValue} enabled={element.enabled} required={element.required} onChange={(e) => this.inputHandler(e,element)} onBlur={() => this.updateInput(this.state,element)}></input>
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
    formData: state.getFormData.formjson,
    updateForm: state.updateForms
})

export default connect(mapStateToProps)(Register)
