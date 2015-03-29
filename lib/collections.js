// Category {
//   '_id',
//   'owner',
//   'name',
//   'description'
// }
Category = new Mongo.Collection("category");

// Bookmark {
//   '_id',
//   'owner',
//   'category',
//   'name',
//   'url',
//   'description'
// }
Bookmark = new Mongo.Collection("bookmark");
