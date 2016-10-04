module.exports = {
  entry: './src/app.js',
  output: {
    path: '.',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(glsl|vert|frag)$/,
        loader: 'shader',
      },
    ],
  },
};
