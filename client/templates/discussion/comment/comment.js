Template.comment.onRendered(function(){
  const comments = document.querySelector('#comments');
  comments.scrollTop = comments.scrollHeight;
});