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
        'User': Meteor.user(),
        'Categories': Category.find()
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

// /categories
Router.route('/:username', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('categories', {'username': this.params.username});
  },
  // onBeforeAction: function () {
  //     this.next();
  // },
  action: function () {
    this.layout('AppLayout');
    this.render('showCategories', {
      'data': {
        'User': Meteor.users.findOne({'username': this.params.username}),
        'Categories': Category.find()
      }
    });
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
        'category': Category.findOne()
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
        'category': Category.findOne()
      }
    });
  }
});

// /bookmarks
Router.route('/:username/:categoryId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('categories', {'_id': this.params.categoryId}),
      Meteor.subscribe('bookmarks', {'category': this.params.categoryId}) ];
  },
  // onBeforeAction: function () {
  //     this.next();
  // },
  action: function () {
    this.layout('AppLayout');
    this.render('showBookmarks', {
      'data': {
        'User': Meteor.users.findOne({'username': this.params.username}),
        'Category': Category.findOne(),
        'Bookmarks': Bookmark.find()
      }
    });
  }
});

// /bookmarks/add
Router.route('/bookmarks/add/:categoryId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('categories', {'_id': this.params.categoryId});
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
    this.render('addBookmark', {
      'data': {
        'Category': Category.findOne()
      }
    });
  }
});
