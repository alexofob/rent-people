import Login from '../components/login.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const depsMapper = (context, actions) => ({
  submitAction: actions._accounts.login,
  showSignup: actions._accounts.showSignup,
  showResetPwd: actions._accounts.showResetPwd,
  socialLogin: actions._accounts.socialLogin,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(Login);
