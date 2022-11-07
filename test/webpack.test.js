const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './app.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl)$/,
        use: {
          loader: path.resolve(__dirname, '../index.js'),
          options: {
            root: '/test/shaders/collections'
          }
        }
      }
    ]
  }
}
