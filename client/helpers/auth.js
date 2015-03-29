// logout
Template.header.events({
  'click #logout': function (event) {
    event.preventDefault();
    Meteor.logout(function (error) {
      if(error){
        console.log(error);
      }
      else {
        Router.go('/');
      }
    });
  }
})
// register
Template.register.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var username = template.find('#register-username').value;
    var email = template.find('#register-email').value;
    var password = template.find('#register-password').value;

    Accounts.createUser({
        'username': username,
        'email': email,
        'password': password,
        'profile': {
          'name': username
        }
    }, function (error) {
      if(error){
        console.log(error);
      }
      else {
        Router.go('/');
      }
    })

  }
});
// login
Template.login.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var username = template.find('#login-username').value;
    var password = template.find('#login-password').value;

    Meteor.loginWithPassword(username, password,
      function (error) {
        if(error){
          console.log(error);
        }
        else {
          Router.go('/');
        }
      });
  }
});
