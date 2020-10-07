#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const blocks = require(path.join(process.cwd(), args[0])).blocks;

let code = [
  { block: "event", action: "Join" },
  { block: "player_action", action: "EnableBlocks" },
];

gzip(
  `{"blocks":[${code
    .map(
      (m) =>
        `{"id":"block","block":"${m.block}","args":{"items":[]},"action":"${m.action}"}`
    )
    .join(",")}]}`
).then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
