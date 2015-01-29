'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.argument('entity_name', { type: String, required: true });

    this.entity_classname = this._.classify(this.entity_name);
    this.entity_filename = this._.underscored(this.entity_classname);
  },

  scaffoldFolders: function() {
    this.mkdir('entities');
  },

  copyMainFiles: function () {
    var context = {
      entity_classname: this.entity_classname,
      entity_filename: this.entity_filename
    };

    this.template('_entity_name.coffee', 'entities/' + this.entity_filename + '.coffee', context);
  }
});
