String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = {
  on(event, callback) {
    this.blocks = [
      {
        id: "block",
        block: "event",
        args: { items: [] },
        action: event.toProperCase(),
      },
    ];
    callback();

    console.log(this.blocks);
  },
  PLAYER_ACTION: {
    SEND_MESSAGE(message) {
      console.log(this);
      this.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: message } }, slot: 0 },
            {
              item: {
                id: "bl_tag",
                data: {
                  option: "Add spaces",
                  tag: "Text Value Merging",
                  action: "SendMessage",
                  block: "player_action",
                },
              },
              slot: 25,
            },
            {
              item: {
                id: "bl_tag",
                data: {
                  option: "Regular",
                  tag: "Alignment Mode",
                  action: "SendMessage",
                  block: "player_action",
                },
              },
              slot: 26,
            },
          ],
        },
        action: "SendMessage",
        target: "Default",
      });
    },
  },
};
