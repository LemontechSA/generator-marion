@App.module "<%= module_classname %>.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Controller extends App.Controllers.Base
    initialize: ->
      @layout = @getLayoutView()

    getLayoutView: ->
      new List.Layout
