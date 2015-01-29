@App.module "<%= module_classname %>.List", (List, App, Backbone, Marionette, $, _) ->

  class List.Layout extends App.Views.Layout
    template: JST["<%= module_filename %>/list/list_layout"]
    events:
      'click a': 'showHelp'

    showHelp: ->
      App.Utils.showHelp 1, 1
