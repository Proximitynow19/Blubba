#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const response = require(path.join(process.cwd(), args[0]));

let output = { blocks: [] };

gzip("output").then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
