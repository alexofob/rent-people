export default {

  clearState({LocalState}) {
    LocalState.set('OPEN_LEFTNAV', null);
    return LocalState.set('OPEN_DIALOG', null);
    },

  showLeftNav({LocalState}) {
      return LocalState.set('OPEN_LEFTNAV', true);
  },

  closeLeftNav({LocalState}) {
    return LocalState.set('OPEN_LEFTNAV', false);
  },

  showLoginDialog({LocalState}) {
    LocalState.set('DIALOG_CONTENT', "login");
    return LocalState.set('OPEN_DIALOG', true);
  },

  closeDialog({LocalState}) {
    return LocalState.set('OPEN_DIALOG', false);
  },

  closeSnackbar( {LocalState}) {
    return LocalState.set('OPEN_SNACKBAR', false);
  }

};
