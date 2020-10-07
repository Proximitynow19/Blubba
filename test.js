const blubba = require("./lib/index");
blubba.on("Join", () => {
  blubba.PLAYER_ACTION.SEND_MESSAGE("Hello, World");
});
