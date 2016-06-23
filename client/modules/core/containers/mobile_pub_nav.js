import MobilePubNavigation from '../components/mobile_pub_nav.jsx';
import {useDeps, composeAll} from 'mantra-core';

export const depsMapper = (context, actions) => ({
  showLoginDialog: actions.header.showLoginDialog,
  context: () => context
});

export default composeAll(
  useDeps(depsMapper)
)(MobilePubNavigation);
