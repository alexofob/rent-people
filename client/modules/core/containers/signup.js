import SignUp from '../components/signup.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const depsMapper = (context, actions) => ({
  submitAction: actions._accounts.register,
  showLogin: actions._accounts.showLogin,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(SignUp);
