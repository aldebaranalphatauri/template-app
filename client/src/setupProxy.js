const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "http://localhost:5000", //process.env.REACT_APP_BACKEND_URL || 'http://restheart:8080',
      changeOrigin: true,
      secure: false,
      //logLevel: 'debug',
      //pathRewrite: {
      //  '^/api/eventdb': rwu,
      //  '^/api' : ''
      // }
    })
  );
}