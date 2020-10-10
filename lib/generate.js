const fs = require("fs");
const db = require("../db.json");

var code = `${db.codeblocks
  .map(
    (c) =>
      `${c.identifier}: {\n${db.actions
        .filter((n) => n.codeblockName === c.name)
        .map(
          (a) =>
            `${a.name.replace(/[^a-zA-Z]/gi, "_").toUpperCase()}(${
              a.icon.arguments
                ? a.icon.arguments
                    .map((s) =>
                      `${
                        s.description
                          ? s.description
                              .join("_")
                              .replace(/[^a-zA-Z]/gi, "_")
                              .toUpperCase()
                          : ""
                      }` !== ""
                        ? `${
                            s.description
                              ? s.description
                                  .join("_")
                                  .replace(/[^a-zA-Z]/gi, "_")
                                  .toUpperCase()
                              : ""
                          }`
                        : ""
                    )
                    .join(",")
                : ""
            }) {module.exports.blocks.push({
                id: "block",
                block: "${c.identifier}",
                args: {
                  items: [
                    ${
                      a.icon.arguments
                        ? a.icon.arguments.length >= 1
                          ? a.icon.arguments.map((m, i) =>
                              (m.description
                                ? m.description
                                    .join("_")
                                    .replace(/[^a-zA-Z]/gi, "_")
                                    .toUpperCase()
                                : "") !== ""
                                ? `{item:{id:${m.description
                                    .join("_")
                                    .replace(/[^a-zA-Z]/gi, "_")
                                    .toUpperCase()}.toString().startsWith("v_") ? "var" : "${
                                    m.type
                                  }",data:{name:${m.description
                                    .join("_")
                                    .replace(/[^a-zA-Z]/gi, "_")
                                    .toUpperCase()}.toString().substring(2,${m.description
                                    .join("_")
                                    .replace(/[^a-zA-Z]/gi, "_")
                                    .toUpperCase()}.length)}},slot:${i}}`
                                : ""
                            )
                          : ""
                        : ""
                    }
                  ],
                },
                action: "${a.name}",
              })\n}`
        )
        .join(",\n")}}`
  )
  .join(",\n")}`;

console.log(code);

fs.writeFile("generated.js", code, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
