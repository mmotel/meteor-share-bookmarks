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
      return Category.find({'owner': args._owner});
    }
    else { //gtfo
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
    else { //gtfo
      return null;
    }
  }
);
