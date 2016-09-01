Meteor.publish('comments', function(pageId){
  return Comments.find(
    {
      pageId: pageId
    },
    {
      limit: 100,
      sort: {
        createdAtMS: -1
      }
    }
  );
});