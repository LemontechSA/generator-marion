'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Marion:entity', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../entity'))
      .withArguments('name', '--force')
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'entity_name.coffee'
    ]);
  });
});
