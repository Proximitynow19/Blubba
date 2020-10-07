#!/usr/bin/env node

const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);

const file = fs.readFileSync(path.join(process.cwd(), args[0]));

console.log(file.toString());
