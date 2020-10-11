#!/usr/bin/env node

const path = require("path");
const { gzip } = require("node-gzip");

const args = process.argv.slice(2);

const blocks = require(path.join(process.cwd(), args[0]));

gzip(JSON.stringify({ blocks })).then((compressed) =>
  /* gzip(
    JSON.stringify({
      blocks: [
        {
          id: "block",
          block: "func",
          args: {
            items: [
              {
                item: {
                  id: "item",
                  data: {
                    item: {
                      DF_NBT: 2580,
                      id: "minecraft:ender_chest",
                      tag: {
                        PublicBukkitValues: {
                          "hypercube:codetemplatedata": {
                            author: "Proximitynow",
                            name: "§e§lEvent §6» §e1",
                            version: 1,
                            code: new Buffer.from(compressed).toString(
                              "base64"
                            ),
                          },
                        },
                      },
                    },
                  },
                },
                slot: 0,
              },
            ],
          },
        },
      ],
    })
  ).then((gz) => console.log(new Buffer.from(gz).toString("base64")))*/ console.log(
    new Buffer.from(compressed).toString("base64")
  )
);
