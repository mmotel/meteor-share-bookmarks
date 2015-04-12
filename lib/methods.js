Meteor.methods({
  // args { name, description }
  'addCategory': function (args) {
    if(Meteor.user()){
      var id = Category.insert(
        {
          'owner': this.userId,
          'name': args.name,
          'description': args.description
        },
        function (error, _id) {
          if(error) {
            console.log(error);
          }
        }
      );
      return id;
    }
    else {
      return null;
    }
  },
  // args { _id, name, description }
  'editCategory': function (args) {
    if(Meteor.user() &&
      Category.findOne({'_id': args._id}).owner === this.userId)
    {
      var result = Category.update(
        { '_id': args._id },
        { '$set':
          {
            'name': args.name,
            'description': args.description
          }
        }
      );
      return result;
    }
    else {
      return null;
    }
  },
  // args { _id }
  'deleteCategory': function (args) {
    if(Meteor.user() &&
      Category.findOne({'_id': args._id}).owner === this.userId)
    {
      Category.remove({ '_id': args._id });
    }
  },
  // args { category, name, url, description }
  'addBookmark': function (args) {
    if(Meteor.user() &&
      Category.findOne({'_id': args.category}).owner === this.userId)
    {
      var id = Bookmark.insert(
        {
          'owner': this.userId,
          'category': args.category,
          'name': args.name,
          'url': args.url,
          'description': args.description
        },
        function (error, _id) {
          if(error) {
            console.log(error);
          }
        }
      );
      return id;
    }
    else {
      return null;
    }
  }
});
