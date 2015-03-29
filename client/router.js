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
      'data': {
        'Categories': function () {
          return Category.find();
        }
      }
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

// /categories
Router.route('/categories', function () {
  this.layout('AppLayout');
  if(Meteor.user()){
    this.render('showCategories',{
      'data': {
        'Categories': function () {
          return Category.find();
        }
      }
    });
  }
  else{
    Router.go('/');
  }
});

// /categories/add
Router.route('/categories/add', function () {
  this.layout('AppLayout');
  if(Meteor.user()){
    this.render('addCategory');
  }
  else{
    Router.go('/');
  }
});

// /categories/edit
Router.route('/categories/edit/:catId', function () {
  var catId = this.params.catId;
  this.layout('AppLayout');
  if(Meteor.user()){
    this.render('editCategory', {
      'data': {
        'category': function () {
          return Category.findOne({'_id': catId});
        }
      }
    });
  }
  else{
    Router.go('/');
  }
});

// /categories/delete
Router.route('/categories/delete/:catId', function () {
  var catId = this.params.catId;
  this.layout('AppLayout');
  if(Meteor.user()){
    this.render('deleteCategory', {
      'data': {
        'category': function () {
          return Category.findOne({'_id': catId});
        }
      }
    });
  }
  else{
    Router.go('/');
  }
});
