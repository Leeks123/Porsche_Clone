module.exports = {
  rules: [{
    test: /\.(sass|scss|less|css)$/,
    use: [
      'style-loader', 'css-loader', // translates CSS into CommonJS
      'sass-loader', 'postcss-loader',
      {
        loader: 'less-loader', // compiles Less to CSS
        options: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#D5001C',
              'link-color': '#D5001C',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
    // ...other rules
  }],
  // ...other config
};
