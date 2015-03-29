// Router.route('/', function () {
//   this.layout('AppLayout');
//   this.render('template', {
//     data: function () { return {}; }
//   });
// });

// /
Router.route('/', function () {
  this.layout('AppLayout');
  if(Meteor.user()){
    this.render('showCategories', {
      data: {}
    });
  }
  else{
    this.render('welcome');
  }
});

// /register
Router.route('/register', function () {
  this.layout('AppLayout');
  if(! Meteor.user()){
    this.render('register');
  }
  else {
    Router.go('/');
  }
});

// /login
Router.route('/login', function () {
  this.layout('AppLayout');
  if(! Meteor.user()){
    this.render('login');
  }
  else {
    Router.go('/');
  }
});
