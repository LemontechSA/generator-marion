@<%= app_classname %> = do (LemontendApp, Backbone, Marionette) ->
  App.on "initialize:before", (options) ->
    # initialize:before

  App.reqres.setHandler "default:handler", ->
    # default:handler

  App.addRegions
    headerRegion: "#header"
    footerRegion: "#footer"

  App.addInitializer ->
    # App.module("Header").start()
    # App.module("Footer").start()

  App.on "initialize:after", (options) ->
    # initialize:after

  App

$ ->
  App.start()
