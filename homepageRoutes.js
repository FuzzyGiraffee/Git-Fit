const routes = [
  { path: '/', template: Handlebars.compile(document.querySelector('#home-template').innerHTML) },
  { path: '/weightloss', template: Handlebars.compile(document.querySelector('#weightloss-template').innerHTML) },
  { path: '/bulking', template: Handlebars.compile(document.querySelector('#bulking-template').innerHTML) },
  { path: '/maintaining', template: Handlebars.compile(document.querySelector('#maintaining-template').innerHTML) }
];

function router() {
  const path = window.location.pathname;
  const route = routes.find(route => route.path === path);
  
  if (route) {
    document.querySelector('#content').innerHTML = route.template();
  }
}

window.addEventListener('popstate', router);

router();

