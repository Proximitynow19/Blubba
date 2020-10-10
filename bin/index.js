#!/usr/bin/env node

const path = require("path");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const blocks = require(path.join(process.cwd(), args[0]));

gzip(JSON.stringify({ blocks })).then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
