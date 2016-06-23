import Header from '../components/header.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearState}, onData) => {
  const {LocalState} = context();

  const openLeftNav = LocalState.get('OPEN_LEFTNAV');
  const openDialog = LocalState.get('OPEN_DIALOG');
  const dialogContent = LocalState.get('DIALOG_CONTENT');
  const openSnackbar = LocalState.get('OPEN_SNACKBAR');
  const snackbarMessage = LocalState.get('SNACKBAR_MESSAGE')
  const headerState = {openLeftNav, openDialog, dialogContent, openSnackbar, snackbarMessage};

  onData(null, {headerState});

  //clearState when unmounting the component
  return clearState;
};

export const depsMapper = (context, actions) => ({
  showLeftNav: actions.header.showLeftNav,
  closeLeftNav: actions.header.closeLeftNav,
  showLoginDialog: actions.header.showLoginDialog,
  closeDialog: actions.header.closeDialog,
  closeSnackbar: actions.header.closeSnackbar,
  clearState: actions.header.clearState,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Header);
