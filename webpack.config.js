module.exports = {
  entry: "./src/App.js",
  output: {
    path: './src',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}