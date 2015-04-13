Meteor.subscribe('users');

UI.registerHelper('equals',
  function (a, b) {
    return a === b;
  }
);

Valid = {
  'username': function (name) {
    var regexp = /^[a-z0-9_-]{3,16}$/;
    return regexp.test(name);
  },
  'email': function (mail) {
    var regexp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regexp.test(mail);
  },
  'password': function (passwd) {
    var regexp = /^[a-zA-Z0-9_-]{6,18}$/;
    return regexp.test(passwd);
  }
}
