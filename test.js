const blubba = require("./lib/index");

blubba.on("JOIN", () => {
  blubba.set_var.set("v_testvariable", "Hello World!");
  blubba.player_action.SENDMESSAGE("v_testvariable");
});

module.exports = blubba.blocks;
