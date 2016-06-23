import AuthenticatedNavigation from '../components/authenticated_nav.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('user').ready()) {
    const user = Meteor.user();
    onData(null, {user});
  }
  else {
      onData();
    }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(AuthenticatedNavigation);
