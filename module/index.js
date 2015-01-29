'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the Marion subgenerator with the argument ' + this.name + '.');

    this.argument('name', {
      required: true,
      type: String,
      desc: 'The subgenerator name'
    });
  },

  // writing: function () {
  //   this.fs.copy(
  //     this.templatePath('somefile.js'),
  //     this.destinationPath('somefile.js')
  //   );
  // }
});
