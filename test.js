console.log("Main");

on("PLAYER_JOIN_GAME", () => {
  PLAYER_ACTION.SEND_MESSAGE("Hello, World");
});
