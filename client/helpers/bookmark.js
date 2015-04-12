Template.addBookmark.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var category = Router.current().params.categoryId;
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
      }
    );
  }
});
