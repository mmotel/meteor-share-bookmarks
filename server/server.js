Meteor.startup(function () {
  // code to run on server at startup
});

Meteor.publish('user-categories',
  function () {
    return Category.find({'owner': this.userId});
  }
);

Meteor.publish('user-bookmarks',
  function () {
    return Bookmark.find({'owner': this.userId});
  }
);
