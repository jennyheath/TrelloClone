window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var collection = new TrelloClone.Collections.Boards();
    collection.fetch();

    var router = new TrelloClone.Routers.Router({
      $rootEl: $('#main'),
      collection: collection
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
