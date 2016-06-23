import utilities from '../../../configs/utilities';

export default {

  login({Meteor, LocalState, FlowRouter}, email, password) {

    if (!email || !password) {
      return utilities.notify('Login & Password are required!');
    }

    Meteor.loginWithPassword(email, password, (err) => {
      if (err && err.reason) {
        return utilities.notify({LocalState}, err.reason);
      }
      utilities.notify({LocalState}, 'Login successful');
      LocalState.set('OPEN_DIALOG', false);
    });

  },

  showSignup({LocalState}) {
    return LocalState.set('DIALOG_CONTENT', "signup");
  },

  register({Meteor, LocalState, FlowRouter}, firstname, surname, email, password, confirmPassword) {

    if (!firstname || !email || !password || !confirmPassword) {
      return utilities.notify({LocalState}, 'Please fill out all the required fileds!');
    }

    if (password !== confirmPassword ) {
      return utilities.notify({LocalState}, 'Passwords do not match!');
    }

    const accountObject = {
        profile: {
          firstName: firstname,
          lastName: surname
        },
        email,
        password
    };

    Accounts.createUser(accountObject, (err) => {
      if (err && err.reason) {
        return utilities.notify({LocalState}, err.reason);
      }
      utilities.notify({LocalState}, 'Signup successful');
      LocalState.set('OPEN_DIALOG', false);
    });
  },

  showLogin({LocalState}) {
    return LocalState.set('DIALOG_CONTENT', "login");
  },

  resetPwd({Meteor, LocalState, FlowRouter}, email) {

    if (!email) {
      return utilities.notify('Email is required!');
    }

    Accounts.forgotPassword({email}, (err) => {
      if (err && err.reason) {
        return utilities.notify({LocalState}, err.reason);
      }
      utilities.notify({LocalState}, 'A link has been sent to your email to reset your password');
      LocalState.set('OPEN_DIALOG', false);
    });

  },

  showResetPwd({LocalState}) {
    return LocalState.set('DIALOG_CONTENT', "resetPwd");
  },

  handleResetPwd({LocalState, FlowRouter}, token, password, confirmPassword) {
    if (!password || !confirmPassword) {
      return utilities.notify({LocalState}, `Please fill out all the required fileds! ${confirmPassword}`);
    }

    if (password !== confirmPassword ) {
      return utilities.notify({LocalState}, 'Passwords do not match!');
    }

    Accounts.resetPassword(token, password, (err) => {
    if (err) {
      // Display error
      utilities.notify({LocalState}, err.reason);
    } else {
      // Resume normal operation
      FlowRouter.go('/');
    }
  });
},

  socialLogin({LocalState}, service) {
    const options = {
              requestPermissions: [ 'public_profile', 'email' ]
            };

    Meteor[ service ]( options, ( err ) => {
        if ( err ) {
          utilities.notify( {LocalState}, err.message);
        }
        else {
          utilities.notify({LocalState}, 'Login successful');
          LocalState.set('OPEN_DIALOG', false);
        }
      });
  }

};
