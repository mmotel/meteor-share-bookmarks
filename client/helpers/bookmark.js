Template.addBookmark.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var category = Router.current().params.categoryId ||
     template.find('#add-bookmark-category').value;
    var name = template.find('#add-bookmark-name').value;
    var url  = template.find('#add-bookmark-url').value;
    var desc = template.find('#add-bookmark-desc').value;

    Meteor.call('addBookmark',
      {
        'category': category,
        'name': name,
        'url': url,
        'description': desc
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username + '/' + category);
        }
      });
  }
});

Template.editBookmark.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var _id = Router.current().params.bookmarkId;
    var name = template.find('#edit-bookmark-name').value;
    var url  = template.find('#edit-bookmark-url').value;
    var desc = template.find('#edit-bookmark-desc').value;

    Meteor.call('editBookmark',
      {
        '_id': _id,
        'name': name,
        'url': url,
        'description': desc
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username + '/' + result.category);
        }
      });
  }
});

Template.deleteBookmark.events({
  'click .submit': function (event, template) {
    event.preventDefault();
    var _id = Router.current().params.bookmarkId;

    Meteor.call('deleteBookmark',
      {
        '_id': _id
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username + '/' + result.category);
        }
      });
  }
});
