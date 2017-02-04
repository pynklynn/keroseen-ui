/*
 * @author Will Steinmetz
 * Sass framework of minimal includes to use as a blueprint to create a custom
 * user interface without the bloat - build task
 * Copyright (c)2017, Will Steinmetz
 * Licensed under the MIT license.
 * https://opensource.org/licenses/MIT
 */

module.exports = {
  'default': [
    'clean:all',
    'build',
    'watch'
  ],
  'build': [
    'pug',
    'sass'
  ]
};
