export default {
  notify({LocalState}, message) {
    LocalState.set('SNACKBAR_MESSAGE', message);
    LocalState.set('OPEN_SNACKBAR', true);
  }
};
