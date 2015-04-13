Template.addCategory.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var name = template.find('#add-category-name').value;
    var desc = template.find('#add-category-desc').value;

    Meteor.call('addCategory',
      {
        'name': name,
        'description': desc
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username);
        }
      });
  }
});

Template.editCategory.events({
  'submit form, click .submit': function (event, template) {
    event.preventDefault();
    var _id = Router.current().params.catId;
    var name = template.find('#edit-category-name').value;
    var desc = template.find('#edit-category-desc').value;

    Meteor.call('editCategory',
      {
        '_id': _id,
        'name': name,
        'description': desc
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username);
        }
      });
  }
});

Template.deleteCategory.events({
  'click .submit': function (event, template) {
    event.preventDefault();
    var _id = Router.current().params.catId;

    Meteor.call('deleteCategory',
      {
        '_id': _id
      },
      function (error, result) {
        if(error){
          console.log(error);
        }
        else {
          console.log(result);
          Router.go('/' + Meteor.user().username);
        }
      });
  }
});
