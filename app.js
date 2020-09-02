// lambda.js
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./build/server.js").default;
const server = awsServerlessExpress.createServer(app);

exports.server = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
