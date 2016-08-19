Template.homeHeader.onRendered(function(){
  const instance = this;

  instance.autorun(function(){
    if (instance.subscriptionsReady()) {
      const page = Pages.findOne();

      if (page && page.banner) {
        const header = document.querySelector('#header');
        header.style.backgroundImage = 'url("/' + page.banner + '")';
      }
    }
  });
});