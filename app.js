// lambda.js
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./build/server.js").default;
const binaryMimeTypes = ["image/jpeg", "image/png"];
const server = awsServerlessExpress.createServer(
  app,
  undefined,
  binaryMimeTypes
);

exports.server = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
