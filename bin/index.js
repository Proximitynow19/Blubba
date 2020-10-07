#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const blocks = require(path.join(process.cwd(), args[0])).blocks;

let events = [];

gzip(
  `{"blocks":[${events
    .map(
      (m) =>
        `{"id":"block","block":"func","args":{"items":[{"item":{"id":"item","data":{"item":"{DF_NBT:2580,id:\"minecraft:ender_chest\",tag:{PublicBukkitValues:{\"hypercube:codetemplatedata\":'{\"author\":\"Proximitynow\",\"name\":\"§bCode Template §3» §bEvent\",\"version\":1,\"code\":\"${m}\"}'},display:{Name:'{\"extra\":[{\"bold\":false,\"italic\":false,\"underlined\":false,\"strikethrough\":false,\"obfuscated\":false,\"color\":\"aqua\",\"text\":\"Code Template \"},{\"italic\":false,\"color\":\"dark_aqua\",\"text\":\"» \"},{\"italic\":false,\"color\":\"aqua\",\"text\":\"Event\"}],\"text\":\"\"}'}},Count:1b}"}},"slot":0}`
    )
    .join(",")},"data":""}]}`
).then((compressed) =>
  console.log(new Buffer.from(compressed).toString("base64"))
);
