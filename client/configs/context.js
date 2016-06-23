import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

export default function () {
  const LocalState = new ReactiveDict();
  LocalState.set('OPEN_LEFTNAV', false);
  LocalState.set('OPEN_DIALOG', false);
  LocalState.set('DIALOG_CONTENT', "login");
  LocalState.set('OPEN_SNACKBAR', false);
  LocalState.set('SNACKBAR_MESSAGE', '');
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState,
    Tracker
  };
}
