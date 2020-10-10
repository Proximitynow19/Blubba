const blubba = require("./lib/index");
blubba.on("JOIN", () => {
  blubba.player_action.SENDMESSAGE("Hello World!");
});
module.exports = blubba.blocks;
