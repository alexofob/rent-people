// Generate user's name after sign up
Accounts.onCreateUser((options, user) => {
  if (!!options.profile && !!options.profile.firstName) {
    check(options.profile.firstName, String);
    user.name.firstName = options.profile.firstName;
    if (!!options.profile.lastName) {
      check(options.profile.lastName, String);
      user.name.lastName = options.profile.lastName;
    }
    check(user.email, String);
    check(user.password, String);
  }
  else if (!!user.services.facebook) {
    const { first_name, last_name } = user.services.facebook;
    check(first_name, String);
    check(last_name, String);
    user.name = {firstName: first_name, lastName: last_name};
  }
  else {
    throw new Error('Expected at least the user first name');
  }

  // Don't forget to return the new user object at the end!
  return user;
});
