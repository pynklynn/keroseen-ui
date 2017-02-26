module.exports = {
  dynamic: {
    files: [
      {
        expand: true,
        cwd: 'src/demo/images',
        src: [ '**/*.{png,jpg,gif}' ],
        dest: 'demo/images'
      }
    ]
  }
};