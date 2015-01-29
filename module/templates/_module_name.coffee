@App.module "<%= module_classname %>", (<%= module_classname %>, App, Backbone, Marionette, $, _) ->
  API =
    list: ->
      new <%= module_classname %>.List.Controller
        region: App.headerRegion
