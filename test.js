const blubba = require("./lib/index");

blubba.on("JOIN", () => {
  blubba.player_action.SENDMESSAGE("Hello World!");
  blubba.set_var.set("v_test", "123321");
  blubba.player_action.SENDMESSAGE("v_test");
});

module.exports = blubba.blocks;
