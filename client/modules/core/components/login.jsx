import React, { Component, PropTypes } from 'react';
import { Form } from 'formsy-react'
import RaisedButton from 'material-ui/lib/raised-button'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import Divider from 'material-ui/lib/divider';

export default class Login extends Component {

  render () {

    return (
      <div>

        <RaisedButton
          secondary={true}
          label="Log in with Facebook"
          icon={<i className="fa fa-facebook-official fa-inverse"></i>}
          fullWidth={true}
          onTouchTap={this.handleFacebookLogin.bind(this)}
        />

        <div className="separator">
          <span>or</span>
        </div>

        <Form onValidSubmit={this.submitLogin.bind(this)}>

          <FormsyText
           name="email"
           required
           validations="isEmail"
           validationError="This is not a valid email"
           floatingLabelText="Email Address"
          />

          <FormsyText
           name="password"
           required
           validations="minLength:4"
           validationError="Password looks a bit short, try again"
           type="password"
           floatingLabelText="Password"
          />

          <div className="login-item">
            <span>
              <RaisedButton
               type="submit"
               primary={true}
               label="LOG IN"
              />
            </span>
            <span id="forgot-password">
              <a href='#' onClick={this.handleResetPwdClick.bind(this)}>
                <small>Forgot Password?</small>
              </a>
            </span>
          </div>

          <div className="login-item">
            <Divider />
          </div>

          <div className="login-item">
            <small>
              Don't have an account? <a href='#' onClick={this.handleSignUpClick.bind(this)}>Sign up</a>
            </small>
          </div>
        </Form>
      </div>
    )
  }

  submitLogin(data) {

    const {submitAction} = this.props;
    submitAction(data.email, data.password);
  }

  handleSignUpClick(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {showSignup} = this.props;
    showSignup();
  }

  handleResetPwdClick(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {showResetPwd} = this.props;
    showResetPwd();
  }

  handleFacebookLogin() {
    const {socialLogin} = this.props;
    socialLogin("loginWithFacebook");
  }
}
