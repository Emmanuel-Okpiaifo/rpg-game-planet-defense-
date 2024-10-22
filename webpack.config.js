const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // Import the plugin

module.exports = {
  entry: './src/js/main.js',  // Your entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // Output to dist folder
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // This copies your src/index.html to dist/index.html
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Serve from dist
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,  // Handle CSS
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development'
};

