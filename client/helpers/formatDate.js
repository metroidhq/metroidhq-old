Template.registerHelper('formatDate', function(date){
  const mDate = moment(date);
  const tDate = moment();
  let fDate = '';

  if (mDate.startOf('day').isSame(tDate.startOf('day'))) {
    fDate = 'Today';
  }
  else {
    if (mDate.startOf('year').isSame(tDate.startOf('year'))) {
      fDate += moment(date).format('MMM Qo');
    }
    else {
      fDate += moment(date).format('MMM Qo, YYYY');
    }
  }

  fDate += moment(date).format(' \\at h:mm A');

  return fDate;
});