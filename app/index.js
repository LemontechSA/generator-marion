'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('app_name', { type: String, required: true });

    this.app_classname = this._.classify(this.app_name);
    this.app_filename = this._.underscored(this.app_classname);
  },

  writing: {
    scaffoldFolders: function() {
      this.mkdir('modules');
      this.mkdir('entities');
    },

    copyMainFiles: function () {
      var context = {
        app_classname: this.app_classname,
        app_filename: this.app_filename
      };

      this.template('_application.coffee', 'application.coffee', context);
      this.template('_app_name.coffee', this.app_filename + '.coffee', context);
      this.template('_README.md', 'README.md', context);
    }
  }
});
