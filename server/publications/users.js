Meteor.publish( 'user', function() {
  return Meteor.users.find( this.userId, {
    fields: {
      "services.facebook.email": 1,
      "emails": 1,
      "name": 1
    }
  });
});
