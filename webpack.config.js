module.exports = {
  entry: './src/app/app.ts',
  //entry: './dist/app.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: './src/bundle.js'
  },
  devServer: {
    inline: false
  }
};
