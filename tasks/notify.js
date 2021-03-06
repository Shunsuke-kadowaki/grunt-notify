/*
 * grunt-notify
 * https://github.com/dylang/grunt-notify
 *
 * Copyright (c) 2013 Dylan Greene
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function gruntTask(grunt) {

  var notify = require('./lib/notify');
  var guessProjectName = require('./lib/util/guessProjectName');

  var defaults = {
    title:    guessProjectName(),
    message:  '' //required
  };

  // Use this to show an arbitrary notification.
  grunt.registerMultiTask('notify', 'Show an arbitrary notification whenever you need.', function() {
    var options = this.options(defaults);

    if (options.message) {
      var done = this.async();
      notify(options, function(err, stdout, stderr) {
        grunt.log.debug('notify result:', {
          err:    err,
          stdout: stdout,
          stderr: stderr
        });
        done(err);
      });
    }
    grunt.log.debug('Notify options:', options);
  });

};