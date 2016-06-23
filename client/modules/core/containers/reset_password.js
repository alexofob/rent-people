import ResetPassword from '../components/reset_password.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const composer = ({token}, onData) => {

    onData(null, {token});

};

export const depsMapper = (context, actions) => ({
  handleResetPwd: actions._accounts.handleResetPwd,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(ResetPassword);
