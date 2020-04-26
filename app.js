'use strict';
const sls = require('serverless-http');
const app = require('./build/server');

module.exports.server = sls(app);
