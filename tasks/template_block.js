/*
 * grunt-template-block
 * https://github.com/hillmanov/grunt-template-block
 *
 * Copyright (c) 2013 Scott Hillman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('template_block', 'Your task description goes here.', function() {
    var src             = this.data.src,
        dest            = this.data.dest,
        templatesDir    = this.data.templatesDir,
        templateBuilder = '',
        groups,
        indentation,
        srcText,
        destText;

    if (!grunt.file.exists(src)) {
      grunt.log.warn('Source file "' + src + '" not found.');
      return false;
    }

    if(!grunt.file.isDir(templatesDir)) {
      grunt.log.warn('Source dir "' + templatesDir + '" not found.');
      return false;
    }
    
    srcText = grunt.file.read(src);

    groups = srcText.match('(.*)<!--- block:templates !-->');
    indentation = groups[1];

    grunt.file.recurse(templatesDir, function(abspath, rootdir, subdir, filename) {
      var fileId = [subdir, filename].join('/').replace(/^\//, '');
      templateBuilder += indentation + '<script type="text/ng-template" id="' + fileId + '">\n';
      templateBuilder += grunt.file.read(abspath).replace(/^(.*)$/igm, indentation + indentation + '$1') + '\n';
      templateBuilder += indentation + '</script>\n';
    });

    destText = srcText.replace(/(.*)<!--- block:templates !-->/, templateBuilder);
    
    grunt.file.write(dest, destText);

    return true;


    // Iterate over all specified file groups.
    
    // this.files.forEach(function(f) {
    //   // Concat specified files.
    //   var src = f.src.filter(function(filepath) {
    //     // Warn on and remove invalid source files (if nonull was set).
    //     if (!grunt.file.exists(filepath)) {
    //       grunt.log.warn('Source file "' + filepath + '" not found.');
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   }).map(function(filepath) {
    //     // Read file source.
    //     return grunt.file.read(filepath);
    //   }).join(grunt.util.normalizelf(options.separator));

    //   // Handle options.
    //   src += options.punctuation;

    //   // Write the destination file.
    //   grunt.file.write(f.dest, src);

    //   // Print a success message.
    //   grunt.log.writeln('File "' + f.dest + '" created.');
    // });
  });

};
