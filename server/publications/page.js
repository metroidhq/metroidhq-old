Meteor.publish('page', function(slug){
  return Pages.find({
    slug: slug
  });
});