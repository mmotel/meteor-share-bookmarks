// Router.route('/', function () {
//   this.layout('AppLayout');
//   this.render('template', {
//     data: function () { return {}; }
//   });
// });

// /
Router.route('/', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('categories');
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('AppLayout');
      this.render('welcome');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('showCategories', {
      'data': {
        'Categories': function () {
          return Category.find();
        }
      }
    });
  }
});

// /register
Router.route('/register', {
  loadingTemplate: 'loading',
  onBeforeAction: function () {
    if(Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('register');
  }
});

// /login
Router.route('/login', {
  loadingTemplate: 'loading',
  onBeforeAction: function () {
    if(Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('login');
  }
});

// /categories TODO
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
Router.route('/categories/add', {
  loadingTemplate: 'loading',
  onBeforeAction: function () {
    if(!Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('addCategory');
  }
});

// /categories/edit
Router.route('/categories/edit/:catId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('categories', {'_id': this.params.catId});
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('editCategory', {
      'data': {
        'category': function () {
          return Category.findOne();
        }
      }
    });
  }
});

// /categories/delete
Router.route('/categories/delete/:catId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('categories', {'_id': this.params.catId});
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('AppLayout');
    this.render('deleteCategory', {
      'data': {
        'category': function () {
          return Category.findOne();
        }
      }
    });
  }
});
