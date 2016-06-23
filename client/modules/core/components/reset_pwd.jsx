import React, { Component, PropTypes } from 'react';
import { Form } from 'formsy-react'
import RaisedButton from 'material-ui/lib/raised-button'
import FormsyText from 'formsy-material-ui/lib/FormsyText'


export default class ResetPwd extends Component {

  resetPwd(data) {
    const {submitResetPwd} = this.props;
    submitResetPwd(data.email);
  }

  render() {
    return (
      <Form onValidSubmit={this.resetPwd.bind(this)}>

        <FormsyText
         name="email"
         required
         validations="isEmail"
         validationError="This is not a valid email"
         floatingLabelText="Email Address"
        />

        <div className="login-item">
          <span>
            <RaisedButton
             type="submit"
             primary={true}
             label="SEND RESET LINK"
            />
          </span>

        </div>
      </Form>
    )
  }

}
