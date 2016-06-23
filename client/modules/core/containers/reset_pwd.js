import ResetPwd from '../components/reset_pwd.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const depsMapper = (context, actions) => ({
  submitResetPwd: actions._accounts.resetPwd,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(ResetPwd);
