Template.registerHelper('allComments', function(){
  return Comments.find(
    {},
    {
      sort: {
        createdAtMS: 1
      }
    }
  );
});