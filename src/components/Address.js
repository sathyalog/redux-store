import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {getFormData, updateFormFields, formSubmitted} from './../action';

const styleButton = {
    color:'#ffffff',
    cursor:'pointer'
}
export class Address extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:'',
            zip:''
        }
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getFormData());
    }

    populateStep2(formData) {
        if(formData) {
            const step2 = formData.filter(item => item.route ==='register-step2');
            return step2;
        }else {
            return formData;
        }      
    }

    inputHandler = (e,elem) => {
        if(elem.name === 'addressLine1'){
            this.setState({
                addressLine1: e.target.value
            }) 
        }
        if(elem.name === 'addressLine2'){
            this.setState({
                addressLine2: e.target.value
            }) 
        }
        if(elem.name === 'city'){
            this.setState({
                city: e.target.value
            }) 
        }
        if(elem.name === 'state'){
            this.setState({
                state: e.target.value
            }) 
        }
        if(elem.name === 'zip'){
            this.setState({
                zip: e.target.value
            }) 
        }
    }

    updateInput = (val,elem) => {
        const {dispatch} = this.props;
        dispatch(updateFormFields(val,elem));
    }

    submitHandler = (e) => {
        const {dispatch} = this.props;
        dispatch(formSubmitted());
    }
    
    render() {
        const {message,formData, updateForm} = this.props;
        const step2 = this.populateStep2(formData)
        return (
            <form>
                {step2 && step2.map(form =>{
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
                                        {element.name !=='submit' && <input type={element.type} 
                                            name={element.name} 
                                            className="form-control"
                                            value={element.initialValue ? element.initialValue : this.state.inputValue} 
                                            disabled={element.enabled === true ? '': 'disabled'} 
                                            required={element.required} 
                                            onChange={(e) => this.inputHandler(e,element)} 
                                            onBlur={() => this.updateInput(this.state,element)}
                                            >
                                         </input>
                                        }<br/>
                                         {element.name ==='submit' && 
                                            <Link to="/success" className="nav-link" >
                                                <input type={element.type} style={styleButton} className="btn btn-dark" name={element.name} value={element.initialValue} onClick={this.submitHandler}/>
                                            </Link>
                                         }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    formData: state.getFormData.formjson,
    updateForm: state.updateForms
})

export default connect(mapStateToProps)(Address)
