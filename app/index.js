'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });

    this.appname = this._.classify(this.appname);
    this.app_filename = this._.underscored(this.appname);
  },

  writing: {
    scaffoldFolders: function() {
      this.mkdir('modules');
      this.mkdir('entities');
    },

    copyMainFiles: function () {
      var context = {
        appname: this.appname,
        app_filename: this.app_filename
      };

      this.template('_application.coffee', 'application.coffee', context);
      this.template('_app_name.coffee', this.app_filename + '.coffee', context);
      this.template('_README.md', 'README.md', context);
    }
  }
});
