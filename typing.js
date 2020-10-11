const fs = require("fs");
const db = require("./db.json");

var code = `
${fs.readFileSync("typings/types.ts", "utf-8")}
${db.codeblocks
  .map(
    (m) =>
      `
      /**
      * ${m.name}
      * 
      * ${m.item.description.join(`\n* `)}
      * 
      * ${m.item.example.join(`\n* `)}
      */
      export interface ${m.identifier} {${db.actions
        .filter((n) => n.codeblockName === m.name)
        .map(
          (k) =>
            `
            /**
            * ${m.name}
            * 
            * ${m.item.description.join(`\n* `)}
            * 
            * ${m.item.example.join(`\n* `)}
            */
           ${k.name.replace(/[^a-zA-Z]/gi, "_").toUpperCase()}(${
              k.icon.arguments
                ? k.icon.arguments
                    .map((s) =>
                      `${
                        s.description
                          ? s.description
                              .join("_")
                              .replace(/[^a-zA-Z]/gi, "_")
                              .toUpperCase()
                          : ""
                      }${s.optional ? "?" : ""}: ${s.type}${
                        s.plural ? ` | ${s.type}[]` : ""
                      }` !== ": undefined"
                        ? `${
                            s.description
                              ? s.description
                                  .join("_")
                                  .replace(/[^a-zA-Z]/gi, "_")
                                  .toUpperCase()
                              : ""
                          }${s.optional ? "?" : ""}: ${s.type}${
                            s.plural ? ` | ${s.type}[]` : ""
                          }`
                        : ""
                    )
                    .join(",")
                : ""
            }): void;`
        )
        .join("\n")}\n}`
  )
  .join("\n")}`;

console.log(code);

fs.writeFile("typings/index.d.ts", code, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
