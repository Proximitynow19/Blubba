#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");
const args = process.argv.slice(2);
const blocks = require(path.join(process.cwd(), args[0])).blocks;

let code = [
  { block: "event", action: "Quit", args: [] },
  {
    block: "player_action",
    action: "SendMessage",
    args: [
      {
        id: "txt",
        name: "Hello World!",
      },
    ],
  },
];

let uncompressed = { blocks: [] };

var block = 0;

code.forEach((m) => {
  var i = 0;

  uncompressed.blocks.push({
    id: "block",
    block: m.block,
    args: {
      items: m.args.map((n) => ({
        item: {
          id: n.id,
          data: { name: n.name },
        },
        slot: i++,
      })),
    },
    action: m.action,
  });

  m.args.forEach((element, index) => {
    if (element.target)
      uncompressed.blocks[block].args[index][target] = element.target;
  });

  block++;
});

gzip(JSON.stringify(uncompressed)).then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
