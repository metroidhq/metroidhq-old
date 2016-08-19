Template.registerHelper('hasComments', function(){
  const commentCount = Comments.find().count();

  if (commentCount > 0) {
    return true;
  }
});