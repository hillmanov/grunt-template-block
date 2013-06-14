'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.template_block = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  build: function(test) {
    test.expect(1);

    var actual   = grunt.file.read('test/index.html');
    var expected = grunt.file.read('test/expected/build');
    test.equal(actual, expected, 'Should insert all templates into a template script tag with the name of the file set to the id.');

    test.done();
  }
};
