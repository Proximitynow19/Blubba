const blubba = require("./lib/index");
blubba.on("Join", () => {
  blubba.player_action.SENDMESSAGE("Hello World!");
});
