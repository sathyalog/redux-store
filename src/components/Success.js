import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { Link, withRouter } from 'react-router-dom';

export class Success extends Component {
    componentDidMount() {
        if (this.props.history.action === "POP") {
            this.props.history.push("/register");
        }
    }
    render() {
        const {updateForm} = this.props;
        return (
            <div>
                <h1 className="display-4">
                    Thank you for your interest. We will get back to you shortly. Please do not hit back button, however we clear the form if you do so :)
                </h1><br/>
                <h4>
                    {updateForm.step1FormState && 
                         (
                            <Fragment>
                                You can review your details here.<br/><br/>
                                <ul class="list-group">
                                    <li class="list-group-item">{updateForm.step1FormState.firstName}</li>
                                    <li class="list-group-item">{updateForm.step1FormState.lastName}</li>
                                    <li class="list-group-item">{updateForm.step2FormState.addressLine1}</li>
                                    <li class="list-group-item">{updateForm.step2FormState.addressLine2}</li>
                                    <li class="list-group-item">{updateForm.step2FormState.city}</li>
                                    <li class="list-group-item">{updateForm.step2FormState.state}</li>
                                    <li class="list-group-item">{updateForm.step2FormState.zip}</li>
                                </ul>
                            </Fragment>
                            
                        )
                    }
                </h4>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    updateForm: state.updateForms,
    formSubmit: state.formSubmit
})

// export default connect(mapStateToProps)(Success)
export default compose(
    withRouter,
    connect(mapStateToProps)
  )(Success);
