Template.sidebar.events({
  'click .head': function() {
    const menus = document.querySelectorAll('.menu');
    const items = document.querySelectorAll('.item.page');

    [].forEach.call(menus, function(menu){
      if (menu.dataset.id !== 'main') {
        menu.classList.remove('overhead');
        menu.classList.remove('active');
      }
      else {
        menu.classList.remove('overhead');
        menu.classList.add('active');
      }
    });

    [].forEach.call(items, function(item){
      item.classList.remove('active');
    });

    FlowRouter.go('/');
  },

  'click .up': function(e, t) {
    const menu = document.querySelector('.menu.active');
    const child = e.currentTarget.dataset.child;
    const childMenu = document.querySelector('[data-id="' + child + '"]');

    menu.classList.remove('active');
    menu.classList.add('overhead');

    childMenu.classList.add('active');
  },

  'click .down': function(e, t) {
    const menu = document.querySelector('.menu.active');
    const parent = e.currentTarget.dataset.parent;
    const parentMenu = document.querySelector('[data-id="' + parent + '"]');

    menu.classList.remove('active');

    parentMenu.classList.remove('overhead');
    parentMenu.classList.add('active');
  },

  'click .page': function(e, t) {
    const item = e.currentTarget;
    const items = document.querySelectorAll('.item.page');
    const slug = item.dataset.page;

    FlowRouter.go('/' + slug);

    [].forEach.call(items, function(item){
      item.classList.remove('active');
    });

    item.classList.add('active');
  }
});