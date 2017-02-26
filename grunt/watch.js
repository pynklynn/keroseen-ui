/**
 * @author Will Steinmetz
 * Sass framework of minimal includes to use as a blueprint to create a custom
 * user interface without the bloat - build task
 * Copyright (c)2017, Will Steinmetz
 * Licensed under the MIT license.
 * https://opensource.org/licenses/MIT
 */

module.exports = {
  sass: {
    files: [
      'src/components/**/*.scss',
      'src/demo/sass/**/*.scss'
    ],
    tasks: [
      'clean:css',
      'sass'
    ],
    options: {
      spawn: false
    }
  },
  html: {
    files: [
      'src/demo/pug/**/*.pug'
    ],
    tasks: [
      'clean:html',
      'pug'
    ],
    options: {
      spawn: false
    }
  },
  images: {
    files: [
      'src/demo/images/**/*.{png,jpg,gif}'
    ],
    tasks: [
      'clean:images',
      'imagemin'
    ]
  }
};
