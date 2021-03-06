const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new DevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: 'errors-only',
  historyApiFallback: true,
}).listen('3003', 'localhost', (err) => {
  if (err) console.log(err);
  else {
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log('listening to port 3003');
  }
});