#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const blocks = require(path.join(process.cwd(), args[0])).blocks;

let code = [
  {
    block: "event",
    action: "Join",
    args: [],
  },
  {
    block: "player_action",
    action: "SendMessage",
    args: [{ id: "txt", name: "Hello, World" }],
    target: "Default",
  },
];

let uncompressed = `{"blocks":[`;

code.forEach((m) => {
  var i = 0;

  uncompressed += `{"id":"block","block":"${
    m.block
  }","args":{"items":[${m.args.map(
    (n) => `{"id":"${n.id}","data":{"name":"${n.name}"}},"slot":${i++}}`
  )}]},"action":"${m.action}"${m.target ? `,"target":"${m.target}"` : ""}},`;
});

uncompressed = uncompressed.substring(0, uncompressed.length - 1);

uncompressed += `]}`;

gzip(uncompressed).then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
