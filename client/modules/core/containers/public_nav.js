import PublicNavigation from '../components/public_nav.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const depsMapper = (context, actions) => ({
  showLoginDialog: actions.header.showLoginDialog,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(PublicNavigation);
