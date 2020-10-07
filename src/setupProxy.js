const { create } = require('domain');
const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('test');

module.exports = function(app) {
  app.use(
    '/.ory/kratos/public/',
    createProxyMiddleware({
      target: 'http://localhost:4433',
      pathRewrite: {'^/.ory/kratos/public' : ''},
      changeOrigin: true,
    })
  );
};

