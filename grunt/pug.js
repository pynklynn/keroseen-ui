/**
 * @author Will Steinmetz
 * Sass framework of minimal includes to use as a blueprint to create a custom
 * user interface without the bloat - build task
 * Copyright (c)2017, Will Steinmetz
 * Licensed under the MIT license.
 * https://opensource.org/licenses/MIT
 */

module.exports = {
  release: {
    options: {
      pretty: true,
    },
    files: {
      'demo/index.html': 'src/demo/pug/index.pug',
      'demo/grid.html': 'src/demo/pug/grid.pug',
      'demo/cards.html': 'src/demo/pug/cards.pug',
      'demo/top-nav.html': 'src/demo/pug/top-nav.pug',
      'demo/side-nav.html': 'src/demo/pug/side-nav.pug'
    }
  }
};
