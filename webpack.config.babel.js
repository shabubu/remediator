import path from 'path';

export default {
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'remediator.js',
    library: 'remediator',
  },
};
