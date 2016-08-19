Template.registerHelper('hasDiscussion', function(){
  const page = Pages.findOne();

  if (page) {
    return page.discussion;
  }
});