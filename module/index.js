'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('module_name', { type: String, required: true });

    this.module_classname = this._.classify(this.module_name);
    this.module_filename = this._.underscored(this.module_classname);
    this.module_path = 'modules/' + this.module_filename;
  },

  scaffoldFolders: function() {
    this.mkdir(this.module_path);
    this.mkdir(this.module_path + '/list');
    this.mkdir(this.module_path + '/list/templates');
  },

  copyMainFiles: function () {
    var context = {
      module_classname: this.module_classname,
      module_filename: this.module_filename
    };

    this.template('_module_name.coffee', this.module_path + '/' + this.module_filename + '.coffee', context);
    this.template('_list_controller.coffee', this.module_path + '/list/list_controller.coffee', context);
    this.template('_list_view.coffee', this.module_path + '/list/list_view.coffee', context);
    this.copy('_list_layout.haml', this.module_path + '/list/templates/list_layout.haml');
  },

  addModuleToApplication: function () {
    var application = this.readFileAsString('application.coffee');
    application = application + '\n' + '#= require_tree modules/' + this.module_filename;
    this.write('application.coffee', application);
  }
});
