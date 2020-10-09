const fs = require("fs");
const db = require("./db.json");

var code = `${db.codeblocks
  .map(
    (m) =>
      `export interface ${m.identifier} {${db.actions
        .filter((n) => n.codeblockName === m.name)
        .map(
          (k) =>
            `${k.name.replace(/[^a-zA-Z]/gi, "_").toUpperCase()}(${
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

fs.writeFile("index.d.ts", code, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
