@App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->

  class Entities.<%= entity_classname %> extends Backbone.Model

  class Entities.<%= entity_classname %>Collection extends Backbone.Collection
    @include App.Shared.CacheableCollection
    model: Entities.<%= entity_classname %>
