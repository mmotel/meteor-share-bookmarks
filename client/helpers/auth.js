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
});
// register
Template.register.events({
  'keyup #register-username, blur #register-username': function (event, template) {
    $('#register-error-username-used').addClass('hide');
    var username = template.find('#register-username').value;
    if(!Valid.username(username)){
      $('#register-error-username-valid').removeClass('hide');
    }
    else {
      $('#register-error-username-valid').addClass('hide');
    }
  },
  'keyup #register-email, blur #register-email': function (event, template) {
    var email = template.find('#register-email').value;
    if(!Valid.email(email)){
      $('#register-error-email').removeClass('hide');
    }
    else {
      $('#register-error-email').addClass('hide');
    }
  },
  'keyup #register-password, blur #register-password': function (event, template) {
    var password = template.find('#register-password').value;
    if(!Valid.password(password)){
      $('#register-error-password').removeClass('hide');
    }
    else {
      $('#register-error-password').addClass('hide');
    }
  },
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var username = template.find('#register-username').value;
    var email = template.find('#register-email').value;
    var password = template.find('#register-password').value;

    if(Valid.username(username) && Valid.email(email) &&
     Valid.password(password)){
      Accounts.createUser({
          'username': username,
          'email': email,
          'password': password,
          'profile': {
            'name': username
          }
        },
        function (error) {
          if(error){
            console.log(error);
            $('#register-error-username-used').removeClass('hide');
          }
          else {
            Router.go('/');
          }
        });
      }
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
