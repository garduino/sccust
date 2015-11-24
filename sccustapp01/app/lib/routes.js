Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/prospects/create', {
  name: 'createProspect',
  controller: 'ProspectsController',
  action: 'create',
  where: 'client'
});
