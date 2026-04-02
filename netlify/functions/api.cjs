const serverless = require('serverless-http');
const app = require('../../server/index');

module.exports.handler = serverless(app, {
  // Netlify mounts this function at: /.netlify/functions/api
  basePath: '/.netlify/functions/api',
});

