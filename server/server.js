Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.publish('categories',
  function (args) {
    if(!args){
      return Category.find({'owner': this.userId});
    }
    else if(args._id){
      return Category.find({'_id': args._id});
    }
    else if(args.owner){
      return Category.find({'owner': args.owner});
    }
    else if(args.username){
      var user = Meteor.users.findOne({'username': args.username});
      return Category.find({'owner': user._id});
    }
    else if(args.bookmark){
      var bookmark = Bookmark.findOne({'_id': args.bookmark});
      return Category.find({'_id': bookmark.category});
    }
    else {
      return null;
    }
  }
);

Meteor.publish('bookmarks',
  function (args) {
    if(!args){
      return Bookmark.find({'owner': this.userId});
    }
    else if(args._id){
      return Bookmark.find({'_id': args._id});
    }
    else if(args.category){
      return Bookmark.find({'category': args.category});
    }
    else {
      return null;
    }
  }
);

Meteor.publish('users',
  function () {
    return Meteor.users.find({}, {fields: {'_id': 1, 'username': 1}});
});
