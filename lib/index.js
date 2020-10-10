String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = {
  on(event, callback) {
    module.exports.blocks = [
      {
        id: "block",
        block: require("../db.json").codeblocks.find(
          (n) =>
            require("../db.json").actions.find(
              (k) => k.name.replace(/[^a-zA-Z]/gi, "_").toUpperCase() === event
            ).codeblockName === n.name
        ).identifier,
        args: { items: [] },
        action: require("../db.json").actions.find(
          (n) => n.name.replace(/[^a-zA-Z]/gi, "_").toUpperCase() === event
        ).name,
      },
    ];

    callback();
  },
  player_action: {
    CLOSEINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "CloseInv",
      });
    },
    CLEAREFFECTS() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ClearEffects",
      });
    },
    GIVEITEMS(ITEM_S__TO_GIVE, AMOUNT_TO_GIVE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_S__TO_GIVE } }, slot: 0 },
            { item: { id: "num", data: { name: AMOUNT_TO_GIVE } }, slot: 1 },
          ],
        },
        action: "GiveItems",
      });
    },
    NOKEEPINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "NoKeepInv",
      });
    },
    BOSSBAR(TITLE, REMAINING_HEALTH, MAXIMUM_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: TITLE } }, slot: 0 },
            {
              item: { id: "num", data: { name: REMAINING_HEALTH } },
              slot: 1,
            },
            { item: { id: "num", data: { name: MAXIMUM_HEALTH } }, slot: 2 },
          ],
        },
        action: "BossBar",
      });
    },
    SETATKSPEED(ATTACK_SPEED) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: ATTACK_SPEED } }, slot: 0 },
          ],
        },
        action: "SetAtkSpeed",
      });
    },
    ADDINVROW(ITEMS_TO_DISPLAY) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEMS_TO_DISPLAY } }, slot: 0 },
          ],
        },
        action: "AddInvRow",
      });
    },
    DISABLEPVP() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "DisablePvp",
      });
    },
    NONATREGEN() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "NoNatRegen",
      });
    },
    DISPLAYLIGHTNING(STRIKE_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: STRIKE_LOCATION } },
              slot: 0,
            },
          ],
        },
        action: "DisplayLightning",
      });
    },
    REPLACEPROJ() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ReplaceProj",
      });
    },
    DAMAGE(DAMAGE_TO_INFLICT, DAMAGE_SOURCE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: DAMAGE_TO_INFLICT } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: DAMAGE_SOURCE } }, slot: 1 },
          ],
        },
        action: "Damage",
      });
    },
    SETEXP(EXPERIENCE_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: EXPERIENCE_TO_SET } },
              slot: 0,
            },
          ],
        },
        action: "SetExp",
      });
    },
    SENDANIMATION() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SendAnimation",
      });
    },
    SETXPPROG(PROGRESS__________) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: PROGRESS__________ } },
              slot: 0,
            },
          ],
        },
        action: "SetXPProg",
      });
    },
    TPSEQUENCE(LOCATIONS_TO_TELEPORT_TO, TELEPORT_DELAY__TICKS__DEFAULT______) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "loc",
                data: { name: LOCATIONS_TO_TELEPORT_TO },
              },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: TELEPORT_DELAY__TICKS__DEFAULT______ },
              },
              slot: 1,
            },
          ],
        },
        action: "TpSequence",
      });
    },
    HEAL(AMOUNT_TO_HEAL) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: AMOUNT_TO_HEAL } }, slot: 0 },
          ],
        },
        action: "Heal",
      });
    },
    SETINVENTORYKEPT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetInventoryKept",
      });
    },
    SETALLOWFLIGHT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetAllowFlight",
      });
    },
    LAUNCHUP(LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 0 },
          ],
        },
        action: "LaunchUp",
      });
    },
    SETMAXHEALTH(MAXIMUM_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: MAXIMUM_HEALTH } }, slot: 0 },
          ],
        },
        action: "SetMaxHealth",
      });
    },
    FORCEFLIGHT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ForceFlight",
      });
    },
    LOADINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "LoadInv",
      });
    },
    KICK() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "Kick",
      });
    },
    SETTABLISTINFO(HEADER_FOOTER_TEXT) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: HEADER_FOOTER_TEXT } },
              slot: 0,
            },
          ],
        },
        action: "SetTabListInfo",
      });
    },
    ENABLEPVP() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "EnablePvp",
      });
    },
    PROJCOLL() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ProjColl",
      });
    },
    HIDEDISGUISE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "HideDisguise",
      });
    },
    SETINVULTICKS(TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "num", data: { name: TICKS } }, slot: 0 }],
        },
        action: "SetInvulTicks",
      });
    },
    SETCURSORITEM(ITEM_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_SET } }, slot: 0 },
          ],
        },
        action: "SetCursorItem",
      });
    },
    SETABSORPTION(ABSORPTION_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: ABSORPTION_HEALTH } },
              slot: 0,
            },
          ],
        },
        action: "SetAbsorption",
      });
    },
    SETFIRETICKS(TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "num", data: { name: TICKS } }, slot: 0 }],
        },
        action: "SetFireTicks",
      });
    },
    SETGAMEMODE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetGamemode",
      });
    },
    REMOVEINVROW(ROWS_TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: ROWS_TO_REMOVE } }, slot: 0 },
          ],
        },
        action: "RemoveInvRow",
      });
    },
    ENABLEFLIGHT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "EnableFlight",
      });
    },
    DISABLEBLOCKS(BLOCKS_TO_DISALLOW) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCKS_TO_DISALLOW } },
              slot: 0,
            },
          ],
        },
        action: "DisableBlocks",
      });
    },
    REMOVEEFFECT(POTION_EFFECT_S_) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "POTION", data: { name: POTION_EFFECT_S_ } },
              slot: 0,
            },
          ],
        },
        action: "RemoveEffect",
      });
    },
    L_SETHEALTH() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "L SetHealth",
      });
    },
    GMADVENTURE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "GmAdventure",
      });
    },
    PARTICLEEFFECT(PARTICLE_EFFECT, PARTICLE_LOCATION, PARTICLE_COUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_EFFECT } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: PARTICLE_LOCATION } },
              slot: 1,
            },
            { item: { id: "num", data: { name: PARTICLE_COUNT } }, slot: 2 },
          ],
        },
        action: "ParticleEffect",
      });
    },
    CLEARINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ClearInv",
      });
    },
    SETGLIDING() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetGliding",
      });
    },
    DISALLOWDROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "DisallowDrops",
      });
    },
    CLEARITEMS(ITEM_S__TO_CLEAR) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_S__TO_CLEAR } }, slot: 0 },
          ],
        },
        action: "ClearItems",
      });
    },
    DISPLAYBLOCK(
      BLOCK_TO_DISPLAY,
      BLOCK_LOCATION__OR_START_OF_REGION,
      END_OF_REGION,
      BLOCK_DATA
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCK_TO_DISPLAY } },
              slot: 0,
            },
            {
              item: {
                id: "loc",
                data: { name: BLOCK_LOCATION__OR_START_OF_REGION },
              },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: END_OF_REGION } },
              slot: 2,
            },
            { item: { id: "BLOCK_TAG", data: { name: BLOCK_DATA } }, slot: 3 },
          ],
        },
        action: "DisplayBlock",
      });
    },
    RIDEENTITY(NAME_OR_UUID_OF_TARGET_TO_RIDE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: NAME_OR_UUID_OF_TARGET_TO_RIDE },
              },
              slot: 0,
            },
          ],
        },
        action: "RideEntity",
      });
    },
    WEATHERRAIN() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "WeatherRain",
      });
    },
    SETFLYING() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetFlying",
      });
    },
    RMWORLDBORDER() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "RmWorldBorder",
      });
    },
    DISPLAYBLOCKOPEN(BLOCK_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_LOCATION } },
              slot: 0,
            },
          ],
        },
        action: "DisplayBlockOpen",
      });
    },
    SETHANDITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetHandItem",
      });
    },
    SENDADVANCEMENT(ADVANCEMENT_NAME, ADVANCEMENT_ICON) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: ADVANCEMENT_NAME } }, slot: 0 },
            { item: { id: "item", data: { name: ADVANCEMENT_ICON } }, slot: 1 },
          ],
        },
        action: "SendAdvancement",
      });
    },
    CLEARCHAT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ClearChat",
      });
    },
    TELEPORT(NEW_POSITION) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: NEW_POSITION } }, slot: 0 },
          ],
        },
        action: "Teleport",
      });
    },
    SETALLOWPVP() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetAllowPVP",
      });
    },
    SETMENUITEM(SLOT_S__TO_SET, ITEM_S__TO_DISPLAY) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: SLOT_S__TO_SET } }, slot: 0 },
            {
              item: { id: "item", data: { name: ITEM_S__TO_DISPLAY } },
              slot: 1,
            },
          ],
        },
        action: "SetMenuItem",
      });
    },
    LAUNCHTOWARD(LAUNCH_DESTINATION, LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LAUNCH_DESTINATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 1 },
          ],
        },
        action: "LaunchToward",
      });
    },
    SETARMOR(ARMOR_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ARMOR_TO_SET } }, slot: 0 },
          ],
        },
        action: "SetArmor",
      });
    },
    DISABLEFLIGHT() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "DisableFlight",
      });
    },
    GMSURVIVAL() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "GmSurvival",
      });
    },
    SETDISGUISEVISIBLE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetDisguiseVisible",
      });
    },
    SETARROWSSTUCK(ARROW_COUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: ARROW_COUNT } }, slot: 0 },
          ],
        },
        action: "SetArrowsStuck",
      });
    },
    GIVEEXP(EXPERIENCE_TO_GIVE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: EXPERIENCE_TO_GIVE } },
              slot: 0,
            },
          ],
        },
        action: "GiveExp",
      });
    },
    SETITEMS(ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "item",
                data: {
                  name: ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS,
                },
              },
              slot: 0,
            },
          ],
        },
        action: "SetItems",
      });
    },
    KEEPINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "KeepInv",
      });
    },
    REPLACEITEMS(
      ITEM_S__TO_REPLACE,
      ITEM_TO_REPLACE_WITH,
      AMOUNT_OF_ITEMS_TO_REPLACE
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_REPLACE } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_TO_REPLACE_WITH } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: AMOUNT_OF_ITEMS_TO_REPLACE },
              },
              slot: 2,
            },
          ],
        },
        action: "ReplaceItems",
      });
    },
    ACTIONBAR(MESSAGE_TO_SEND) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: MESSAGE_TO_SEND } }, slot: 0 },
          ],
        },
        action: "ActionBar",
      });
    },
    SETCHATTAG(NEW_CHAT_TAG) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: NEW_CHAT_TAG } }, slot: 0 },
          ],
        },
        action: "SetChatTag",
      });
    },
    SENDMESSAGE(MESSAGE_TO_SEND) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: MESSAGE_TO_SEND } }, slot: 0 },
          ],
        },
        action: "SendMessage",
      });
    },
    SHIFTWORLDBORDER(NEW_RADIUS, BLOCKS_PER_SECOND) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: NEW_RADIUS } }, slot: 0 },
            {
              item: { id: "num", data: { name: BLOCKS_PER_SECOND } },
              slot: 1,
            },
          ],
        },
        action: "ShiftWorldBorder",
      });
    },
    SETSLOTITEM(ITEM_TO_SET, SLOT_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_SET } }, slot: 0 },
            { item: { id: "num", data: { name: SLOT_TO_SET } }, slot: 1 },
          ],
        },
        action: "SetSlotItem",
      });
    },
    PLAYSOUNDSEQ(
      SOUNDS_TO_PLAY,
      SOUND_DELAY__TICKS__DEFAULT______,
      PLAYBACK_LOCATION
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "snd", data: { name: SOUNDS_TO_PLAY } }, slot: 0 },
            {
              item: {
                id: "num",
                data: { name: SOUND_DELAY__TICKS__DEFAULT______ },
              },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: PLAYBACK_LOCATION } },
              slot: 2,
            },
          ],
        },
        action: "PlaySoundSeq",
      });
    },
    SENDDIALOGUE(MESSAGES_TO_SEND, MESSAGE_DELAY_TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: MESSAGES_TO_SEND } }, slot: 0 },
            {
              item: { id: "num", data: { name: MESSAGE_DELAY_TICKS } },
              slot: 1,
            },
          ],
        },
        action: "SendDialogue",
      });
    },
    DISPLAYSIGNTEXT(SIGN_LOCATION, TEXT_LINE_S_) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: SIGN_LOCATION } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_LINE_S_ } }, slot: 1 },
          ],
        },
        action: "DisplaySignText",
      });
    },
    RESPAWN() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "Respawn",
      });
    },
    SETSPEED(MOVEMENT_SPEED_PERCENTAGE_____TO_______) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "num",
                data: { name: MOVEMENT_SPEED_PERCENTAGE_____TO_______ },
              },
              slot: 0,
            },
          ],
        },
        action: "SetSpeed",
      });
    },
    EXPANDINV(ITEMS_TO_DISPLAY) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEMS_TO_DISPLAY } }, slot: 0 },
          ],
        },
        action: "ExpandInv",
      });
    },
    SETINVNAME(INVENTORY_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: INVENTORY_NAME } }, slot: 0 },
          ],
        },
        action: "SetInvName",
      });
    },
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH,
      LAUNCH_POINT,
      PROJECTILE_NAME,
      SPEED,
      INACCURACY__DEFAULT_____,
      LAUNCH_TRAIL
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "PROJECTILE", data: { name: PROJECTILE_TO_LAUNCH } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: LAUNCH_POINT } }, slot: 1 },
            { item: { id: "txt", data: { name: PROJECTILE_NAME } }, slot: 2 },
            { item: { id: "num", data: { name: SPEED } }, slot: 3 },
            {
              item: { id: "num", data: { name: INACCURACY__DEFAULT_____ } },
              slot: 4,
            },
            { item: { id: "PARTICLE", data: { name: LAUNCH_TRAIL } }, slot: 5 },
          ],
        },
        action: "LaunchProj",
      });
    },
    SETITEMCOOLDOWN(
      ITEM_TYPE_TO_AFFECT,
      COOLDOWN_IN_TICKS,
      COOLDOWN_REFRESH_SOUND
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_TYPE_TO_AFFECT } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: COOLDOWN_IN_TICKS } },
              slot: 1,
            },
            {
              item: { id: "snd", data: { name: COOLDOWN_REFRESH_SOUND } },
              slot: 2,
            },
          ],
        },
        action: "SetItemCooldown",
      });
    },
    SETPLAYERWEATHER() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetPlayerWeather",
      });
    },
    SENDHOVER(MESSAGE_TO_SEND_IN_CHAT, MESSAGE_TO_SEE_ON_HOVER) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: MESSAGE_TO_SEND_IN_CHAT } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: MESSAGE_TO_SEE_ON_HOVER } },
              slot: 1,
            },
          ],
        },
        action: "SendHover",
      });
    },
    GIVEEFFECT(POTION_EFFECTS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "POTION", data: { name: POTION_EFFECTS } }, slot: 0 },
          ],
        },
        action: "GiveEffect",
      });
    },
    NOPROJCOLL() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "NoProjColl",
      });
    },
    SHOWDISGUISE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "ShowDisguise",
      });
    },
    SETAIRTICKS(BREATH_TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: BREATH_TICKS } }, slot: 0 },
          ],
        },
        action: "SetAirTicks",
      });
    },
    CHATCOLOR(NEW_CHAT_COLOR) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: NEW_CHAT_COLOR } }, slot: 0 },
          ],
        },
        action: "ChatColor",
      });
    },
    SETWORLDBORDER(CENTER_POSITION, RADIUS_IN_BLOCKS, WARNING_DISTANCE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CENTER_POSITION } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: RADIUS_IN_BLOCKS } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: WARNING_DISTANCE } },
              slot: 2,
            },
          ],
        },
        action: "SetWorldBorder",
      });
    },
    SETPLAYERTIME(DAYLIGHT_TIME) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: DAYLIGHT_TIME } }, slot: 0 },
          ],
        },
        action: "SetPlayerTime",
      });
    },
    NATREGEN() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "NatRegen",
      });
    },
    PLAYSOUND(SOUND_TO_PLAY, PLAYBACK_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "snd", data: { name: SOUND_TO_PLAY } }, slot: 0 },
            {
              item: { id: "loc", data: { name: PLAYBACK_LOCATION } },
              slot: 1,
            },
          ],
        },
        action: "PlaySound",
      });
    },
    SETCOMPASS(NEW_TARGET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "loc", data: { name: NEW_TARGET } }, slot: 0 }],
        },
        action: "SetCompass",
      });
    },
    REMOVEITEMS(ITEM_S__TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_REMOVE } },
              slot: 0,
            },
          ],
        },
        action: "RemoveItems",
      });
    },
    RNGTELEPORT(LOCATIONS_TO_CHOOSE_FROM) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "loc",
                data: { name: LOCATIONS_TO_CHOOSE_FROM },
              },
              slot: 0,
            },
          ],
        },
        action: "RngTeleport",
      });
    },
    SAVEINV() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SaveInv",
      });
    },
    OPENBOOK(BOOK_ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "item", data: { name: BOOK_ITEM } }, slot: 0 }],
        },
        action: "OpenBook",
      });
    },
    SETHEALTH(REMAINING_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: REMAINING_HEALTH } },
              slot: 0,
            },
          ],
        },
        action: "SetHealth",
      });
    },
    MOBDISGUISE(MOB_DISGUISE, DISGUISE_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "SPAWN_EGG", data: { name: MOB_DISGUISE } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: DISGUISE_NAME } }, slot: 1 },
          ],
        },
        action: "MobDisguise",
      });
    },
    BLOCKDISGUISE(BLOCK_DISGUISE, NAME_OF_DISGUISE) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCK_DISGUISE } }, slot: 0 },
            { item: { id: "txt", data: { name: NAME_OF_DISGUISE } }, slot: 1 },
          ],
        },
        action: "BlockDisguise",
      });
    },
    ROLLBACKBLOCKS(ROLLBACK_TIME) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: ROLLBACK_TIME } }, slot: 0 },
          ],
        },
        action: "RollbackBlocks",
      });
    },
    NODEATHDROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "NoDeathDrops",
      });
    },
    WALKSPEED(__OF_NORMAL_WALK_SPEED____TO_____) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "num",
                data: { name: __OF_NORMAL_WALK_SPEED____TO_____ },
              },
              slot: 0,
            },
          ],
        },
        action: "WalkSpeed",
      });
    },
    ENABLEBLOCKS(BLOCKS_TO_ALLOW) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCKS_TO_ALLOW } }, slot: 0 },
          ],
        },
        action: "EnableBlocks",
      });
    },
    OPENBLOCKINV(BLOCK_TO_ACCESS) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_TO_ACCESS } },
              slot: 0,
            },
          ],
        },
        action: "OpenBlockInv",
      });
    },
    SETCOLLIDABLE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetCollidable",
      });
    },
    LAUNCHFWD(LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 0 },
          ],
        },
        action: "LaunchFwd",
      });
    },
    REMOVEBOSSBAR() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "RemoveBossBar",
      });
    },
    SETFALLDISTANCE(FALL_DISTANCE__BLOCKS_) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: FALL_DISTANCE__BLOCKS_ } },
              slot: 0,
            },
          ],
        },
        action: "SetFallDistance",
      });
    },
    SETEQUIPMENT(ITEM_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_SET } }, slot: 0 },
          ],
        },
        action: "SetEquipment",
      });
    },
    ATTACKANIMATION() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "AttackAnimation",
      });
    },
    GIVERNGITEM(ITEMS_TO_PICK_FROM) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEMS_TO_PICK_FROM } },
              slot: 0,
            },
          ],
        },
        action: "GiveRngItem",
      });
    },
    SETDROPSENABLED() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "SetDropsEnabled",
      });
    },
    DISPLAYFRACTURE(BLOCK_S__TO_FRACTURE, FRACTURE_LEVEL) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_S__TO_FRACTURE } },
              slot: 0,
            },
            { item: { id: "num", data: { name: FRACTURE_LEVEL } }, slot: 1 },
          ],
        },
        action: "DisplayFracture",
      });
    },
    ALLOWDROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "AllowDrops",
      });
    },
    DEATHDROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "DeathDrops",
      });
    },
    SHOWINV(ITEMS_TO_DISPLAY) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEMS_TO_DISPLAY } }, slot: 0 },
          ],
        },
        action: "ShowInv",
      });
    },
    SETSLOT(NEW_SLOT) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "num", data: { name: NEW_SLOT } }, slot: 0 }],
        },
        action: "SetSlot",
      });
    },
    SETFOODLEVEL(NEW_HUNGER_LEVEL_______) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NEW_HUNGER_LEVEL_______ } },
              slot: 0,
            },
          ],
        },
        action: "SetFoodLevel",
      });
    },
    PLAYERDISGUISE(DISGUISE_PLAYER_NAME, DISGUISE_SKIN) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: DISGUISE_PLAYER_NAME } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: DISGUISE_SKIN } }, slot: 1 },
          ],
        },
        action: "PlayerDisguise",
      });
    },
    SETSATURATION(NEW_SATURATION_LEVEL_______) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            {
              item: {
                id: "num",
                data: { name: NEW_SATURATION_LEVEL_______ },
              },
              slot: 0,
            },
          ],
        },
        action: "SetSaturation",
      });
    },
    WEATHERCLEAR() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "WeatherClear",
      });
    },
    UNDISGUISE() {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [],
        },
        action: "Undisguise",
      });
    },
    SENDTITLE(
      TITLE_TEXT,
      SUBTITLE_TEXT,
      TITLE_DURATION,
      FADE_IN_LENGTH,
      FADE_OUT_LENGTH
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: TITLE_TEXT } }, slot: 0 },
            { item: { id: "txt", data: { name: SUBTITLE_TEXT } }, slot: 1 },
            { item: { id: "num", data: { name: TITLE_DURATION } }, slot: 2 },
            { item: { id: "num", data: { name: FADE_IN_LENGTH } }, slot: 3 },
            {
              item: { id: "num", data: { name: FADE_OUT_LENGTH } },
              slot: 4,
            },
          ],
        },
        action: "SendTitle",
      });
    },
    STOPSOUND(SOUNDS_TO_STOP) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [
            { item: { id: "snd", data: { name: SOUNDS_TO_STOP } }, slot: 0 },
          ],
        },
        action: "StopSound",
      });
    },
    SETNAMECOLOR(NAME_COLOR) {
      module.exports.blocks.push({
        id: "block",
        block: "player_action",
        args: {
          items: [{ item: { id: "txt", data: { name: NAME_COLOR } }, slot: 0 }],
        },
        action: "SetNameColor",
      });
    },
  },
  if_player: {
    ISLOOKINGAT(
      BLOCK_S__TO_CHECK_FOR,
      LOCATION_S__TO_CHECK_FOR,
      MAXIMUM_DISTANCE_FROM_TARGET_BLOCK
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCK_S__TO_CHECK_FOR } },
              slot: 0,
            },
            {
              item: {
                id: "loc",
                data: { name: LOCATION_S__TO_CHECK_FOR },
              },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: MAXIMUM_DISTANCE_FROM_TARGET_BLOCK },
              },
              slot: 3,
            },
          ],
        },
        action: "IsLookingAt",
      });
    },
    INWORLDBORDER(LOCATION_TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHECK } },
              slot: 0,
            },
          ],
        },
        action: "InWorldBorder",
      });
    },
    HASROOMFORITEM(ITEM_S__TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_S__TO_CHECK } }, slot: 0 },
          ],
        },
        action: "HasRoomForItem",
      });
    },
    ISHOLDINGOFF() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsHoldingOff",
      });
    },
    NOITEMCOOLDOWN(ITEM_TYPE_S__TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_TYPE_S__TO_CHECK } },
              slot: 0,
            },
          ],
        },
        action: "NoItemCooldown",
      });
    },
    ISUSINGITEM(ITEM_S__TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_S__TO_CHECK } }, slot: 0 },
          ],
        },
        action: "IsUsingItem",
      });
    },
    HASALLITEMS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "HasAllItems",
      });
    },
    ISSWIMMING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsSwimming",
      });
    },
    HASITEM(ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "HasItem",
      });
    },
    BLOCKEQUALS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "BlockEquals",
      });
    },
    ISWEARING(ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "IsWearing",
      });
    },
    ISNEAR(CENTER_LOCATION, RANGE) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CENTER_LOCATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: RANGE } }, slot: 1 },
          ],
        },
        action: "IsNear",
      });
    },
    ISRIDING(
      ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: {
                  name: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO,
                },
              },
              slot: 0,
            },
          ],
        },
        action: "IsRiding",
      });
    },
    STANDINGON(BLOCK_TO_CHECK_FOR, LOCATION_TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCK_TO_CHECK_FOR } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHECK_FOR } },
              slot: 2,
            },
          ],
        },
        action: "StandingOn",
      });
    },
    CMDEQUALS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "CmdEquals",
      });
    },
    HASEFFECT(POTION_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "POTION", data: { name: POTION_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "HasEffect",
      });
    },
    ISGROUNDED() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsGrounded",
      });
    },
    CURSORITEM(ITEMS_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEMS_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "CursorItem",
      });
    },
    SLOTEQUALS(SLOT_ID_TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "num", data: { name: SLOT_ID_TO_CHECK } },
              slot: 0,
            },
          ],
        },
        action: "SlotEquals",
      });
    },
    ITEMEQUALS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "ItemEquals",
      });
    },
    ISHOLDINGMAIN() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsHoldingMain",
      });
    },
    ISHOLDING(ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "IsHolding",
      });
    },
    MENUSLOTEQUALS(SLOT_ID_S__TO_CHECK, ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "num", data: { name: SLOT_ID_S__TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "MenuSlotEquals",
      });
    },
    ISBLOCKING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsBlocking",
      });
    },
    HASPERMISSION() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "HasPermission",
      });
    },
    ISSNEAKING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsSneaking",
      });
    },
    ISFLYING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsFlying",
      });
    },
    NAMEEQUALS(NAME_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: NAME_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "NameEquals",
      });
    },
    INVOPEN() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "InvOpen",
      });
    },
    HASSLOTITEM(SLOT_S__TO_CHECK, ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [
            {
              item: { id: "num", data: { name: SLOT_S__TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "HasSlotItem",
      });
    },
    ISSPRINTING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsSprinting",
      });
    },
    ISGLIDING() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "IsGliding",
      });
    },
    CMDARGEQUALS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_player",
        args: {
          items: [],
        },
        action: "CmdArgEquals",
      });
    },
  },
  call_func: {
    DYNAMIC() {
      module.exports.blocks.push({
        id: "block",
        block: "call_func",
        args: {
          items: [],
        },
        action: "dynamic",
      });
    },
  },
  func: {
    DYNAMIC() {
      module.exports.blocks.push({
        id: "block",
        block: "func",
        args: {
          items: [],
        },
        action: "dynamic",
      });
    },
  },
  entity_event: {
    ENTITYKILLENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "EntityKillEntity",
      });
    },
    BLOCKFALL() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "BlockFall",
      });
    },
    PROJKILLENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "ProjKillEntity",
      });
    },
    ENTITYDMGENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "EntityDmgEntity",
      });
    },
    FALLINGBLOCKLAND() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "FallingBlockLand",
      });
    },
    ENTITYDMG() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "EntityDmg",
      });
    },
    PROJDMGENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "ProjDmgEntity",
      });
    },
    ENTITYDEATH() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "EntityDeath",
      });
    },
    VEHICLEDAMAGE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_event",
        args: {
          items: [],
        },
        action: "VehicleDamage",
      });
    },
  },
  set_var: {
    GETPOTIONAMP(VARIABLE_TO_SET, POTION) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "POTION", data: { name: POTION } }, slot: 1 },
          ],
        },
        action: "GetPotionAmp",
      });
    },
    RANDOMOBJ(VARIABLE_TO_SET, VALUE_S__TO_CHOOSE_FROM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUE_S__TO_CHOOSE_FROM } },
              slot: 1,
            },
          ],
        },
        action: "RandomObj",
      });
    },
    SETITEMAMOUNT(VARIABLE_TO_SET, STACK_SIZE, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: STACK_SIZE } }, slot: 1 },
            { item: { id: "item", data: { name: item } }, slot: 2 },
          ],
        },
        action: "SetItemAmount",
      });
    },
    SETITEMENCHANTS(VARIABLE_TO_SET, ITEM_TO_ENCHANT, ITEM_ENCHANTS) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: ITEM_TO_ENCHANT } }, slot: 1 },
            { item: { id: "list", data: { name: ITEM_ENCHANTS } }, slot: 2 },
          ],
        },
        action: "SetItemEnchants",
      });
    },
    SETCASE(VARIABLE_TO_SET, TEXT_TO_CHANGE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_CHANGE } }, slot: 1 },
          ],
        },
        action: "SetCase",
      });
    },
    PURGEVARS(NAME_TO_MATCH) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: NAME_TO_MATCH } }, slot: 0 },
          ],
        },
        action: "PurgeVars",
      });
    },
    SHIFTALLAXES(
      VARIABLE_TO_SET,
      LOCATION_TO_CHANGE,
      X_CHANGE,
      Y_CHANGE,
      Z_CHANGE
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "num", data: { name: X_CHANGE } }, slot: 2 },
            { item: { id: "num", data: { name: Y_CHANGE } }, slot: 3 },
            { item: { id: "num", data: { name: Z_CHANGE } }, slot: 4 },
          ],
        },
        action: "ShiftAllAxes",
      });
    },
    GETLIGHT(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetLight",
      });
    },
    DISTANCE(VARIABLE_TO_SET, LOCATION__, LOCATION___) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: LOCATION__ } }, slot: 1 },
            { item: { id: "loc", data: { name: LOCATION___ } }, slot: 2 },
          ],
        },
        action: "Distance",
      });
    },
    ABSOLUTEVALUE(VARIABLE_TO_SET, NUMBER_INPUT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
          ],
        },
        action: "AbsoluteValue",
      });
    },
    FACEDIRECTION(VARIABLE_TO_SET, LOCATION_TO_CHANGE, DIRECTION) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: DIRECTION } }, slot: 2 },
          ],
        },
        action: "FaceDirection",
      });
    },
    APPENDVALUE(LIST_TO_APPEND_TO, VALUE_S__TO_APPEND) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_APPEND_TO } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUE_S__TO_APPEND } },
              slot: 1,
            },
          ],
        },
        action: "AppendValue",
      });
    },
    SETITEMLORE(VARIABLE_TO_SET, item, ITEM_LORE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: ITEM_LORE } }, slot: 2 },
          ],
        },
        action: "SetItemLore",
      });
    },
    ROOT(VARIABLE_TO_SET, NUMBER_INPUT, ROOT_INDEX) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
            { item: { id: "num", data: { name: ROOT_INDEX } }, slot: 2 },
          ],
        },
        action: "Root",
      });
    },
    rem(VARIABLE_TO_SET, DIVIDEND, DIVISOR) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: DIVIDEND } }, slot: 1 },
            { item: { id: "num", data: { name: DIVISOR } }, slot: 2 },
          ],
        },
        action: "%",
      });
    },
    GETITEMATTRIBUTE(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemAttribute",
      });
    },
    add(VARIABLE_TO_SET, VALUES_TO_ADD) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUES_TO_ADD } },
              slot: 1,
            },
          ],
        },
        action: "+",
      });
    },
    SHIFTROTATION(VARIABLE_TO_SET, LOCATION_TO_SHIFT, ROTATION_AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SHIFT } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: ROTATION_AMOUNT } },
              slot: 2,
            },
          ],
        },
        action: "ShiftRotation",
      });
    },
    minus(VARIABLE_TO_SET, VALUE_TO_SUBTRACT_FROM, VALUES_TO_SUBTRACT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUE_TO_SUBTRACT_FROM } },
              slot: 1,
            },
            {
              item: { id: "txt", data: { name: VALUES_TO_SUBTRACT } },
              slot: 2,
            },
          ],
        },
        action: "-",
      });
    },
    ADDITEMENCHANT(VARIABLE_TO_SET, item, ENCHANT_NAME, ENCHANT_LEVEL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: ENCHANT_NAME } }, slot: 2 },
            { item: { id: "num", data: { name: ENCHANT_LEVEL } }, slot: 3 },
          ],
        },
        action: "AddItemEnchant",
      });
    },
    GETITEMRARITY(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemRarity",
      });
    },
    div(VARIABLE_TO_SET, NUMBERS_TO_DIVIDE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBERS_TO_DIVIDE } },
              slot: 1,
            },
          ],
        },
        action: "/",
      });
    },
    GETITEMTYPE(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemType",
      });
    },
    GETDIRECTION(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetDirection",
      });
    },
    TRIMTEXT(
      VARIABLE_TO_SET,
      TEXT_TO_TRIM,
      START_CHARACTER_POSITION,
      END_CHARACTER_POSITION
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "var", data: { name: TEXT_TO_TRIM } }, slot: 1 },
            {
              item: { id: "num", data: { name: START_CHARACTER_POSITION } },
              slot: 2,
            },
            {
              item: { id: "num", data: { name: END_CHARACTER_POSITION } },
              slot: 3,
            },
          ],
        },
        action: "TrimText",
      });
    },
    GETSIGNTEXT(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetSignText",
      });
    },
    SETHEADOWNER(VARIABLE_TO_SET, PLAYER_HEAD_ITEM, OWNER_NAME_OR_UUID) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: PLAYER_HEAD_ITEM } }, slot: 1 },
            {
              item: { id: "txt", data: { name: OWNER_NAME_OR_UUID } },
              slot: 2,
            },
          ],
        },
        action: "SetHeadOwner",
      });
    },
    PARSEX() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ParseX",
      });
    },
    PARSEY() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ParseY",
      });
    },
    PARSEZ() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ParseZ",
      });
    },
    GETALLBLOCKDATA(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetAllBlockData",
      });
    },
    set(VARIABLE_TO_SET, VALUE_S__TO_ASSIGN) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUE_S__TO_ASSIGN } },
              slot: 1,
            },
          ],
        },
        action: "=",
      });
    },
    RMTEXT(VARIABLE_TO_REMOVE_OTHER_TEXT_FROM, TEXT_TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: VARIABLE_TO_REMOVE_OTHER_TEXT_FROM },
              },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_REMOVE } }, slot: 1 },
          ],
        },
        action: "RmText",
      });
    },
    ADDITEMATTRIBUTE(VARIABLE_TO_SET, item, MODIFIER_AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            {
              item: { id: "num", data: { name: MODIFIER_AMOUNT } },
              slot: 2,
            },
          ],
        },
        action: "AddItemAttribute",
      });
    },
    GETCOORD(VARIABLE_TO_SET, LOCATION_TO_PARSE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_PARSE } },
              slot: 1,
            },
          ],
        },
        action: "GetCoord",
      });
    },
    REMOVEITEMTAG(VARIABLE_TO_SET, item, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 2 },
          ],
        },
        action: "RemoveItemTag",
      });
    },
    GETPOTIONDUR(VARIABLE_TO_SET, POTION) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "POTION", data: { name: POTION } }, slot: 1 },
          ],
        },
        action: "GetPotionDur",
      });
    },
    ALIGNLOC(VARIABLE_TO_SET, LOCATION_TO_ALIGN) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_ALIGN } },
              slot: 1,
            },
          ],
        },
        action: "AlignLoc",
      });
    },
    RANDOMLOC(VARIABLE_TO_SET, LOCATION__, LOCATION___) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: LOCATION__ } }, slot: 1 },
            { item: { id: "loc", data: { name: LOCATION___ } }, slot: 2 },
          ],
        },
        action: "RandomLoc",
      });
    },
    SETSOUNDTYPE(
      VARIABLE_TO_SET,
      SOUND_TO_CHANGE,
      SOUND_NAME__E_G___RABBIT_EAT__
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "snd", data: { name: SOUND_TO_CHANGE } }, slot: 1 },
            {
              item: {
                id: "txt",
                data: { name: SOUND_NAME__E_G___RABBIT_EAT__ },
              },
              slot: 2,
            },
          ],
        },
        action: "SetSoundType",
      });
    },
    SHIFTDIRECTION(VARIABLE_TO_SET, LOCATION_TO_SHIFT, SHIFT_DISTANCE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SHIFT } },
              slot: 1,
            },
            { item: { id: "num", data: { name: SHIFT_DISTANCE } }, slot: 2 },
          ],
        },
        action: "ShiftDirection",
      });
    },
    GETCONTAINERNAME(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetContainerName",
      });
    },
    GETSOUNDVOLUME(VARIABLE_TO_SET, SOUND_TO_GET_VOLUME_OF) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "snd", data: { name: SOUND_TO_GET_VOLUME_OF } },
              slot: 1,
            },
          ],
        },
        action: "GetSoundVolume",
      });
    },
    RANDOMNUMBER(VARIABLE_TO_SET, MINIMUM_NUMBER, MAXIMUM_NUMBER) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: MINIMUM_NUMBER } }, slot: 1 },
            { item: { id: "num", data: { name: MAXIMUM_NUMBER } }, slot: 2 },
          ],
        },
        action: "RandomNumber",
      });
    },
    MIXCOLORS(VARIABLE_TO_SET, COLORS_TO_MIX) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: COLORS_TO_MIX } }, slot: 1 },
          ],
        },
        action: "MixColors",
      });
    },
    GETHEADOWNER(VARIABLE_TO_SET, HEAD_TO_GET_OWNER_OF) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: HEAD_TO_GET_OWNER_OF } },
              slot: 1,
            },
          ],
        },
        action: "GetHeadOwner",
      });
    },
    GETITEMENCHANTS(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemEnchants",
      });
    },
    GETMAXITEMAMOUNT(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetMaxItemAmount",
      });
    },
    SETLISTVALUE(LIST_TO_MODIFY, LIST_INDEX, VALUE_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_MODIFY } },
              slot: 0,
            },
            { item: { id: "num", data: { name: LIST_INDEX } }, slot: 1 },
            { item: { id: "txt", data: { name: VALUE_TO_SET } }, slot: 2 },
          ],
        },
        action: "SetListValue",
      });
    },
    FINDCENTER(VARIABLE_TO_SET, LOCATIONS_TO_CENTER) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATIONS_TO_CENTER } },
              slot: 1,
            },
          ],
        },
        action: "FindCenter",
      });
    },
    SETBOOKTEXT(VARIABLE_TO_SET, BOOK_ITEM, PAGES, PAGE_TEXT, PAGE_NUMBER) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: BOOK_ITEM } }, slot: 1 },
            { item: { id: "list", data: { name: PAGES } }, slot: 2 },
            { item: { id: "txt", data: { name: PAGE_TEXT } }, slot: 6 },
            { item: { id: "num", data: { name: PAGE_NUMBER } }, slot: 7 },
          ],
        },
        action: "SetBookText",
      });
    },
    SETITEMTYPE(VARIABLE_TO_SET, item, ITEM_MATERIAL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: ITEM_MATERIAL } }, slot: 2 },
          ],
        },
        action: "SetItemType",
      });
    },
    GETSOUNDTYPE(VARIABLE_TO_SET, snd) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "snd", data: { name: snd } }, slot: 1 },
          ],
        },
        action: "GetSoundType",
      });
    },
    GETLISTVALUE(VARIABLE_TO_SET, LIST_TO_ACCESS, LIST_INDEX) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "list", data: { name: LIST_TO_ACCESS } }, slot: 1 },
            { item: { id: "num", data: { name: LIST_INDEX } }, slot: 2 },
          ],
        },
        action: "GetListValue",
      });
    },
    AVERAGE(VARIABLE_TO_SET, NUMBERS_TO_AVERAGE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBERS_TO_AVERAGE } },
              slot: 1,
            },
          ],
        },
        action: "Average",
      });
    },
    txt(VARIABLE_TO_SET, TEXT_TO_SET_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: TEXT_TO_SET_TO } },
              slot: 1,
            },
          ],
        },
        action: "Text",
      });
    },
    TANGENT(VARIABLE_TO_SET, NUMBER_INPUT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
          ],
        },
        action: "Tangent",
      });
    },
    WRAPNUMBER(VARIABLE_TO_SET, NUMBER_TO_WRAP, LOWER_BOUND, UPPER_BOUND) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_TO_WRAP } }, slot: 1 },
            { item: { id: "num", data: { name: LOWER_BOUND } }, slot: 2 },
            { item: { id: "num", data: { name: UPPER_BOUND } }, slot: 3 },
          ],
        },
        action: "WrapNumber",
      });
    },
    SETY() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetY",
      });
    },
    GETBLOCKDATA(VARIABLE_TO_SET, loc, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 2 },
          ],
        },
        action: "GetBlockData",
      });
    },
    VORONOINOISE(
      VARIABLE_TO_SET,
      NOISE_LOCATION,
      CELL_FREQUENCY,
      CELL_SCATTER,
      GENERATION_SEED
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: NOISE_LOCATION } },
              slot: 1,
            },
            { item: { id: "num", data: { name: CELL_FREQUENCY } }, slot: 2 },
            { item: { id: "num", data: { name: CELL_SCATTER } }, slot: 3 },
            {
              item: { id: "num", data: { name: GENERATION_SEED } },
              slot: 4,
            },
          ],
        },
        action: "VoronoiNoise",
      });
    },
    SETX() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetX",
      });
    },
    HSBCOLOR(
      VARIABLE_TO_SET,
      HUE__COLOR_CIRCLE________,
      SATURATION,
      BRIGHTNESS,
      H__S__B_VALUES
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: HUE__COLOR_CIRCLE________ } },
              slot: 1,
            },
            { item: { id: "num", data: { name: SATURATION } }, slot: 2 },
            { item: { id: "num", data: { name: BRIGHTNESS } }, slot: 3 },
            { item: { id: "list", data: { name: H__S__B_VALUES } }, slot: 5 },
          ],
        },
        action: "HSBColor",
      });
    },
    __(VARIABLE_TO_INCREMENT, NUMBER_S__TO_INCREMENT_BY__DEFAULT_____) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_INCREMENT } },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: NUMBER_S__TO_INCREMENT_BY__DEFAULT_____ },
              },
              slot: 1,
            },
          ],
        },
        action: "+=",
      });
    },
    GETITEMCOLOR(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemColor",
      });
    },
    X(VARIABLE_TO_SET, NUMBERS_TO_MULTIPLY) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBERS_TO_MULTIPLY } },
              slot: 1,
            },
          ],
        },
        action: "x",
      });
    },
    PARSEYAW() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ParseYaw",
      });
    },
    SETSOUNDVOLUME(VARIABLE_TO_SET, SOUND_TO_CHANGE, SOUND_VOLUME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "snd", data: { name: SOUND_TO_CHANGE } }, slot: 1 },
            { item: { id: "num", data: { name: SOUND_VOLUME } }, slot: 2 },
          ],
        },
        action: "SetSoundVolume",
      });
    },
    SETCOORD(VARIABLE_TO_SET, LOCATION_TO_CHANGE, NEW_COORDINATE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "num", data: { name: NEW_COORDINATE } }, slot: 2 },
          ],
        },
        action: "SetCoord",
      });
    },
    SETZ() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetZ",
      });
    },
    SETPITCH() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetPitch",
      });
    },
    SHIFTTOWARDS(
      VARIABLE_TO_SET,
      LOCATION_TO_SHIFT,
      TARGET_LOCATION,
      SHIFT_DISTANCE
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SHIFT } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: TARGET_LOCATION } },
              slot: 2,
            },
            { item: { id: "num", data: { name: SHIFT_DISTANCE } }, slot: 3 },
          ],
        },
        action: "ShiftTowards",
      });
    },
    GETPOTIONTYPE(VARIABLE_TO_SET, POTION) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "POTION", data: { name: POTION } }, slot: 1 },
          ],
        },
        action: "GetPotionType",
      });
    },
    SETITEMNAME(VARIABLE_TO_SET, item, ITEM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: ITEM_NAME } }, slot: 2 },
          ],
        },
        action: "SetItemName",
      });
    },
    LISTLENGTH(VARIABLE_TO_SET, LIST_TO_MEASURE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "list", data: { name: LIST_TO_MEASURE } }, slot: 1 },
          ],
        },
        action: "ListLength",
      });
    },
    PERLINNOISE(
      VARIABLE_TO_SET,
      NOISE_LOCATION,
      FREQUENCY__SCALE_,
      OCTAVES__PERLIN_LAYERS_,
      OCTAVE_FREQUENCY_GAIN,
      OCTAVE_AMPLITUDE_GAIN,
      GENERATION_SEED
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: NOISE_LOCATION } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: FREQUENCY__SCALE_ } },
              slot: 2,
            },
            {
              item: { id: "num", data: { name: OCTAVES__PERLIN_LAYERS_ } },
              slot: 3,
            },
            {
              item: { id: "num", data: { name: OCTAVE_FREQUENCY_GAIN } },
              slot: 4,
            },
            {
              item: { id: "num", data: { name: OCTAVE_AMPLITUDE_GAIN } },
              slot: 5,
            },
            {
              item: { id: "num", data: { name: GENERATION_SEED } },
              slot: 6,
            },
          ],
        },
        action: "PerlinNoise",
      });
    },
    SINE(VARIABLE_TO_SET, NUMBER_INPUT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
          ],
        },
        action: "Sine",
      });
    },
    SHIFTAXIS(VARIABLE_TO_SET, LOCATION_TO_SHIFT, SHIFT_DISTANCE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SHIFT } },
              slot: 1,
            },
            { item: { id: "num", data: { name: SHIFT_DISTANCE } }, slot: 2 },
          ],
        },
        action: "ShiftAxis",
      });
    },
    WORLEYNOISE(
      VARIABLE_TO_SET,
      NOISE_LOCATION,
      CELL_FREQUENCY,
      CELL_SCATTER,
      GENERATION_SEED
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: NOISE_LOCATION } },
              slot: 1,
            },
            { item: { id: "num", data: { name: CELL_FREQUENCY } }, slot: 2 },
            { item: { id: "num", data: { name: CELL_SCATTER } }, slot: 3 },
            {
              item: { id: "num", data: { name: GENERATION_SEED } },
              slot: 4,
            },
          ],
        },
        action: "WorleyNoise",
      });
    },
    SETITEMCOLOR(VARIABLE_TO_SET, item, COLOR_HEXADECIMAL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            {
              item: { id: "txt", data: { name: COLOR_HEXADECIMAL } },
              slot: 2,
            },
          ],
        },
        action: "SetItemColor",
      });
    },
    GETITEMLORE(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemLore",
      });
    },
    SETSOUNDPITCH(VARIABLE_TO_SET, SOUND_TO_CHANGE, SOUND_PITCH, SOUND_NOTE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "snd", data: { name: SOUND_TO_CHANGE } }, slot: 1 },
            { item: { id: "num", data: { name: SOUND_PITCH } }, slot: 3 },
            { item: { id: "txt", data: { name: SOUND_NOTE } }, slot: 5 },
          ],
        },
        action: "SetSoundPitch",
      });
    },
    REVERSELIST(VARIABLE_TO_SET, LIST_TO_REVERSE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "list", data: { name: LIST_TO_REVERSE } }, slot: 1 },
          ],
        },
        action: "ReverseList",
      });
    },
    SORTLIST(VARIABLE_TO_SET, LIST_TO_SORT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "list", data: { name: LIST_TO_SORT } }, slot: 1 },
          ],
        },
        action: "SortList",
      });
    },
    FACELOCATION(VARIABLE_TO_SET, LOCATION_TO_CHANGE, TARGET_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHANGE } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: TARGET_LOCATION } },
              slot: 2,
            },
          ],
        },
        action: "FaceLocation",
      });
    },
    SETITEMFLAGS(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "SetItemFlags",
      });
    },
    FORMATTIME(VARIABLE_TO_SET, TIME_TO_FORMAT, CUSTOM_FORMAT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: TIME_TO_FORMAT } }, slot: 1 },
            { item: { id: "txt", data: { name: CUSTOM_FORMAT } }, slot: 2 },
          ],
        },
        action: "FormatTime",
      });
    },
    SETPOTIONDUR(VARIABLE_TO_SET, POTION_TO_CHANGE, DURATION__TICKS_) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "POTION", data: { name: POTION_TO_CHANGE } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: DURATION__TICKS_ } },
              slot: 2,
            },
          ],
        },
        action: "SetPotionDur",
      });
    },
    NORMALRANDOM(VARIABLE_TO_SET, ___MEAN_MIDPOINT_, ___STANDARD_DEVIATION_) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: ___MEAN_MIDPOINT_ } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: ___STANDARD_DEVIATION_ } },
              slot: 2,
            },
          ],
        },
        action: "NormalRandom",
      });
    },
    SETPOTIONTYPE(VARIABLE_TO_SET, POTION_TO_CHANGE, POTION_TYPE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "POTION", data: { name: POTION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: POTION_TYPE } }, slot: 2 },
          ],
        },
        action: "SetPotionType",
      });
    },
    SETYAW() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetYaw",
      });
    },
    DUPLICATETEXT(VARIABLE_TO_SET, TEXT_TO_DUPLICATE, TIMES_TO_DUPLICATE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: TEXT_TO_DUPLICATE } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: TIMES_TO_DUPLICATE } },
              slot: 2,
            },
          ],
        },
        action: "DuplicateText",
      });
    },
    dec(VARIABLE_TO_DECREMENT, NUMBER_S__TO_DECREMENT_BY__DEFAULT_____) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_DECREMENT } },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: NUMBER_S__TO_DECREMENT_BY__DEFAULT_____ },
              },
              slot: 1,
            },
          ],
        },
        action: "-=",
      });
    },
    GETITEMTAG(VARIABLE_TO_SET, item, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 2 },
          ],
        },
        action: "GetItemTag",
      });
    },
    CREATELIST(VARIABLE_TO_SET, VALUE_LIST) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: VALUE_LIST } }, slot: 1 },
          ],
        },
        action: "CreateList",
      });
    },
    SETITEMDURA(VARIABLE_TO_SET, item, ITEM_DURABILITY) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            {
              item: { id: "num", data: { name: ITEM_DURABILITY } },
              slot: 2,
            },
          ],
        },
        action: "SetItemDura",
      });
    },
    APPENDLIST(LIST_TO_APPEND_TO, LIST_S__TO_APPEND) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_APPEND_TO } },
              slot: 0,
            },
            {
              item: { id: "list", data: { name: LIST_S__TO_APPEND } },
              slot: 1,
            },
          ],
        },
        action: "AppendList",
      });
    },
    SETBREAKABILITY(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "SetBreakability",
      });
    },
    GETCONTAINERITEMS(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetContainerItems",
      });
    },
    TRIMLIST(LIST_TO_TRIM, START_INDEX, END_INDEX) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            { item: { id: "var", data: { name: LIST_TO_TRIM } }, slot: 0 },
            { item: { id: "num", data: { name: START_INDEX } }, slot: 1 },
            { item: { id: "num", data: { name: END_INDEX } }, slot: 2 },
          ],
        },
        action: "TrimList",
      });
    },
    COSINE(VARIABLE_TO_SET, NUMBER_INPUT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
          ],
        },
        action: "Cosine",
      });
    },
    SETALLCOORDS(
      VARIABLE_TO_SET,
      LOCATION_TO_CHANGE,
      NEW_X,
      NEW_Y,
      NEW_Z,
      NEW_PITCH,
      NEW_YAW
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "num", data: { name: NEW_X } }, slot: 2 },
            { item: { id: "num", data: { name: NEW_Y } }, slot: 3 },
            { item: { id: "num", data: { name: NEW_Z } }, slot: 4 },
            { item: { id: "num", data: { name: NEW_PITCH } }, slot: 6 },
            { item: { id: "num", data: { name: NEW_YAW } }, slot: 7 },
          ],
        },
        action: "SetAllCoords",
      });
    },
    PARSENUMBER(VARIABLE_TO_SET, TEXT_TO_CONVERT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_CONVERT } }, slot: 1 },
          ],
        },
        action: "ParseNumber",
      });
    },
    EXPONENT(VARIABLE_TO_SET, NUMBER_INPUT, EXPONENT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
            { item: { id: "num", data: { name: EXPONENT } }, slot: 2 },
          ],
        },
        action: "Exponent",
      });
    },
    SHIFTALLDIRS(
      VARIABLE_TO_SET,
      LOCATION_TO_SHIFT,
      FORWARDS_CHANGE,
      UPWARDS_CHANGE,
      SIDEWAYS_CHANGE___L____R_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SHIFT } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: FORWARDS_CHANGE } },
              slot: 2,
            },
            { item: { id: "num", data: { name: UPWARDS_CHANGE } }, slot: 3 },
            {
              item: { id: "num", data: { name: SIDEWAYS_CHANGE___L____R_ } },
              slot: 4,
            },
          ],
        },
        action: "ShiftAllDirs",
      });
    },
    GETVALUEINDEX(VARIABLE_TO_SET, LIST_TO_SEARCH_IN, VALUE_TO_SEARCH) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "list", data: { name: LIST_TO_SEARCH_IN } },
              slot: 1,
            },
            {
              item: { id: "txt", data: { name: VALUE_TO_SEARCH } },
              slot: 2,
            },
          ],
        },
        action: "GetValueIndex",
      });
    },
    RGBCOLOR(VARIABLE_TO_SET, RED, GREEN, BLUE, R__G__B_VALUES) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: RED } }, slot: 1 },
            { item: { id: "num", data: { name: GREEN } }, slot: 2 },
            { item: { id: "num", data: { name: BLUE } }, slot: 3 },
            { item: { id: "list", data: { name: R__G__B_VALUES } }, slot: 5 },
          ],
        },
        action: "RGBColor",
      });
    },
    INSERTLISTINDEX(LIST_TO_MODIFY, LIST_INDEX, VALUE_TO_INSERT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_MODIFY } },
              slot: 0,
            },
            { item: { id: "num", data: { name: LIST_INDEX } }, slot: 1 },
            {
              item: { id: "txt", data: { name: VALUE_TO_INSERT } },
              slot: 2,
            },
          ],
        },
        action: "InsertListIndex",
      });
    },
    SETCANDESTROY(VARIABLE_TO_SET, item, BREAKABLE_BLOCKS) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            {
              item: { id: "BLOCK", data: { name: BREAKABLE_BLOCKS } },
              slot: 2,
            },
          ],
        },
        action: "SetCanDestroy",
      });
    },
    SPLITTEXT(VARIABLE_TO_SET, TEXT_TO_SPLIT, SPLITTER_TEXT__DEFAULT_______) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_SPLIT } }, slot: 1 },
            {
              item: {
                id: "txt",
                data: { name: SPLITTER_TEXT__DEFAULT_______ },
              },
              slot: 2,
            },
          ],
        },
        action: "SplitText",
      });
    },
    GETBOOKTEXT(VARIABLE_TO_SET, BOOK_ITEM, BOOK_PAGE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: BOOK_ITEM } }, slot: 1 },
            { item: { id: "num", data: { name: BOOK_PAGE } }, slot: 2 },
          ],
        },
        action: "GetBookText",
      });
    },
    HSLCOLOR(
      VARIABLE_TO_SET,
      HUE__COLOR_CIRCLE________,
      SATURATION,
      LUMINOSITY,
      H__S__L_VALUES
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: HUE__COLOR_CIRCLE________ } },
              slot: 1,
            },
            { item: { id: "num", data: { name: SATURATION } }, slot: 2 },
            { item: { id: "num", data: { name: LUMINOSITY } }, slot: 3 },
            { item: { id: "list", data: { name: H__S__L_VALUES } }, slot: 5 },
          ],
        },
        action: "HSLColor",
      });
    },
    REMOVELISTINDEX(LIST_TO_MODIFY, INDEX_OR_INDICES_TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_MODIFY } },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: INDEX_OR_INDICES_TO_REMOVE },
              },
              slot: 1,
            },
          ],
        },
        action: "RemoveListIndex",
      });
    },
    SHIFTLOCATION() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ShiftLocation",
      });
    },
    LOGARITHM(VARIABLE_TO_SET, NUMBER_INPUT, BASE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "num", data: { name: NUMBER_INPUT } }, slot: 1 },
            { item: { id: "num", data: { name: BASE } }, slot: 2 },
          ],
        },
        action: "Logarithm",
      });
    },
    RANDOMIZELIST(VARIABLE_TO_SET, LIST_TO_RANDOMIZE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "list", data: { name: LIST_TO_RANDOMIZE } },
              slot: 1,
            },
          ],
        },
        action: "RandomizeList",
      });
    },
    SETITEMTAG(VARIABLE_TO_SET, item, TAG_NAME, TAG_VALUE, TAG_VALUE_) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 2 },
            { item: { id: "num", data: { name: TAG_VALUE } }, slot: 4 },
            { item: { id: "txt", data: { name: TAG_VALUE_ } }, slot: 6 },
          ],
        },
        action: "SetItemTag",
      });
    },
    CLAMPNUMBER(VARIABLE_TO_SET, NUMBER_TO_CLAMP, MINIMUM, MAXIMUM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_CLAMP } },
              slot: 1,
            },
            { item: { id: "num", data: { name: MINIMUM } }, slot: 2 },
            { item: { id: "num", data: { name: MAXIMUM } }, slot: 3 },
          ],
        },
        action: "ClampNumber",
      });
    },
    ROUND(VARIABLE_TO_SET, NUMBER_TO_ROUND, ROUND_MULTIPLE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_ROUND } },
              slot: 1,
            },
            { item: { id: "num", data: { name: ROUND_MULTIPLE } }, slot: 2 },
          ],
        },
        action: "Round",
      });
    },
    GETSOUNDPITCH(VARIABLE_TO_SET, SOUND_TO_GET_PITCH_OR_NOTE_OF) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: {
                id: "snd",
                data: { name: SOUND_TO_GET_PITCH_OR_NOTE_OF },
              },
              slot: 1,
            },
          ],
        },
        action: "GetSoundPitch",
      });
    },
    JOINTEXT(VARIABLE_TO_SET, TEXTS_TO_JOIN, JOINING_TEXT, FINAL_JOINING_TEXT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "list", data: { name: TEXTS_TO_JOIN } }, slot: 1 },
            { item: { id: "txt", data: { name: JOINING_TEXT } }, slot: 2 },
            {
              item: { id: "txt", data: { name: FINAL_JOINING_TEXT } },
              slot: 3,
            },
          ],
        },
        action: "JoinText",
      });
    },
    TRANSLATECOLORS(VARIABLE_TO_SET, TEXT_TO_TRANSLATE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: TEXT_TO_TRANSLATE } },
              slot: 1,
            },
          ],
        },
        action: "TranslateColors",
      });
    },
    GETBLOCKGROWTH(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetBlockGrowth",
      });
    },
    REMOVELISTVALUE(LIST_TO_MODIFY, VALUE_S__TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: LIST_TO_MODIFY } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VALUE_S__TO_REMOVE } },
              slot: 1,
            },
          ],
        },
        action: "RemoveListValue",
      });
    },
    GETITEMAMOUNT(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemAmount",
      });
    },
    SETPOTIONAMP(VARIABLE_TO_SET, POTION_TO_CHANGE, AMPLIFIER) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "POTION", data: { name: POTION_TO_CHANGE } },
              slot: 1,
            },
            { item: { id: "num", data: { name: AMPLIFIER } }, slot: 2 },
          ],
        },
        action: "SetPotionAmp",
      });
    },
    GETITEMNAME(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemName",
      });
    },
    GETITEMDURA(VARIABLE_TO_SET, item) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
          ],
        },
        action: "GetItemDura",
      });
    },
    SETCANPLACEON(VARIABLE_TO_SET, item, PLACEABLE_BLOCKS) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "item", data: { name: item } }, slot: 1 },
            {
              item: { id: "BLOCK", data: { name: PLACEABLE_BLOCKS } },
              slot: 2,
            },
          ],
        },
        action: "SetCanPlaceOn",
      });
    },
    GETCOLORCHANNEL(VARIABLE_TO_SET, COLOR) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: COLOR } }, slot: 1 },
          ],
        },
        action: "GetColorChannel",
      });
    },
    GETBLOCKTYPE(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetBlockType",
      });
    },
    PARSEPITCH() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "ParsePitch",
      });
    },
    REPLACETEXT(
      VARIABLE_TO_SET,
      TEXT_TO_CHANGE,
      TEXT_PART_TO_REPLACE,
      REPLACEMENT
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_CHANGE } }, slot: 1 },
            {
              item: { id: "txt", data: { name: TEXT_PART_TO_REPLACE } },
              slot: 2,
            },
            { item: { id: "txt", data: { name: REPLACEMENT } }, slot: 3 },
          ],
        },
        action: "ReplaceText",
      });
    },
    CONTAINERLOCK(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "ContainerLock",
      });
    },
    GETBLOCKPOWER(VARIABLE_TO_SET, loc) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
          ],
        },
        action: "GetBlockPower",
      });
    },
    TEXTLENGTH(VARIABLE_TO_SET, TEXT_TO_MEASURE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_MEASURE } }, slot: 1 },
          ],
        },
        action: "TextLength",
      });
    },
    SETCOORDS() {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [],
        },
        action: "SetCoords",
      });
    },
  },
  if_entity: {
    ISVEHICLE() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "IsVehicle",
      });
    },
    ISGROUNDED() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "IsGrounded",
      });
    },
    ISTYPE(SPAWN_EGG__PROJECTILE__OR_VEHICLE) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            {
              item: {
                id: "ENTITY_TYPE",
                data: { name: SPAWN_EGG__PROJECTILE__OR_VEHICLE },
              },
              slot: 0,
            },
          ],
        },
        action: "IsType",
      });
    },
    ISPROJ() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "IsProj",
      });
    },
    ISMOB() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "IsMob",
      });
    },
    HASCUSTOMTAG(TAG_NAME, TAG_VALUE, TAG_VALUE_) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 0 },
            { item: { id: "num", data: { name: TAG_VALUE } }, slot: 2 },
            { item: { id: "txt", data: { name: TAG_VALUE_ } }, slot: 4 },
          ],
        },
        action: "HasCustomTag",
      });
    },
    ISITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "IsItem",
      });
    },
    EXISTS() {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [],
        },
        action: "Exists",
      });
    },
    ISNEAR(CENTER_LOCATION, RANGE_FROM_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CENTER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: RANGE_FROM_LOCATION } },
              slot: 1,
            },
          ],
        },
        action: "IsNear",
      });
    },
    ISRIDING(
      ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: {
                  name: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO,
                },
              },
              slot: 0,
            },
          ],
        },
        action: "IsRiding",
      });
    },
    STANDINGON(BLOCK_S__TO_CHECK_FOR, LOCATION_OF_BLOCK_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCK_S__TO_CHECK_FOR } },
              slot: 0,
            },
            {
              item: {
                id: "loc",
                data: { name: LOCATION_OF_BLOCK_S__TO_CHECK_FOR },
              },
              slot: 2,
            },
          ],
        },
        action: "StandingOn",
      });
    },
    NAMEEQUALS(NAME_TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_entity",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: NAME_TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "NameEquals",
      });
    },
  },
  entity_action: {
    CLEAREFFECTS() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ClearEffects",
      });
    },
    SETPARROTCOLOR() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetParrotColor",
      });
    },
    REMOVE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "Remove",
      });
    },
    HIDENAME() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "HideName",
      });
    },
    DAMAGE(DAMAGE_TO_INFLICT) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: DAMAGE_TO_INFLICT } },
              slot: 0,
            },
          ],
        },
        action: "Damage",
      });
    },
    SETSHEEPSHEARED() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetSheepSheared",
      });
    },
    SETMOBSITTING() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetMobSitting",
      });
    },
    SENDANIMATION() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SendAnimation",
      });
    },
    DISABLEGLOWING() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "DisableGlowing",
      });
    },
    SETHORSEPATTERN() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetHorsePattern",
      });
    },
    TPSEQUENCE(LOCATIONS_TO_TELEPORT_TO, TELEPORT_DELAY__TICKS__DEFAULT______) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: {
                id: "loc",
                data: { name: LOCATIONS_TO_TELEPORT_TO },
              },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: TELEPORT_DELAY__TICKS__DEFAULT______ },
              },
              slot: 1,
            },
          ],
        },
        action: "TpSequence",
      });
    },
    HEAL(AMOUNT_TO_HEAL) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "num", data: { name: AMOUNT_TO_HEAL } }, slot: 0 },
          ],
        },
        action: "Heal",
      });
    },
    SETAI() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetAI",
      });
    },
    SETPROJSOURCE(UUID_OF_SHOOTER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: UUID_OF_SHOOTER } }, slot: 0 },
          ],
        },
        action: "SetProjSource",
      });
    },
    SETITEMOWNER(OWNER_UUID) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "txt", data: { name: OWNER_UUID } }, slot: 0 }],
        },
        action: "SetItemOwner",
      });
    },
    EXPLODECREEPER() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ExplodeCreeper",
      });
    },
    SETPANDAGENE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetPandaGene",
      });
    },
    SETDYECOLOR() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetDyeColor",
      });
    },
    LAUNCHUP(LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 0 },
          ],
        },
        action: "LaunchUp",
      });
    },
    SETMAXHEALTH(NEW_MAXIMUM_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NEW_MAXIMUM_HEALTH } },
              slot: 0,
            },
          ],
        },
        action: "SetMaxHealth",
      });
    },
    SETAGE(AGE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: AGE } }, slot: 0 }],
        },
        action: "SetAge",
      });
    },
    ENDCRYSTALBEAM(TARGET) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "loc", data: { name: TARGET } }, slot: 0 }],
        },
        action: "EndCrystalBeam",
      });
    },
    SETPROFESSION() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetProfession",
      });
    },
    NOGRAVITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "NoGravity",
      });
    },
    SETINVULNERABLE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetInvulnerable",
      });
    },
    PROJCOLL() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ProjColl",
      });
    },
    ARMORSTANDTAGS() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ArmorStandTags",
      });
    },
    SETPICKUPDELAY(DELAY) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: DELAY } }, slot: 0 }],
        },
        action: "SetPickupDelay",
      });
    },
    SETTARGET(TARGET_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: TARGET_NAME } }, slot: 0 },
          ],
        },
        action: "SetTarget",
      });
    },
    DROPITEMS() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "DropItems",
      });
    },
    SETCREEPERPOWER(POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: POWER } }, slot: 0 }],
        },
        action: "SetCreeperPower",
      });
    },
    REMOVECUSTOMTAG(TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "txt", data: { name: TAG_NAME } }, slot: 0 }],
        },
        action: "RemoveCustomTag",
      });
    },
    SETNAMEVISIBLE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetNameVisible",
      });
    },
    SETINVULTICKS(TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: TICKS } }, slot: 0 }],
        },
        action: "SetInvulTicks",
      });
    },
    SETABSORPTION(ABSORPTION_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: ABSORPTION_HEALTH } },
              slot: 0,
            },
          ],
        },
        action: "SetAbsorption",
      });
    },
    CREEPERCHARGED() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "CreeperCharged",
      });
    },
    SETFIRETICKS(TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: TICKS } }, slot: 0 }],
        },
        action: "SetFireTicks",
      });
    },
    SETCLOUDRADIUS(NEW_RADIUS, RADIUS_DECREASE_IN_BLOCKS_PER_SECOND) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "num", data: { name: NEW_RADIUS } }, slot: 0 },
            {
              item: {
                id: "num",
                data: { name: RADIUS_DECREASE_IN_BLOCKS_PER_SECOND },
              },
              slot: 1,
            },
          ],
        },
        action: "SetCloudRadius",
      });
    },
    SETGRAVITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetGravity",
      });
    },
    SETNAME(NEW_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "txt", data: { name: NEW_NAME } }, slot: 0 }],
        },
        action: "SetName",
      });
    },
    REMOVEEFFECT(POTION_EFFECTS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "POTION", data: { name: POTION_EFFECTS } }, slot: 0 },
          ],
        },
        action: "RemoveEffect",
      });
    },
    SILENCE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "Silence",
      });
    },
    SETPOSE(X_ROTATION, Y_ROTATION, Z_ROTATION) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "num", data: { name: X_ROTATION } }, slot: 0 },
            { item: { id: "num", data: { name: Y_ROTATION } }, slot: 1 },
            { item: { id: "num", data: { name: Z_ROTATION } }, slot: 2 },
          ],
        },
        action: "SetPose",
      });
    },
    SETROTATION(PITCH______TO____, YAW_______TO_____) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: PITCH______TO____ } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: YAW_______TO_____ } },
              slot: 1,
            },
          ],
        },
        action: "SetRotation",
      });
    },
    SETFISHPATTERN() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetFishPattern",
      });
    },
    RIDEENTITY(NAME_OR_UUID_OF_TARGET_TO_RIDE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: NAME_OR_UUID_OF_TARGET_TO_RIDE },
              },
              slot: 0,
            },
          ],
        },
        action: "RideEntity",
      });
    },
    NODROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "NoDrops",
      });
    },
    SETHANDITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetHandItem",
      });
    },
    ENABLEGLOWING() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "EnableGlowing",
      });
    },
    SETENDERMANBLOCK(BLOCK_TO_HOLD) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCK_TO_HOLD } }, slot: 0 },
          ],
        },
        action: "SetEndermanBlock",
      });
    },
    TELEPORT(NEW_POSITION) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: NEW_POSITION } }, slot: 0 },
          ],
        },
        action: "Teleport",
      });
    },
    LAUNCHTOWARD(LAUNCH_DESTINATION, LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LAUNCH_DESTINATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 1 },
          ],
        },
        action: "LaunchToward",
      });
    },
    SETARMOR(ARMOR_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ARMOR_TO_SET } }, slot: 0 },
          ],
        },
        action: "SetArmor",
      });
    },
    SETAGE_SIZE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetAge/Size",
      });
    },
    GETCUSTOMTAG(VARIABLE_TO_SET, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 1 },
          ],
        },
        action: "GetCustomTag",
      });
    },
    SETANGERTICKS(TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: TICKS } }, slot: 0 }],
        },
        action: "SetAngerTicks",
      });
    },
    L_SETARMOR() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "L SetArmor",
      });
    },
    SETCATTYPE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetCatType",
      });
    },
    SETSADDLE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetSaddle",
      });
    },
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH,
      LAUNCH_POINT,
      PROJECTILE_NAME,
      SPEED,
      INACCURACY__DEFAULT_____,
      LAUNCH_TRAIL
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "PROJECTILE", data: { name: PROJECTILE_TO_LAUNCH } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: LAUNCH_POINT } }, slot: 1 },
            { item: { id: "txt", data: { name: PROJECTILE_NAME } }, slot: 2 },
            { item: { id: "num", data: { name: SPEED } }, slot: 3 },
            {
              item: { id: "num", data: { name: INACCURACY__DEFAULT_____ } },
              slot: 4,
            },
            { item: { id: "PARTICLE", data: { name: LAUNCH_TRAIL } }, slot: 5 },
          ],
        },
        action: "LaunchProj",
      });
    },
    SETLLAMACOLOR() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetLlamaColor",
      });
    },
    SETWITHERSHIELD(PROGRESS_PERCENTAGE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: PROGRESS_PERCENTAGE } },
              slot: 0,
            },
          ],
        },
        action: "SetWitherShield",
      });
    },
    SETVILLAGERBIOME() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetVillagerBiome",
      });
    },
    SETCREEPERFUSE(FUSE_TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: FUSE_TICKS } }, slot: 0 }],
        },
        action: "SetCreeperFuse",
      });
    },
    ENABLEAI() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "EnableAI",
      });
    },
    SETBABY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetBaby",
      });
    },
    MOOSHROOMTYPE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "MooshroomType",
      });
    },
    GIVEEFFECT(POTION_EFFECTS) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "POTION", data: { name: POTION_EFFECTS } }, slot: 0 },
          ],
        },
        action: "GiveEffect",
      });
    },
    NOPROJCOLL() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "NoProjColl",
      });
    },
    SETINVISIBLE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetInvisible",
      });
    },
    SHEEPEAT() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SheepEat",
      });
    },
    TAME(NAME_OF_OWNER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: NAME_OF_OWNER } }, slot: 0 },
          ],
        },
        action: "Tame",
      });
    },
    SETGLOWING() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetGlowing",
      });
    },
    SETHEALTH(REMAINING_HEALTH) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: REMAINING_HEALTH } },
              slot: 0,
            },
          ],
        },
        action: "SetHealth",
      });
    },
    MOBDISGUISE(MOB_DISGUISE, DISGUISE_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "SPAWN_EGG", data: { name: MOB_DISGUISE } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: DISGUISE_NAME } }, slot: 1 },
          ],
        },
        action: "MobDisguise",
      });
    },
    BLOCKDISGUISE(BLOCK_DISGUISE, NAME_OF_DISGUISE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCK_DISGUISE } }, slot: 0 },
            { item: { id: "txt", data: { name: NAME_OF_DISGUISE } }, slot: 1 },
          ],
        },
        action: "BlockDisguise",
      });
    },
    SETMINECARTBLOCK(BLOCK_TO_SHOW, BLOCK_OFFSET) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCK_TO_SHOW } }, slot: 0 },
            { item: { id: "num", data: { name: BLOCK_OFFSET } }, slot: 1 },
          ],
        },
        action: "SetMinecartBlock",
      });
    },
    SETCOLLIDABLE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetCollidable",
      });
    },
    LAUNCHFWD(LAUNCH_POWER) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "num", data: { name: LAUNCH_POWER } }, slot: 0 },
          ],
        },
        action: "LaunchFwd",
      });
    },
    SETFALLDISTANCE(FALL_DISTANCE__BLOCKS_) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: FALL_DISTANCE__BLOCKS_ } },
              slot: 0,
            },
          ],
        },
        action: "SetFallDistance",
      });
    },
    SETEQUIPMENT(ITEM_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_SET } }, slot: 0 },
          ],
        },
        action: "SetEquipment",
      });
    },
    ATTACKANIMATION() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "AttackAnimation",
      });
    },
    SETSILENCED() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetSilenced",
      });
    },
    ATTACHLEAD(LEAD_HOLDER_UUID, LEAD_KNOT_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: LEAD_HOLDER_UUID } }, slot: 0 },
            {
              item: { id: "loc", data: { name: LEAD_KNOT_LOCATION } },
              slot: 2,
            },
          ],
        },
        action: "AttachLead",
      });
    },
    SNOWMANPUMPKIN() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SnowmanPumpkin",
      });
    },
    SETCUSTOMTAG(TAG_NAME, TAG_VALUE, TAG_VALUE_) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 0 },
            { item: { id: "num", data: { name: TAG_VALUE } }, slot: 2 },
            { item: { id: "txt", data: { name: TAG_VALUE_ } }, slot: 4 },
          ],
        },
        action: "SetCustomTag",
      });
    },
    GRAVITY() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "Gravity",
      });
    },
    SHEARSHEEP() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ShearSheep",
      });
    },
    SETRABBITTYPE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetRabbitType",
      });
    },
    SETSIZE(SIZE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: SIZE } }, slot: 0 }],
        },
        action: "SetSize",
      });
    },
    NOAI() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "NoAI",
      });
    },
    SHOWNAME() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "ShowName",
      });
    },
    PLAYERDISGUISE(DISGUISE_PLAYER_NAME, DISGUISE_SKIN) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: DISGUISE_PLAYER_NAME } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: DISGUISE_SKIN } }, slot: 1 },
          ],
        },
        action: "PlayerDisguise",
      });
    },
    MOVETO(TARGET_LOCATION, WALK_SPEED) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: TARGET_LOCATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: WALK_SPEED } }, slot: 1 },
          ],
        },
        action: "MoveTo",
      });
    },
    UNDISGUISE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "Undisguise",
      });
    },
    SETDEATHDROPS() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetDeathDrops",
      });
    },
    SETVILLAGEREXP(EXPERIENCE) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: EXPERIENCE } }, slot: 0 }],
        },
        action: "SetVillagerExp",
      });
    },
    IGNITECREEPER() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "IgniteCreeper",
      });
    },
    PROJECTILEITEM(DISPLAY_ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            { item: { id: "item", data: { name: DISPLAY_ITEM } }, slot: 0 },
          ],
        },
        action: "ProjectileItem",
      });
    },
    SETHORSEJUMP(STRENGTH) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [{ item: { id: "num", data: { name: STRENGTH } }, slot: 0 }],
        },
        action: "SetHorseJump",
      });
    },
    UNSILENCE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "Unsilence",
      });
    },
    SETCARRYINGCHEST() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetCarryingChest",
      });
    },
    SETFOXTYPE() {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [],
        },
        action: "SetFoxType",
      });
    },
  },
  if_var: {
    __(NUMBER_TO_CHECK, NUMBER_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NUMBER_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: "<=",
      });
    },
    ITEMHASTAG(ITEM_TO_CHECK, TAG_NAME, TAG_VALUE, TAG_VALUE_) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_CHECK } }, slot: 0 },
            { item: { id: "txt", data: { name: TAG_NAME } }, slot: 1 },
            { item: { id: "num", data: { name: TAG_VALUE } }, slot: 3 },
            { item: { id: "txt", data: { name: TAG_VALUE_ } }, slot: 5 },
          ],
        },
        action: "ItemHasTag",
      });
    },
    STARTSWITH(TEXT_TO_CHECK, TEXT_TO_START_WITH) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: TEXT_TO_CHECK } }, slot: 0 },
            {
              item: { id: "txt", data: { name: TEXT_TO_START_WITH } },
              slot: 1,
            },
          ],
        },
        action: "StartsWith",
      });
    },
    LISTVALUEEQ(LIST_TO_CHECK_IN, INDEX_TO_CHECK_AT, VARIABLE_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "list", data: { name: LIST_TO_CHECK_IN } }, slot: 0 },
            {
              item: { id: "num", data: { name: INDEX_TO_CHECK_AT } },
              slot: 1,
            },
            {
              item: { id: "txt", data: { name: VARIABLE_TO_COMPARE_TO } },
              slot: 2,
            },
          ],
        },
        action: "ListValueEq",
      });
    },
    VARISTYPE(VALUE_TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: VALUE_TO_CHECK } },
              slot: 0,
            },
          ],
        },
        action: "VarIsType",
      });
    },
    TEXTMATCHES() {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [],
        },
        action: "TextMatches",
      });
    },
    ISNEAR(CHECK_VALUE, CENTER_VALUE, RANGE_VALUE) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: CHECK_VALUE } }, slot: 0 },
            { item: { id: "txt", data: { name: CENTER_VALUE } }, slot: 1 },
            { item: { id: "num", data: { name: RANGE_VALUE } }, slot: 2 },
          ],
        },
        action: "IsNear",
      });
    },
    VAREXISTS(VARIABLE_TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_CHECK } },
              slot: 0,
            },
          ],
        },
        action: "VarExists",
      });
    },
    LEGACY___() {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [],
        },
        action: "Legacy !=",
      });
    },
    ITEMEQUALS(ITEM_TO_CHECK, ITEM_S__TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_TO_CHECK } }, slot: 0 },
            {
              item: { id: "item", data: { name: ITEM_S__TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: "ItemEquals",
      });
    },
    LISTCONTAINS(LIST_TO_CHECK_IN, VARIABLE_TO_FIND) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "list", data: { name: LIST_TO_CHECK_IN } }, slot: 0 },
            {
              item: { id: "txt", data: { name: VARIABLE_TO_FIND } },
              slot: 1,
            },
          ],
        },
        action: "ListContains",
      });
    },
    LEGACY__() {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [],
        },
        action: "Legacy =",
      });
    },
    INRANGE(CHECK_VALUE, MINIMUM_VALUE, MAXIMUM_VALUE) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: CHECK_VALUE } }, slot: 0 },
            {
              item: { id: "txt", data: { name: MINIMUM_VALUE } },
              slot: 1,
            },
            {
              item: { id: "txt", data: { name: MAXIMUM_VALUE } },
              slot: 2,
            },
          ],
        },
        action: "InRange",
      });
    },
    CONTAINS(TEXT_TO_CHECK, TEXT_TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: TEXT_TO_CHECK } }, slot: 0 },
            {
              item: { id: "txt", data: { name: TEXT_TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "Contains",
      });
    },
    _TEXTMATCHES_(TEXT_OR_EXPRESSION_TO_MATCH, TEXT_TO_COMPARE) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: TEXT_OR_EXPRESSION_TO_MATCH } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: TEXT_TO_COMPARE } }, slot: 1 },
          ],
        },
        action: " TextMatches ",
      });
    },
    ne(VARIABLE_TO_CHECK, VARIABLES_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: VARIABLE_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VARIABLES_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: "!=",
      });
    },
    lt(NUMBER_TO_CHECK, NUMBER_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NUMBER_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: "<",
      });
    },
    e(VARIABLE_TO_CHECK, VARIABLES_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: VARIABLE_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: VARIABLES_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: "=",
      });
    },
    mt(NUMBER_TO_CHECK, NUMBER_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NUMBER_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: ">",
      });
    },
    ENDSWITH(TEXT_TO_CHECK, TEXT_TO_END_WITH) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            { item: { id: "txt", data: { name: TEXT_TO_CHECK } }, slot: 0 },
            { item: { id: "txt", data: { name: TEXT_TO_END_WITH } }, slot: 1 },
          ],
        },
        action: "EndsWith",
      });
    },
    mte(NUMBER_TO_CHECK, NUMBER_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NUMBER_TO_CHECK } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_TO_COMPARE_TO } },
              slot: 1,
            },
          ],
        },
        action: ">=",
      });
    },
  },
  select_obj: {
    LASTMOB() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "LastMob",
      });
    },
    RANDOMPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "RandomPlayer",
      });
    },
    LASTENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "LastEntity",
      });
    },
    SHOOTER() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "Shooter",
      });
    },
    RANDOMMOB() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "RandomMob",
      });
    },
    ALLMOBS() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "AllMobs",
      });
    },
    ENTITYNAME(NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT) {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT },
              },
              slot: 0,
            },
          ],
        },
        action: "EntityName",
      });
    },
    DEFAULTENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "DefaultEntity",
      });
    },
    PLAYERNAME(USERNAME_OF_PLAYER_TO_SELECT) {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: USERNAME_OF_PLAYER_TO_SELECT },
              },
              slot: 0,
            },
          ],
        },
        action: "PlayerName",
      });
    },
    ALLENTITIES() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "AllEntities",
      });
    },
    DAMAGER() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "Damager",
      });
    },
    FILTERDISTANCE(NUMBER_OF_OBJECTS_TO_SELECT, LOCATION_S__TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [
            {
              item: {
                id: "num",
                data: { name: NUMBER_OF_OBJECTS_TO_SELECT },
              },
              slot: 0,
            },
            {
              item: {
                id: "loc",
                data: { name: LOCATION_S__TO_COMPARE_TO },
              },
              slot: 1,
            },
          ],
        },
        action: "FilterDistance",
      });
    },
    KILLER() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "Killer",
      });
    },
    VICTIM() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "Victim",
      });
    },
    ENTITIESCOND() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "EntitiesCond",
      });
    },
    ALLPLAYERS() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "AllPlayers",
      });
    },
    RANDOMENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "RandomEntity",
      });
    },
    MOBSCOND() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "MobsCond",
      });
    },
    RANDOMSELECTED(NUMBER_OF_OBJECTS_TO_SELECT) {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [
            {
              item: {
                id: "num",
                data: { name: NUMBER_OF_OBJECTS_TO_SELECT },
              },
              slot: 0,
            },
          ],
        },
        action: "RandomSelected",
      });
    },
    FILTERSELECT() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "FilterSelect",
      });
    },
    PROJECTILE() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "Projectile",
      });
    },
    DEFAULTPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "DefaultPlayer",
      });
    },
    PLAYERSCOND() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "PlayersCond",
      });
    },
    MOBNAME(NAME_OF_MOB_OR_MOBS_TO_SELECT) {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: NAME_OF_MOB_OR_MOBS_TO_SELECT },
              },
              slot: 0,
            },
          ],
        },
        action: "MobName",
      });
    },
    NONE() {
      module.exports.blocks.push({
        id: "block",
        block: "select_obj",
        args: {
          items: [],
        },
        action: "None",
      });
    },
  },
  event: {
    CLOSEINV() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "CloseInv",
      });
    },
    STARTFLY() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "StartFly",
      });
    },
    PICKUPITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "PickupItem",
      });
    },
    BREAKBLOCK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "BreakBlock",
      });
    },
    STARTSPRINT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "StartSprint",
      });
    },
    MOBKILLPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "MobKillPlayer",
      });
    },
    SHOOTBOW() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ShootBow",
      });
    },
    STOPFLY() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "StopFly",
      });
    },
    LEFTCLICK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "LeftClick",
      });
    },
    PLAYERTAKEDMG() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "PlayerTakeDmg",
      });
    },
    PROJHIT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ProjHit",
      });
    },
    KILLPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "KillPlayer",
      });
    },
    RESPAWN() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Respawn",
      });
    },
    SWAPHANDS() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "SwapHands",
      });
    },
    DAMAGEENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "DamageEntity",
      });
    },
    SNEAK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Sneak",
      });
    },
    PLAYERHEAL() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "PlayerHeal",
      });
    },
    CLICKPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ClickPlayer",
      });
    },
    CONSUME() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Consume",
      });
    },
    DEATH() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Death",
      });
    },
    PLACEBLOCK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "PlaceBlock",
      });
    },
    WALK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Walk",
      });
    },
    DISMOUNT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Dismount",
      });
    },
    CLOUDIMBUEPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "CloudImbuePlayer",
      });
    },
    QUIT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Quit",
      });
    },
    DROPITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "DropItem",
      });
    },
    CHANGESLOT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ChangeSlot",
      });
    },
    CLICKENTITY() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ClickEntity",
      });
    },
    UNSNEAK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Unsneak",
      });
    },
    CLICKOWNINV() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ClickOwnInv",
      });
    },
    CLICKITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ClickItem",
      });
    },
    FALLDAMAGE() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "FallDamage",
      });
    },
    BREAKITEM() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "BreakItem",
      });
    },
    LOOPEVENT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "LoopEvent",
      });
    },
    RIGHTCLICK() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "RightClick",
      });
    },
    RIPTIDE() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Riptide",
      });
    },
    KILLMOB() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "KillMob",
      });
    },
    JOIN() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Join",
      });
    },
    ENTITYDMGPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "EntityDmgPlayer",
      });
    },
    STOPSPRINT() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "StopSprint",
      });
    },
    JUMP() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Jump",
      });
    },
    PROJDMGPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "ProjDmgPlayer",
      });
    },
    COMMAND() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "Command",
      });
    },
    PLAYERDMGPLAYER() {
      module.exports.blocks.push({
        id: "block",
        block: "event",
        args: {
          items: [],
        },
        action: "PlayerDmgPlayer",
      });
    },
  },
  game_action: {
    STARTLOOP() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "StartLoop",
      });
    },
    SETFURNACESPEED(FURNACE_LOCATION, TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: FURNACE_LOCATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: TICKS } }, slot: 1 },
          ],
        },
        action: "SetFurnaceSpeed",
      });
    },
    BLOCKDROPSON() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "BlockDropsOn",
      });
    },
    PFX_CIRCLE(
      PARTICLE_TO_SPAWN,
      CIRCLE_CENTER_LOCATION,
      CIRCLE_DIAMETER__DEFAULT_____BLOCKS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: CIRCLE_CENTER_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 2,
            },
          ],
        },
        action: "PFX Circle",
      });
    },
    FILLCONTAINER(CONTAINER_LOCATION, ITEM_S__TO_FILL_WITH) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_FILL_WITH } },
              slot: 1,
            },
          ],
        },
        action: "FillContainer",
      });
    },
    BREAKBLOCK(BLOCK_S__TO_BREAK) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_S__TO_BREAK } },
              slot: 0,
            },
          ],
        },
        action: "BreakBlock",
      });
    },
    L_PFX_SPIRAL() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "L PFX Spiral",
      });
    },
    BONEMEAL(BLOCK_S__TO_BONE_MEAL, NUMBER_OF_BONE_MEAL_APPLICATIONS) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_S__TO_BONE_MEAL } },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: NUMBER_OF_BONE_MEAL_APPLICATIONS },
              },
              slot: 1,
            },
          ],
        },
        action: "BoneMeal",
      });
    },
    DEBUGSTACKTRACE() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "DebugStackTrace",
      });
    },
    L_PFX_CLUSTER() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "L PFX Cluster",
      });
    },
    FALLINGBLOCK(BLOCK_LOCATION, BLOCK_TYPE, BLOCK_METADATA) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_LOCATION } },
              slot: 0,
            },
            { item: { id: "BLOCK", data: { name: BLOCK_TYPE } }, slot: 1 },
            {
              item: { id: "BLOCK_TAG", data: { name: BLOCK_METADATA } },
              slot: 2,
            },
          ],
        },
        action: "FallingBlock",
      });
    },
    DISCORDWEBHOOK(WEBHOOK_URL, MESSAGE_CONTENT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: WEBHOOK_URL } }, slot: 0 },
            { item: { id: "txt", data: { name: MESSAGE_CONTENT } }, slot: 1 },
          ],
        },
        action: "DiscordWebhook",
      });
    },
    CHANGESIGN(SIGN_LOCATION, LINE_NUMBER, NEW_LINE_TEXT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: SIGN_LOCATION } },
              slot: 0,
            },
            { item: { id: "num", data: { name: LINE_NUMBER } }, slot: 1 },
            { item: { id: "txt", data: { name: NEW_LINE_TEXT } }, slot: 2 },
          ],
        },
        action: "ChangeSign",
      });
    },
    TICKBLOCK(BLOCK_S__TO_TICK, NUMBER_OF_TICKS) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: BLOCK_S__TO_TICK } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: NUMBER_OF_TICKS } },
              slot: 1,
            },
          ],
        },
        action: "TickBlock",
      });
    },
    WEBREQUEST(URL_TO_REQUEST, CONTENT_BODY) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "txt", data: { name: URL_TO_REQUEST } }, slot: 0 },
            { item: { id: "txt", data: { name: CONTENT_BODY } }, slot: 1 },
          ],
        },
        action: "WebRequest",
      });
    },
    PFX_SPIRAL(
      PARTICLE_TO_SPAWN,
      SPIRAL_BASE_LOCATION,
      SPIRAL_LENGTH__DEFAULT______BLOCKS_,
      SPIRAL_DIAMETER__DEFAULT_____BLOCKS_,
      SPIRAL_PARTICLES__DEFAULT______PARTICLES_,
      SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: SPIRAL_BASE_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_LENGTH__DEFAULT______BLOCKS_ },
              },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 3,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_PARTICLES__DEFAULT______PARTICLES_ },
              },
              slot: 4,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_ },
              },
              slot: 5,
            },
          ],
        },
        action: "PFX Spiral",
      });
    },
    CLEARSCBOARD() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "ClearScBoard",
      });
    },
    HIDESIDEBAR() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "HideSidebar",
      });
    },
    REPLACEITEMS(
      CONTAINER_LOCATION,
      ITEM_S__TO_REPLACE,
      ITEM_TO_REPLACE_WITH,
      AMOUNT_OF_ITEMS_TO_REPLACE
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_REPLACE } },
              slot: 1,
            },
            {
              item: { id: "item", data: { name: ITEM_TO_REPLACE_WITH } },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: AMOUNT_OF_ITEMS_TO_REPLACE },
              },
              slot: 3,
            },
          ],
        },
        action: "ReplaceItems",
      });
    },
    SETEVENTPROJ(PROJECTILE_TO_LAUNCH, PROJECTILE_NAME, LAUNCH_TRAIL) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PROJECTILE", data: { name: PROJECTILE_TO_LAUNCH } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: PROJECTILE_NAME } }, slot: 1 },
            { item: { id: "PARTICLE", data: { name: LAUNCH_TRAIL } }, slot: 2 },
          ],
        },
        action: "SetEventProj",
      });
    },
    EXPLOSION(EXPLOSION_LOCATION, EXPLOSION_POWER_______DEFAULT_____) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: EXPLOSION_LOCATION } },
              slot: 0,
            },
            {
              item: {
                id: "num",
                data: { name: EXPLOSION_POWER_______DEFAULT_____ },
              },
              slot: 1,
            },
          ],
        },
        action: "Explosion",
      });
    },
    SPAWNMOB(
      MOB_TYPE,
      LOCATION_TO_SPAWN_AT,
      MOB_HEALTH,
      MOB_NAME,
      POTION_EFFECT_S_,
      MOB_EQUIPMENT
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "SPAWN_EGG", data: { name: MOB_TYPE } }, slot: 0 },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 1,
            },
            { item: { id: "num", data: { name: MOB_HEALTH } }, slot: 2 },
            { item: { id: "txt", data: { name: MOB_NAME } }, slot: 3 },
            {
              item: { id: "POTION", data: { name: POTION_EFFECT_S_ } },
              slot: 4,
            },
            { item: { id: "item", data: { name: MOB_EQUIPMENT } }, slot: 5 },
          ],
        },
        action: "SpawnMob",
      });
    },
    PFX_CIRCLE__A_(
      PARTICLE_TO_SPAWN,
      CIRCLE_CENTER_LOCATION,
      CIRCLE_DIAMETER__DEFAULT_____BLOCKS_,
      ANIMATION_DURATION__TICKS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: CIRCLE_CENTER_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: ANIMATION_DURATION__TICKS_ },
              },
              slot: 3,
            },
          ],
        },
        action: "PFX Circle [A]",
      });
    },
    SPAWNENDEREYE(
      LOCATION_TO_SPAWN_AT,
      DESTINATION,
      LIFESPAN__TICKS_,
      CUSTOM_NAME
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: DESTINATION } }, slot: 1 },
            {
              item: { id: "num", data: { name: LIFESPAN__TICKS_ } },
              slot: 2,
            },
            { item: { id: "txt", data: { name: CUSTOM_NAME } }, slot: 3 },
          ],
        },
        action: "SpawnEnderEye",
      });
    },
    SHOWSIDEBAR() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "ShowSidebar",
      });
    },
    SPAWNPOTIONCLOUD(
      LOCATION_TO_SPAWN_AT,
      EFFECT_S__TO_APPLY,
      CLOUD_RADIUS__BLOCKS_,
      CLOUD_DURATION__TICKS_,
      CUSTOM_PARTICLE,
      CUSTOM_NAME
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 0,
            },
            {
              item: { id: "POTION", data: { name: EFFECT_S__TO_APPLY } },
              slot: 1,
            },
            {
              item: { id: "num", data: { name: CLOUD_RADIUS__BLOCKS_ } },
              slot: 2,
            },
            {
              item: { id: "num", data: { name: CLOUD_DURATION__TICKS_ } },
              slot: 3,
            },
            {
              item: { id: "PARTICLE", data: { name: CUSTOM_PARTICLE } },
              slot: 4,
            },
            { item: { id: "txt", data: { name: CUSTOM_NAME } }, slot: 5 },
          ],
        },
        action: "SpawnPotionCloud",
      });
    },
    SETBLOCKDATA(loc, BLOCK_DATA) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: loc } }, slot: 0 },
            { item: { id: "BLOCK_TAG", data: { name: BLOCK_DATA } }, slot: 1 },
          ],
        },
        action: "SetBlockData",
      });
    },
    PFX_CLUSTER(
      PARTICLE_TO_SPAWN,
      CLUSTER_CENTER_LOCATION,
      CLUSTER_DIAMETER__DEFAULT_____BLOCKS_,
      CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: CLUSTER_CENTER_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: CLUSTER_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: {
                  name: CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____,
                },
              },
              slot: 3,
            },
          ],
        },
        action: "PFX Cluster",
      });
    },
    PFX_LINE(PARTICLE_TO_SPAWN, LINE_START_LOCATION, LINE_END_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LINE_START_LOCATION } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: LINE_END_LOCATION } },
              slot: 2,
            },
          ],
        },
        action: "PFX Line",
      });
    },
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH,
      LAUNCH_POINT,
      PROJECTILE_NAME,
      SPEED,
      INACCURACY__DEFAULT_____,
      LAUNCH_TRAIL
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PROJECTILE", data: { name: PROJECTILE_TO_LAUNCH } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: LAUNCH_POINT } }, slot: 1 },
            { item: { id: "txt", data: { name: PROJECTILE_NAME } }, slot: 2 },
            { item: { id: "num", data: { name: SPEED } }, slot: 3 },
            {
              item: { id: "num", data: { name: INACCURACY__DEFAULT_____ } },
              slot: 4,
            },
            { item: { id: "PARTICLE", data: { name: LAUNCH_TRAIL } }, slot: 5 },
          ],
        },
        action: "LaunchProj",
      });
    },
    FIREWORK(FIREWORK_TO_LAUNCH, LOCATION_TO_SPAWN_AT, FIREWORK_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: FIREWORK_TO_LAUNCH } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: FIREWORK_NAME } }, slot: 2 },
          ],
        },
        action: "Firework",
      });
    },
    SETEVENTDAMAGE(NEW_DAMAGE_AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NEW_DAMAGE_AMOUNT } },
              slot: 0,
            },
          ],
        },
        action: "SetEventDamage",
      });
    },
    SETBLOCKGROWTH(loc, GROWTH_STAGE) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: loc } }, slot: 0 },
            { item: { id: "num", data: { name: GROWTH_STAGE } }, slot: 1 },
          ],
        },
        action: "SetBlockGrowth",
      });
    },
    WAIT() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "Wait",
      });
    },
    SETCONTAINERNAME(CONTAINER_LOCATION, CONTAINER_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: CONTAINER_NAME } }, slot: 1 },
          ],
        },
        action: "SetContainerName",
      });
    },
    SPAWNITEM(ITEM_S__TO_SPAWN, LOCATION_TO_SPAWN_AT, ITEM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "item", data: { name: ITEM_S__TO_SPAWN } }, slot: 0 },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: ITEM_NAME } }, slot: 2 },
          ],
        },
        action: "SpawnItem",
      });
    },
    SETHEAD(HEAD_LOCATION, HEAD_TO_SET_TO, HEAD_OWNER) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: HEAD_LOCATION } },
              slot: 0,
            },
            { item: { id: "item", data: { name: HEAD_TO_SET_TO } }, slot: 2 },
            { item: { id: "txt", data: { name: HEAD_OWNER } }, slot: 4 },
          ],
        },
        action: "SetHead",
      });
    },
    PFX_RAY(PARTICLE_TO_SPAWN, RAY_ORIGIN, RAY_LENGTH__DEFAULT______BLOCKS_) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            { item: { id: "loc", data: { name: RAY_ORIGIN } }, slot: 1 },
            {
              item: {
                id: "num",
                data: { name: RAY_LENGTH__DEFAULT______BLOCKS_ },
              },
              slot: 2,
            },
          ],
        },
        action: "PFX Ray",
      });
    },
    REMOVEHOLOGRAM(LOCATION_OF_HOLOGRAM_TO_REMOVE, TEXT_OF_HOLOGRAM_TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: {
                id: "loc",
                data: { name: LOCATION_OF_HOLOGRAM_TO_REMOVE },
              },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: TEXT_OF_HOLOGRAM_TO_REMOVE } },
              slot: 2,
            },
          ],
        },
        action: "RemoveHologram",
      });
    },
    PARTICLE_FX(PARTICLE_TO_SPAWN, LOCATION_TO_PLAY_AT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_PLAY_AT } },
              slot: 1,
            },
          ],
        },
        action: "Particle FX",
      });
    },
    REMOVEITEMS(CONTAINER_LOCATION, ITEM_S__TO_REMOVE) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_REMOVE } },
              slot: 1,
            },
          ],
        },
        action: "RemoveItems",
      });
    },
    SPAWNRNGITEM(ITEMS_TO_PICK_FROM, LOCATION_TO_SPAWN_AT, ITEM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEMS_TO_PICK_FROM } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: ITEM_NAME } }, slot: 2 },
          ],
        },
        action: "SpawnRngItem",
      });
    },
    FIREWORKEFFECT(FIREWORK_EXPLOSION_TO_PLAY, LOCATION_TO_SPAWN_AT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "item", data: { name: FIREWORK_EXPLOSION_TO_PLAY } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 1,
            },
          ],
        },
        action: "FireworkEffect",
      });
    },
    SETCONTAINER(CONTAINER_LOCATION, ITEM_S__TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            { item: { id: "item", data: { name: ITEM_S__TO_SET } }, slot: 1 },
          ],
        },
        action: "SetContainer",
      });
    },
    SETITEMINSLOT(CONTAINER_LOCATION, ITEM_TO_SET, SLOT_TO_SET) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            { item: { id: "item", data: { name: ITEM_TO_SET } }, slot: 1 },
            { item: { id: "num", data: { name: SLOT_TO_SET } }, slot: 2 },
          ],
        },
        action: "SetItemInSlot",
      });
    },
    UNCANCELEVENT() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "UncancelEvent",
      });
    },
    SPAWNTNT(
      TNT_LOCATION,
      TNT_POWER_______DEFAULT_____,
      FUSE_DURATION__TICKS__DEFAULT______,
      CUSTOM_NAME
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: TNT_LOCATION } }, slot: 0 },
            {
              item: {
                id: "num",
                data: { name: TNT_POWER_______DEFAULT_____ },
              },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: FUSE_DURATION__TICKS__DEFAULT______ },
              },
              slot: 2,
            },
            { item: { id: "txt", data: { name: CUSTOM_NAME } }, slot: 3 },
          ],
        },
        action: "SpawnTNT",
      });
    },
    SPAWNARMORSTAND(ARMOR_STAND_LOCATION, NAME, EQUIPMENT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: ARMOR_STAND_LOCATION } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: NAME } }, slot: 1 },
            { item: { id: "item", data: { name: EQUIPMENT } }, slot: 2 },
          ],
        },
        action: "SpawnArmorStand",
      });
    },
    SPAWNEXPORB(ORB_LOCATION, EXPERIENCE_AMOUNT, ORB_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "loc", data: { name: ORB_LOCATION } }, slot: 0 },
            {
              item: { id: "num", data: { name: EXPERIENCE_AMOUNT } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: ORB_NAME } }, slot: 2 },
          ],
        },
        action: "SpawnExpOrb",
      });
    },
    SETEVENTHEAL(NEW_HEALING_AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "num", data: { name: NEW_HEALING_AMOUNT } },
              slot: 0,
            },
          ],
        },
        action: "SetEventHeal",
      });
    },
    PFX_PATH(PARTICLE_TO_SPAWN, PATH_LOCATIONS) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: PATH_LOCATIONS } },
              slot: 1,
            },
          ],
        },
        action: "PFX Path",
      });
    },
    STOPLOOP() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "StopLoop",
      });
    },
    GENERATETREE(TREE_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: TREE_LOCATION } },
              slot: 0,
            },
          ],
        },
        action: "GenerateTree",
      });
    },
    CLEARCONTAINER(CONTAINER_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
          ],
        },
        action: "ClearContainer",
      });
    },
    SETSCOBJ(OBJECTIVE_NAME_____CHARACTERS_OR_LESS_) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: OBJECTIVE_NAME_____CHARACTERS_OR_LESS_ },
              },
              slot: 0,
            },
          ],
        },
        action: "SetScObj",
      });
    },
    CANCELEVENT() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "CancelEvent",
      });
    },
    SPAWNCRYSTAL(LOCATION_TO_SPAWN_AT, CUSTOM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: CUSTOM_NAME } }, slot: 1 },
          ],
        },
        action: "SpawnCrystal",
      });
    },
    SPAWNFANGS(LOCATION_TO_SPAWN_AT, CUSTOM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: LOCATION_TO_SPAWN_AT } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: CUSTOM_NAME } }, slot: 1 },
          ],
        },
        action: "SpawnFangs",
      });
    },
    SETEVENTSOUND(NEW_SOUND) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [{ item: { id: "snd", data: { name: NEW_SOUND } }, slot: 0 }],
        },
        action: "SetEventSound",
      });
    },
    SETEVENTXP(EXPERIENCE) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [{ item: { id: "num", data: { name: EXPERIENCE } }, slot: 0 }],
        },
        action: "SetEventXP",
      });
    },
    LOCKCONTAINER(CONTAINER_LOCATION, CONTAINER_LOCK_KEY) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: CONTAINER_LOCK_KEY } },
              slot: 1,
            },
          ],
        },
        action: "LockContainer",
      });
    },
    PFX_SPIRAL__A_(
      PARTICLE_TO_SPAWN,
      SPIRAL_BASE_LOCATION,
      SPIRAL_LENGTH__DEFAULT______BLOCKS_,
      SPIRAL_DIAMETER__DEFAULT_____BLOCKS_,
      SPIRAL_PARTICLES__DEFAULT______PARTICLES_,
      SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_,
      ANIMATION_DURATION__TICKS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: SPIRAL_BASE_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_LENGTH__DEFAULT______BLOCKS_ },
              },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 3,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_PARTICLES__DEFAULT______PARTICLES_ },
              },
              slot: 4,
            },
            {
              item: {
                id: "num",
                data: { name: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_ },
              },
              slot: 5,
            },
            {
              item: {
                id: "num",
                data: { name: ANIMATION_DURATION__TICKS_ },
              },
              slot: 6,
            },
          ],
        },
        action: "PFX Spiral [A]",
      });
    },
    SPAWNVEHICLE(VEHICLE_TYPE, VEHICLE_LOCATION, VEHICLE_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "VEHICLE", data: { name: VEHICLE_TYPE } }, slot: 0 },
            {
              item: { id: "loc", data: { name: VEHICLE_LOCATION } },
              slot: 1,
            },
            { item: { id: "txt", data: { name: VEHICLE_NAME } }, slot: 2 },
          ],
        },
        action: "SpawnVehicle",
      });
    },
    LIGHTNING(IMPACT_LOCATION) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: IMPACT_LOCATION } },
              slot: 0,
            },
          ],
        },
        action: "Lightning",
      });
    },
    SETBLOCK(BLOCK_TO_SET, loc, LOCATION____REGION_, BLOCK_DATA) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            { item: { id: "BLOCK", data: { name: BLOCK_TO_SET } }, slot: 0 },
            { item: { id: "loc", data: { name: loc } }, slot: 1 },
            {
              item: { id: "loc", data: { name: LOCATION____REGION_ } },
              slot: 2,
            },
            { item: { id: "BLOCK_TAG", data: { name: BLOCK_DATA } }, slot: 3 },
          ],
        },
        action: "SetBlock",
      });
    },
    REMOVESCORE(SCORE_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [{ item: { id: "txt", data: { name: SCORE_NAME } }, slot: 0 }],
        },
        action: "RemoveScore",
      });
    },
    CREATEHOLOGRAM(HOLOGRAM_LOCATION, HOLOGRAM_TEXT) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: HOLOGRAM_LOCATION } },
              slot: 0,
            },
            { item: { id: "txt", data: { name: HOLOGRAM_TEXT } }, slot: 1 },
          ],
        },
        action: "CreateHologram",
      });
    },
    SETSCORE(SCORE_NAME_____CHARACTERS_OR_LESS_, SCORE_VALUE__DEFAULT_____) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: {
                id: "txt",
                data: { name: SCORE_NAME_____CHARACTERS_OR_LESS_ },
              },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: SCORE_VALUE__DEFAULT_____ } },
              slot: 1,
            },
          ],
        },
        action: "SetScore",
      });
    },
    COPYBLOCKS(
      REGION_LOCATION__,
      REGION_LOCATION___,
      POSITION_TO_COPY_FROM,
      POSITION_TO_PASTE_TO
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: REGION_LOCATION__ } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: REGION_LOCATION___ } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: POSITION_TO_COPY_FROM } },
              slot: 2,
            },
            {
              item: { id: "loc", data: { name: POSITION_TO_PASTE_TO } },
              slot: 3,
            },
          ],
        },
        action: "CopyBlocks",
      });
    },
    BLOCKDROPSOFF() {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [],
        },
        action: "BlockDropsOff",
      });
    },
    PFX_LINE__A_(
      PARTICLE_TO_SPAWN,
      LINE_START_LOCATION,
      LINE_END_LOCATION,
      ANIMATION_DURATION__TICKS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: LINE_START_LOCATION } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: LINE_END_LOCATION } },
              slot: 2,
            },
            {
              item: {
                id: "num",
                data: { name: ANIMATION_DURATION__TICKS_ },
              },
              slot: 3,
            },
          ],
        },
        action: "PFX Line [A]",
      });
    },
    CLEARITEMS(CONTAINER_LOCATION, ITEM_S__TO_CLEAR) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            { item: { id: "item", data: { name: ITEM_S__TO_CLEAR } }, slot: 1 },
          ],
        },
        action: "ClearItems",
      });
    },
    PFX_SPHERE(
      PARTICLE_TO_SPAWN,
      SPHERE_CENTER_LOCATION,
      SPHERE_DIAMETER__DEFAULT_____BLOCKS_
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: { id: "PARTICLE", data: { name: PARTICLE_TO_SPAWN } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: SPHERE_CENTER_LOCATION } },
              slot: 1,
            },
            {
              item: {
                id: "num",
                data: { name: SPHERE_DIAMETER__DEFAULT_____BLOCKS_ },
              },
              slot: 2,
            },
          ],
        },
        action: "PFX Sphere",
      });
    },
  },
  else: {},
  start_process: {
    DYNAMIC() {
      module.exports.blocks.push({
        id: "block",
        block: "start_process",
        args: {
          items: [],
        },
        action: "dynamic",
      });
    },
  },
  process: {
    DYNAMIC() {
      module.exports.blocks.push({
        id: "block",
        block: "process",
        args: {
          items: [],
        },
        action: "dynamic",
      });
    },
  },
  control: {
    STOPREPEAT() {
      module.exports.blocks.push({
        id: "block",
        block: "control",
        args: {
          items: [],
        },
        action: "StopRepeat",
      });
    },
    RETURN() {
      module.exports.blocks.push({
        id: "block",
        block: "control",
        args: {
          items: [],
        },
        action: "Return",
      });
    },
    SKIP() {
      module.exports.blocks.push({
        id: "block",
        block: "control",
        args: {
          items: [],
        },
        action: "Skip",
      });
    },
    END() {
      module.exports.blocks.push({
        id: "block",
        block: "control",
        args: {
          items: [],
        },
        action: "End",
      });
    },
    WAIT(WAIT_DURATION) {
      module.exports.blocks.push({
        id: "block",
        block: "control",
        args: {
          items: [
            { item: { id: "num", data: { name: WAIT_DURATION } }, slot: 0 },
          ],
        },
        action: "Wait",
      });
    },
  },
  repeat: {
    ADJACENT(THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION, CENTER_BLOCK) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION },
              },
              slot: 0,
            },
            { item: { id: "loc", data: { name: CENTER_BLOCK } }, slot: 1 },
          ],
        },
        action: "Adjacent",
      });
    },
    SPHERE(VARIABLE_TO_SET, SPHERE_CENTER, SPHERE_RADIUS, SPHERE_POINTS) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: { id: "var", data: { name: VARIABLE_TO_SET } },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: SPHERE_CENTER } },
              slot: 1,
            },
            { item: { id: "num", data: { name: SPHERE_RADIUS } }, slot: 2 },
            { item: { id: "num", data: { name: SPHERE_POINTS } }, slot: 3 },
          ],
        },
        action: "Sphere",
      });
    },
    FOREVER() {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [],
        },
        action: "Forever",
      });
    },
    MULTIPLE(GETS_THE_CURRENT_INDEX_EACH_ITERATION, AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: GETS_THE_CURRENT_INDEX_EACH_ITERATION },
              },
              slot: 0,
            },
            { item: { id: "num", data: { name: AMOUNT } }, slot: 1 },
          ],
        },
        action: "Multiple",
      });
    },
    GRID(
      GETS_THE_CURRENT_BLOCK_EACH_ITERATION,
      START_OF_REGION,
      END_OF_REGION
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: GETS_THE_CURRENT_BLOCK_EACH_ITERATION },
              },
              slot: 0,
            },
            {
              item: { id: "loc", data: { name: START_OF_REGION } },
              slot: 1,
            },
            {
              item: { id: "loc", data: { name: END_OF_REGION } },
              slot: 2,
            },
          ],
        },
        action: "Grid",
      });
    },
    WHILE() {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [],
        },
        action: "While",
      });
    },
    RANGE(
      GETS_THE_CURRENT_NUMBER_EACH_ITERATION,
      START_OF_RANGE,
      END_OF_RANGE,
      INTERVAL
    ) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: GETS_THE_CURRENT_NUMBER_EACH_ITERATION },
              },
              slot: 0,
            },
            { item: { id: "num", data: { name: START_OF_RANGE } }, slot: 1 },
            { item: { id: "num", data: { name: END_OF_RANGE } }, slot: 2 },
            { item: { id: "num", data: { name: INTERVAL } }, slot: 3 },
          ],
        },
        action: "Range",
      });
    },
    FOREACH(GETS_THE_CURRENT_VALUE_EACH_ITERATION, LIST_TO_REPEAT_THROUGH) {
      module.exports.blocks.push({
        id: "block",
        block: "repeat",
        args: {
          items: [
            {
              item: {
                id: "var",
                data: { name: GETS_THE_CURRENT_VALUE_EACH_ITERATION },
              },
              slot: 0,
            },
            {
              item: { id: "list", data: { name: LIST_TO_REPEAT_THROUGH } },
              slot: 1,
            },
          ],
        },
        action: "ForEach",
      });
    },
  },
  if_game: {
    SIGNHASTXT(SIGN_LOCATION, TEXT_TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: SIGN_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "txt", data: { name: TEXT_TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "SignHasTxt",
      });
    },
    HASROOMFORITEM(CONTAINER_LOCATION, ITEM_S__TO_CHECK) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            { item: { id: "item", data: { name: ITEM_S__TO_CHECK } }, slot: 1 },
          ],
        },
        action: "HasRoomForItem",
      });
    },
    EVENTBLOCKEQUALS(BLOCK_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "BLOCK", data: { name: BLOCK_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "EventBlockEquals",
      });
    },
    COMMANDEQUALS(TEXT_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: TEXT_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "CommandEquals",
      });
    },
    EVENTITEMEQUALS(ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 0,
            },
          ],
        },
        action: "EventItemEquals",
      });
    },
    CONTAINERHAS(CONTAINER_LOCATION, ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "ContainerHas",
      });
    },
    BLOCKEQUALS(CHECK_LOCATION, BLOCK_S__TO_CHECK_FOR, BLOCK_DATA) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CHECK_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "BLOCK", data: { name: BLOCK_S__TO_CHECK_FOR } },
              slot: 1,
            },
            { item: { id: "BLOCK_TAG", data: { name: BLOCK_DATA } }, slot: 2 },
          ],
        },
        action: "BlockEquals",
      });
    },
    BLOCKPOWERED(CHECK_LOCATION_S_) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CHECK_LOCATION_S_ } },
              slot: 0,
            },
          ],
        },
        action: "BlockPowered",
      });
    },
    HASPLAYER(NAME_OR_UUID) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            { item: { id: "txt", data: { name: NAME_OR_UUID } }, slot: 0 },
          ],
        },
        action: "HasPlayer",
      });
    },
    CONTAINERHASALL(CONTAINER_LOCATION, ITEM_S__TO_CHECK_FOR) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "loc", data: { name: CONTAINER_LOCATION } },
              slot: 0,
            },
            {
              item: { id: "item", data: { name: ITEM_S__TO_CHECK_FOR } },
              slot: 1,
            },
          ],
        },
        action: "ContainerHasAll",
      });
    },
    CMDARGEQUALS(TEXT_S__TO_CHECK_FOR, ARGUMENT_NUMBER) {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [
            {
              item: { id: "txt", data: { name: TEXT_S__TO_CHECK_FOR } },
              slot: 0,
            },
            {
              item: { id: "num", data: { name: ARGUMENT_NUMBER } },
              slot: 1,
            },
          ],
        },
        action: "CmdArgEquals",
      });
    },
    EVENTCANCELLED() {
      module.exports.blocks.push({
        id: "block",
        block: "if_game",
        args: {
          items: [],
        },
        action: "EventCancelled",
      });
    },
  },
};
