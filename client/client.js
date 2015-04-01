Meteor.subscribe('users');

UI.registerHelper('equals',
  function (a, b) {
    return a === b;
  }
);
