#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const file = fs.readFileSync(path.join(process.cwd(), args[0]));

console.log(file.toString());

return gzip(output).then((compressed) => new Buffer(compressed).toString("base64"));
