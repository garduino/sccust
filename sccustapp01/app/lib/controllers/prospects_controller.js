CarsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('prospects');
  },
  data: function () {
  },
  create: function() {
    this.render('CreateProspect', {});
  }
});
