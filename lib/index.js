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
            {
              item: {
                id: ITEM_S__TO_GIVE.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_GIVE.toString().substring(
                    2,
                    ITEM_S__TO_GIVE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: AMOUNT_TO_GIVE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: AMOUNT_TO_GIVE.toString().substring(
                    2,
                    AMOUNT_TO_GIVE.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: TITLE.toString().startsWith("v_") ? "var" : "txt",
                data: { name: TITLE.toString().substring(2, TITLE.length) },
              },
              slot: 0,
            },
            {
              item: {
                id: REMAINING_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: REMAINING_HEALTH.toString().substring(
                    2,
                    REMAINING_HEALTH.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: MAXIMUM_HEALTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MAXIMUM_HEALTH.toString().substring(
                    2,
                    MAXIMUM_HEALTH.length
                  ),
                },
              },
              slot: 2,
            },
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
            {
              item: {
                id: ATTACK_SPEED.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ATTACK_SPEED.toString().substring(
                    2,
                    ATTACK_SPEED.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: ITEMS_TO_DISPLAY.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_TO_DISPLAY.toString().substring(
                    2,
                    ITEMS_TO_DISPLAY.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: STRIKE_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: STRIKE_LOCATION.toString().substring(
                    2,
                    STRIKE_LOCATION.length
                  ),
                },
              },
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
              item: {
                id: DAMAGE_TO_INFLICT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: DAMAGE_TO_INFLICT.toString().substring(
                    2,
                    DAMAGE_TO_INFLICT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DAMAGE_SOURCE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DAMAGE_SOURCE.toString().substring(
                    2,
                    DAMAGE_SOURCE.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: EXPERIENCE_TO_SET.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: EXPERIENCE_TO_SET.toString().substring(
                    2,
                    EXPERIENCE_TO_SET.length
                  ),
                },
              },
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
              item: {
                id: PROGRESS__________.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: PROGRESS__________.toString().substring(
                    2,
                    PROGRESS__________.length
                  ),
                },
              },
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
                id: LOCATIONS_TO_TELEPORT_TO.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATIONS_TO_TELEPORT_TO.toString().substring(
                    2,
                    LOCATIONS_TO_TELEPORT_TO.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TELEPORT_DELAY__TICKS__DEFAULT______.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: TELEPORT_DELAY__TICKS__DEFAULT______.toString().substring(
                    2,
                    TELEPORT_DELAY__TICKS__DEFAULT______.length
                  ),
                },
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
            {
              item: {
                id: AMOUNT_TO_HEAL.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: AMOUNT_TO_HEAL.toString().substring(
                    2,
                    AMOUNT_TO_HEAL.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: MAXIMUM_HEALTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MAXIMUM_HEALTH.toString().substring(
                    2,
                    MAXIMUM_HEALTH.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: HEADER_FOOTER_TEXT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: HEADER_FOOTER_TEXT.toString().substring(
                    2,
                    HEADER_FOOTER_TEXT.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: ITEM_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_SET.toString().substring(2, ITEM_TO_SET.length),
                },
              },
              slot: 0,
            },
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
              item: {
                id: ABSORPTION_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ABSORPTION_HEALTH.toString().substring(
                    2,
                    ABSORPTION_HEALTH.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: ROWS_TO_REMOVE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ROWS_TO_REMOVE.toString().substring(
                    2,
                    ROWS_TO_REMOVE.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: BLOCKS_TO_DISALLOW.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCKS_TO_DISALLOW.toString().substring(
                    2,
                    BLOCKS_TO_DISALLOW.length
                  ),
                },
              },
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
              item: {
                id: POTION_EFFECT_S_.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_EFFECT_S_.toString().substring(
                    2,
                    POTION_EFFECT_S_.length
                  ),
                },
              },
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
              item: {
                id: PARTICLE_EFFECT.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_EFFECT.toString().substring(
                    2,
                    PARTICLE_EFFECT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: PARTICLE_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: PARTICLE_LOCATION.toString().substring(
                    2,
                    PARTICLE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PARTICLE_COUNT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: PARTICLE_COUNT.toString().substring(
                    2,
                    PARTICLE_COUNT.length
                  ),
                },
              },
              slot: 2,
            },
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
            {
              item: {
                id: ITEM_S__TO_CLEAR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CLEAR.toString().substring(
                    2,
                    ITEM_S__TO_CLEAR.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: BLOCK_TO_DISPLAY.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_TO_DISPLAY.toString().substring(
                    2,
                    BLOCK_TO_DISPLAY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCK_LOCATION__OR_START_OF_REGION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "loc",
                data: {
                  name: BLOCK_LOCATION__OR_START_OF_REGION.toString().substring(
                    2,
                    BLOCK_LOCATION__OR_START_OF_REGION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: END_OF_REGION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: END_OF_REGION.toString().substring(
                    2,
                    END_OF_REGION.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: BLOCK_DATA.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK_TAG",
                data: {
                  name: BLOCK_DATA.toString().substring(2, BLOCK_DATA.length),
                },
              },
              slot: 3,
            },
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
                id: NAME_OR_UUID_OF_TARGET_TO_RIDE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OR_UUID_OF_TARGET_TO_RIDE.toString().substring(
                    2,
                    NAME_OR_UUID_OF_TARGET_TO_RIDE.length
                  ),
                },
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
              item: {
                id: BLOCK_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: BLOCK_LOCATION.toString().substring(
                    2,
                    BLOCK_LOCATION.length
                  ),
                },
              },
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
            {
              item: {
                id: ADVANCEMENT_NAME.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: ADVANCEMENT_NAME.toString().substring(
                    2,
                    ADVANCEMENT_NAME.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ADVANCEMENT_ICON.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ADVANCEMENT_ICON.toString().substring(
                    2,
                    ADVANCEMENT_ICON.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: NEW_POSITION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NEW_POSITION.toString().substring(
                    2,
                    NEW_POSITION.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: SLOT_S__TO_SET.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SLOT_S__TO_SET.toString().substring(
                    2,
                    SLOT_S__TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_DISPLAY.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_DISPLAY.toString().substring(
                    2,
                    ITEM_S__TO_DISPLAY.length
                  ),
                },
              },
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
              item: {
                id: LAUNCH_DESTINATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LAUNCH_DESTINATION.toString().substring(
                    2,
                    LAUNCH_DESTINATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: ARMOR_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ARMOR_TO_SET.toString().substring(
                    2,
                    ARMOR_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: ARROW_COUNT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ARROW_COUNT.toString().substring(2, ARROW_COUNT.length),
                },
              },
              slot: 0,
            },
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
              item: {
                id: EXPERIENCE_TO_GIVE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: EXPERIENCE_TO_GIVE.toString().substring(
                    2,
                    EXPERIENCE_TO_GIVE.length
                  ),
                },
              },
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
                id: ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS.toString().substring(
                    2,
                    ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS.length
                  ),
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
              item: {
                id: ITEM_S__TO_REPLACE.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_REPLACE.toString().substring(
                    2,
                    ITEM_S__TO_REPLACE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_TO_REPLACE_WITH.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_TO_REPLACE_WITH.toString().substring(
                    2,
                    ITEM_TO_REPLACE_WITH.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: AMOUNT_OF_ITEMS_TO_REPLACE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: AMOUNT_OF_ITEMS_TO_REPLACE.toString().substring(
                    2,
                    AMOUNT_OF_ITEMS_TO_REPLACE.length
                  ),
                },
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
            {
              item: {
                id: MESSAGE_TO_SEND.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MESSAGE_TO_SEND.toString().substring(
                    2,
                    MESSAGE_TO_SEND.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: NEW_CHAT_TAG.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NEW_CHAT_TAG.toString().substring(
                    2,
                    NEW_CHAT_TAG.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: MESSAGE_TO_SEND.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MESSAGE_TO_SEND.toString().substring(
                    2,
                    MESSAGE_TO_SEND.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: NEW_RADIUS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NEW_RADIUS.toString().substring(2, NEW_RADIUS.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCKS_PER_SECOND.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: BLOCKS_PER_SECOND.toString().substring(
                    2,
                    BLOCKS_PER_SECOND.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_SET.toString().substring(2, ITEM_TO_SET.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SLOT_TO_SET.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SLOT_TO_SET.toString().substring(2, SLOT_TO_SET.length),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: SOUNDS_TO_PLAY.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUNDS_TO_PLAY.toString().substring(
                    2,
                    SOUNDS_TO_PLAY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_DELAY__TICKS__DEFAULT______.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SOUND_DELAY__TICKS__DEFAULT______.toString().substring(
                    2,
                    SOUND_DELAY__TICKS__DEFAULT______.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PLAYBACK_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: PLAYBACK_LOCATION.toString().substring(
                    2,
                    PLAYBACK_LOCATION.length
                  ),
                },
              },
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
            {
              item: {
                id: MESSAGES_TO_SEND.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: MESSAGES_TO_SEND.toString().substring(
                    2,
                    MESSAGES_TO_SEND.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: MESSAGE_DELAY_TICKS.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: MESSAGE_DELAY_TICKS.toString().substring(
                    2,
                    MESSAGE_DELAY_TICKS.length
                  ),
                },
              },
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
              item: {
                id: SIGN_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: SIGN_LOCATION.toString().substring(
                    2,
                    SIGN_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_LINE_S_.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_LINE_S_.toString().substring(
                    2,
                    TEXT_LINE_S_.length
                  ),
                },
              },
              slot: 1,
            },
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
                id: MOVEMENT_SPEED_PERCENTAGE_____TO_______.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: MOVEMENT_SPEED_PERCENTAGE_____TO_______.toString().substring(
                    2,
                    MOVEMENT_SPEED_PERCENTAGE_____TO_______.length
                  ),
                },
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
            {
              item: {
                id: ITEMS_TO_DISPLAY.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_TO_DISPLAY.toString().substring(
                    2,
                    ITEMS_TO_DISPLAY.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: INVENTORY_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: INVENTORY_NAME.toString().substring(
                    2,
                    INVENTORY_NAME.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: PROJECTILE_TO_LAUNCH.toString().startsWith("v_")
                  ? "var"
                  : "PROJECTILE",
                data: {
                  name: PROJECTILE_TO_LAUNCH.toString().substring(
                    2,
                    PROJECTILE_TO_LAUNCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LAUNCH_POINT.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LAUNCH_POINT.toString().substring(
                    2,
                    LAUNCH_POINT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PROJECTILE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: PROJECTILE_NAME.toString().substring(
                    2,
                    PROJECTILE_NAME.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPEED.toString().startsWith("v_") ? "var" : "num",
                data: { name: SPEED.toString().substring(2, SPEED.length) },
              },
              slot: 3,
            },
            {
              item: {
                id: INACCURACY__DEFAULT_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: INACCURACY__DEFAULT_____.toString().substring(
                    2,
                    INACCURACY__DEFAULT_____.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: LAUNCH_TRAIL.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: LAUNCH_TRAIL.toString().substring(
                    2,
                    LAUNCH_TRAIL.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: ITEM_TYPE_TO_AFFECT.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_TYPE_TO_AFFECT.toString().substring(
                    2,
                    ITEM_TYPE_TO_AFFECT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: COOLDOWN_IN_TICKS.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: COOLDOWN_IN_TICKS.toString().substring(
                    2,
                    COOLDOWN_IN_TICKS.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: COOLDOWN_REFRESH_SOUND.toString().startsWith("v_")
                  ? "var"
                  : "snd",
                data: {
                  name: COOLDOWN_REFRESH_SOUND.toString().substring(
                    2,
                    COOLDOWN_REFRESH_SOUND.length
                  ),
                },
              },
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
              item: {
                id: MESSAGE_TO_SEND_IN_CHAT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: MESSAGE_TO_SEND_IN_CHAT.toString().substring(
                    2,
                    MESSAGE_TO_SEND_IN_CHAT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: MESSAGE_TO_SEE_ON_HOVER.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: MESSAGE_TO_SEE_ON_HOVER.toString().substring(
                    2,
                    MESSAGE_TO_SEE_ON_HOVER.length
                  ),
                },
              },
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
            {
              item: {
                id: POTION_EFFECTS.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_EFFECTS.toString().substring(
                    2,
                    POTION_EFFECTS.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: BREATH_TICKS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: BREATH_TICKS.toString().substring(
                    2,
                    BREATH_TICKS.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: NEW_CHAT_COLOR.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NEW_CHAT_COLOR.toString().substring(
                    2,
                    NEW_CHAT_COLOR.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: CENTER_POSITION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: CENTER_POSITION.toString().substring(
                    2,
                    CENTER_POSITION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RADIUS_IN_BLOCKS.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: RADIUS_IN_BLOCKS.toString().substring(
                    2,
                    RADIUS_IN_BLOCKS.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: WARNING_DISTANCE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: WARNING_DISTANCE.toString().substring(
                    2,
                    WARNING_DISTANCE.length
                  ),
                },
              },
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
            {
              item: {
                id: DAYLIGHT_TIME.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: DAYLIGHT_TIME.toString().substring(
                    2,
                    DAYLIGHT_TIME.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: SOUND_TO_PLAY.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUND_TO_PLAY.toString().substring(
                    2,
                    SOUND_TO_PLAY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: PLAYBACK_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: PLAYBACK_LOCATION.toString().substring(
                    2,
                    PLAYBACK_LOCATION.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: NEW_TARGET.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NEW_TARGET.toString().substring(2, NEW_TARGET.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: ITEM_S__TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_REMOVE.toString().substring(
                    2,
                    ITEM_S__TO_REMOVE.length
                  ),
                },
              },
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
                id: LOCATIONS_TO_CHOOSE_FROM.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATIONS_TO_CHOOSE_FROM.toString().substring(
                    2,
                    LOCATIONS_TO_CHOOSE_FROM.length
                  ),
                },
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
          items: [
            {
              item: {
                id: BOOK_ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: BOOK_ITEM.toString().substring(2, BOOK_ITEM.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: REMAINING_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: REMAINING_HEALTH.toString().substring(
                    2,
                    REMAINING_HEALTH.length
                  ),
                },
              },
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
              item: {
                id: MOB_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "SPAWN_EGG",
                data: {
                  name: MOB_DISGUISE.toString().substring(
                    2,
                    MOB_DISGUISE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DISGUISE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DISGUISE_NAME.toString().substring(
                    2,
                    DISGUISE_NAME.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: BLOCK_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_DISGUISE.toString().substring(
                    2,
                    BLOCK_DISGUISE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NAME_OF_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OF_DISGUISE.toString().substring(
                    2,
                    NAME_OF_DISGUISE.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: ROLLBACK_TIME.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ROLLBACK_TIME.toString().substring(
                    2,
                    ROLLBACK_TIME.length
                  ),
                },
              },
              slot: 0,
            },
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
                id: __OF_NORMAL_WALK_SPEED____TO_____
                  .toString()
                  .startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: __OF_NORMAL_WALK_SPEED____TO_____
                    .toString()
                    .substring(2, __OF_NORMAL_WALK_SPEED____TO_____.length),
                },
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
            {
              item: {
                id: BLOCKS_TO_ALLOW.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCKS_TO_ALLOW.toString().substring(
                    2,
                    BLOCKS_TO_ALLOW.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: BLOCK_TO_ACCESS.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: BLOCK_TO_ACCESS.toString().substring(
                    2,
                    BLOCK_TO_ACCESS.length
                  ),
                },
              },
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
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: FALL_DISTANCE__BLOCKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: FALL_DISTANCE__BLOCKS_.toString().substring(
                    2,
                    FALL_DISTANCE__BLOCKS_.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_SET.toString().substring(2, ITEM_TO_SET.length),
                },
              },
              slot: 0,
            },
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
              item: {
                id: ITEMS_TO_PICK_FROM.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_TO_PICK_FROM.toString().substring(
                    2,
                    ITEMS_TO_PICK_FROM.length
                  ),
                },
              },
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
              item: {
                id: BLOCK_S__TO_FRACTURE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: BLOCK_S__TO_FRACTURE.toString().substring(
                    2,
                    BLOCK_S__TO_FRACTURE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: FRACTURE_LEVEL.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: FRACTURE_LEVEL.toString().substring(
                    2,
                    FRACTURE_LEVEL.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: ITEMS_TO_DISPLAY.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_TO_DISPLAY.toString().substring(
                    2,
                    ITEMS_TO_DISPLAY.length
                  ),
                },
              },
              slot: 0,
            },
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
          items: [
            {
              item: {
                id: NEW_SLOT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NEW_SLOT.toString().substring(2, NEW_SLOT.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: NEW_HUNGER_LEVEL_______.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NEW_HUNGER_LEVEL_______.toString().substring(
                    2,
                    NEW_HUNGER_LEVEL_______.length
                  ),
                },
              },
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
              item: {
                id: DISGUISE_PLAYER_NAME.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: DISGUISE_PLAYER_NAME.toString().substring(
                    2,
                    DISGUISE_PLAYER_NAME.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DISGUISE_SKIN.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DISGUISE_SKIN.toString().substring(
                    2,
                    DISGUISE_SKIN.length
                  ),
                },
              },
              slot: 1,
            },
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
                id: NEW_SATURATION_LEVEL_______.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NEW_SATURATION_LEVEL_______.toString().substring(
                    2,
                    NEW_SATURATION_LEVEL_______.length
                  ),
                },
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
            {
              item: {
                id: TITLE_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TITLE_TEXT.toString().substring(2, TITLE_TEXT.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SUBTITLE_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: SUBTITLE_TEXT.toString().substring(
                    2,
                    SUBTITLE_TEXT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TITLE_DURATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TITLE_DURATION.toString().substring(
                    2,
                    TITLE_DURATION.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: FADE_IN_LENGTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: FADE_IN_LENGTH.toString().substring(
                    2,
                    FADE_IN_LENGTH.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: FADE_OUT_LENGTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: FADE_OUT_LENGTH.toString().substring(
                    2,
                    FADE_OUT_LENGTH.length
                  ),
                },
              },
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
            {
              item: {
                id: SOUNDS_TO_STOP.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUNDS_TO_STOP.toString().substring(
                    2,
                    SOUNDS_TO_STOP.length
                  ),
                },
              },
              slot: 0,
            },
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
          items: [
            {
              item: {
                id: NAME_COLOR.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NAME_COLOR.toString().substring(2, NAME_COLOR.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: BLOCK_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_S__TO_CHECK_FOR.toString().substring(
                    2,
                    BLOCK_S__TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_S__TO_CHECK_FOR.toString().substring(
                    2,
                    LOCATION_S__TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: MAXIMUM_DISTANCE_FROM_TARGET_BLOCK.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: MAXIMUM_DISTANCE_FROM_TARGET_BLOCK.toString().substring(
                    2,
                    MAXIMUM_DISTANCE_FROM_TARGET_BLOCK.length
                  ),
                },
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
              item: {
                id: LOCATION_TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHECK.toString().substring(
                    2,
                    LOCATION_TO_CHECK.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK.toString().substring(
                    2,
                    ITEM_S__TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: ITEM_TYPE_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_TYPE_S__TO_CHECK.toString().substring(
                    2,
                    ITEM_TYPE_S__TO_CHECK.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK.toString().substring(
                    2,
                    ITEM_S__TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: CENTER_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: CENTER_LOCATION.toString().substring(
                    2,
                    CENTER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RANGE.toString().startsWith("v_") ? "var" : "num",
                data: { name: RANGE.toString().substring(2, RANGE.length) },
              },
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
        block: "if_player",
        args: {
          items: [
            {
              item: {
                id: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "txt",
                data: {
                  name: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.toString().substring(
                    2,
                    ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.length
                  ),
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
              item: {
                id: BLOCK_TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_TO_CHECK_FOR.toString().substring(
                    2,
                    BLOCK_TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHECK_FOR.toString().substring(
                    2,
                    LOCATION_TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: POTION_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_S__TO_CHECK_FOR.toString().substring(
                    2,
                    POTION_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: ITEMS_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEMS_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: SLOT_ID_TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: SLOT_ID_TO_CHECK.toString().substring(
                    2,
                    SLOT_ID_TO_CHECK.length
                  ),
                },
              },
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
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: SLOT_ID_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: SLOT_ID_S__TO_CHECK.toString().substring(
                    2,
                    SLOT_ID_S__TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: NAME_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_S__TO_CHECK_FOR.toString().substring(
                    2,
                    NAME_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: SLOT_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: SLOT_S__TO_CHECK.toString().substring(
                    2,
                    SLOT_S__TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION.toString().startsWith("v_") ? "var" : "POTION",
                data: { name: POTION.toString().substring(2, POTION.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_S__TO_CHOOSE_FROM.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUE_S__TO_CHOOSE_FROM.toString().substring(
                    2,
                    VALUE_S__TO_CHOOSE_FROM.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "RandomObj",
      });
    },
    SETITEMAMOUNT(VARIABLE_TO_SET, STACK_SIZE, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: STACK_SIZE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: STACK_SIZE.toString().substring(2, STACK_SIZE.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_TO_ENCHANT.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_TO_ENCHANT.toString().substring(
                    2,
                    ITEM_TO_ENCHANT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_ENCHANTS.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: ITEM_ENCHANTS.toString().substring(
                    2,
                    ITEM_ENCHANTS.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_CHANGE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CHANGE.toString().substring(
                    2,
                    TEXT_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: NAME_TO_MATCH.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NAME_TO_MATCH.toString().substring(
                    2,
                    NAME_TO_MATCH.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHANGE.toString().substring(
                    2,
                    LOCATION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: X_CHANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: X_CHANGE.toString().substring(2, X_CHANGE.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: Y_CHANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: Y_CHANGE.toString().substring(2, Y_CHANGE.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: Z_CHANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: Z_CHANGE.toString().substring(2, Z_CHANGE.length),
                },
              },
              slot: 4,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION__.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LOCATION__.toString().substring(2, LOCATION__.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LOCATION___.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LOCATION___.toString().substring(2, LOCATION___.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHANGE.toString().substring(
                    2,
                    LOCATION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: DIRECTION.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DIRECTION.toString().substring(2, DIRECTION.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: LIST_TO_APPEND_TO.toString().startsWith("v_")
                  ? "var"
                  : "var",
                data: {
                  name: LIST_TO_APPEND_TO.toString().substring(
                    2,
                    LIST_TO_APPEND_TO.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_S__TO_APPEND.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUE_S__TO_APPEND.toString().substring(
                    2,
                    VALUE_S__TO_APPEND.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "AppendValue",
      });
    },
    SETITEMLORE(VARIABLE_TO_SET, ITEM, ITEM_LORE) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_LORE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ITEM_LORE.toString().substring(2, ITEM_LORE.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ROOT_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ROOT_INDEX.toString().substring(2, ROOT_INDEX.length),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "Root",
      });
    },
    _(VARIABLE_TO_SET, DIVIDEND, DIVISOR) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DIVIDEND.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: DIVIDEND.toString().substring(2, DIVIDEND.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: DIVISOR.toString().startsWith("v_") ? "var" : "num",
                data: { name: DIVISOR.toString().substring(2, DIVISOR.length) },
              },
              slot: 2,
            },
          ],
        },
        action: "%",
      });
    },
    GETITEMATTRIBUTE(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUES_TO_ADD.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUES_TO_ADD.toString().substring(
                    2,
                    VALUES_TO_ADD.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SHIFT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SHIFT.toString().substring(
                    2,
                    LOCATION_TO_SHIFT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ROTATION_AMOUNT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ROTATION_AMOUNT.toString().substring(
                    2,
                    ROTATION_AMOUNT.length
                  ),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "ShiftRotation",
      });
    },
    sub(VARIABLE_TO_SET, VALUE_TO_SUBTRACT_FROM, VALUES_TO_SUBTRACT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_TO_SUBTRACT_FROM.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUE_TO_SUBTRACT_FROM.toString().substring(
                    2,
                    VALUE_TO_SUBTRACT_FROM.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VALUES_TO_SUBTRACT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUES_TO_SUBTRACT.toString().substring(
                    2,
                    VALUES_TO_SUBTRACT.length
                  ),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "-",
      });
    },
    ADDITEMENCHANT(VARIABLE_TO_SET, ITEM, ENCHANT_NAME, ENCHANT_LEVEL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: ENCHANT_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ENCHANT_NAME.toString().substring(
                    2,
                    ENCHANT_NAME.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: ENCHANT_LEVEL.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ENCHANT_LEVEL.toString().substring(
                    2,
                    ENCHANT_LEVEL.length
                  ),
                },
              },
              slot: 3,
            },
          ],
        },
        action: "AddItemEnchant",
      });
    },
    GETITEMRARITY(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBERS_TO_DIVIDE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBERS_TO_DIVIDE.toString().substring(
                    2,
                    NUMBERS_TO_DIVIDE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "/",
      });
    },
    GETITEMTYPE(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_TRIM.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: TEXT_TO_TRIM.toString().substring(
                    2,
                    TEXT_TO_TRIM.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: START_CHARACTER_POSITION.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: START_CHARACTER_POSITION.toString().substring(
                    2,
                    START_CHARACTER_POSITION.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: END_CHARACTER_POSITION.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: END_CHARACTER_POSITION.toString().substring(
                    2,
                    END_CHARACTER_POSITION.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: PLAYER_HEAD_ITEM.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: PLAYER_HEAD_ITEM.toString().substring(
                    2,
                    PLAYER_HEAD_ITEM.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: OWNER_NAME_OR_UUID.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: OWNER_NAME_OR_UUID.toString().substring(
                    2,
                    OWNER_NAME_OR_UUID.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_S__TO_ASSIGN.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUE_S__TO_ASSIGN.toString().substring(
                    2,
                    VALUE_S__TO_ASSIGN.length
                  ),
                },
              },
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
                id: VARIABLE_TO_REMOVE_OTHER_TEXT_FROM.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: VARIABLE_TO_REMOVE_OTHER_TEXT_FROM.toString().substring(
                    2,
                    VARIABLE_TO_REMOVE_OTHER_TEXT_FROM.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_REMOVE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_REMOVE.toString().substring(
                    2,
                    TEXT_TO_REMOVE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "RmText",
      });
    },
    ADDITEMATTRIBUTE(VARIABLE_TO_SET, ITEM, MODIFIER_AMOUNT) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: MODIFIER_AMOUNT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MODIFIER_AMOUNT.toString().substring(
                    2,
                    MODIFIER_AMOUNT.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_PARSE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_PARSE.toString().substring(
                    2,
                    LOCATION_TO_PARSE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "GetCoord",
      });
    },
    REMOVEITEMTAG(VARIABLE_TO_SET, ITEM, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION.toString().startsWith("v_") ? "var" : "POTION",
                data: { name: POTION.toString().substring(2, POTION.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_ALIGN.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_ALIGN.toString().substring(
                    2,
                    LOCATION_TO_ALIGN.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION__.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LOCATION__.toString().substring(2, LOCATION__.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LOCATION___.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LOCATION___.toString().substring(2, LOCATION___.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_TO_CHANGE.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUND_TO_CHANGE.toString().substring(
                    2,
                    SOUND_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SOUND_NAME__E_G___RABBIT_EAT__.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: SOUND_NAME__E_G___RABBIT_EAT__.toString().substring(
                    2,
                    SOUND_NAME__E_G___RABBIT_EAT__.length
                  ),
                },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SHIFT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SHIFT.toString().substring(
                    2,
                    LOCATION_TO_SHIFT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SHIFT_DISTANCE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SHIFT_DISTANCE.toString().substring(
                    2,
                    SHIFT_DISTANCE.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_TO_GET_VOLUME_OF.toString().startsWith("v_")
                  ? "var"
                  : "snd",
                data: {
                  name: SOUND_TO_GET_VOLUME_OF.toString().substring(
                    2,
                    SOUND_TO_GET_VOLUME_OF.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: MINIMUM_NUMBER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MINIMUM_NUMBER.toString().substring(
                    2,
                    MINIMUM_NUMBER.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: MAXIMUM_NUMBER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MAXIMUM_NUMBER.toString().substring(
                    2,
                    MAXIMUM_NUMBER.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: COLORS_TO_MIX.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: COLORS_TO_MIX.toString().substring(
                    2,
                    COLORS_TO_MIX.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: HEAD_TO_GET_OWNER_OF.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: HEAD_TO_GET_OWNER_OF.toString().substring(
                    2,
                    HEAD_TO_GET_OWNER_OF.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "GetHeadOwner",
      });
    },
    GETITEMENCHANTS(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
          ],
        },
        action: "GetItemEnchants",
      });
    },
    GETMAXITEMAMOUNT(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: LIST_TO_MODIFY.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: LIST_TO_MODIFY.toString().substring(
                    2,
                    LIST_TO_MODIFY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LIST_INDEX.toString().substring(2, LIST_INDEX.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VALUE_TO_SET.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUE_TO_SET.toString().substring(
                    2,
                    VALUE_TO_SET.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATIONS_TO_CENTER.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATIONS_TO_CENTER.toString().substring(
                    2,
                    LOCATIONS_TO_CENTER.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BOOK_ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: BOOK_ITEM.toString().substring(2, BOOK_ITEM.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PAGES.toString().startsWith("v_") ? "var" : "LIST",
                data: { name: PAGES.toString().substring(2, PAGES.length) },
              },
              slot: 2,
            },
            {
              item: {
                id: PAGE_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: PAGE_TEXT.toString().substring(2, PAGE_TEXT.length),
                },
              },
              slot: 6,
            },
            {
              item: {
                id: PAGE_NUMBER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: PAGE_NUMBER.toString().substring(2, PAGE_NUMBER.length),
                },
              },
              slot: 7,
            },
          ],
        },
        action: "SetBookText",
      });
    },
    SETITEMTYPE(VARIABLE_TO_SET, ITEM, ITEM_MATERIAL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_MATERIAL.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ITEM_MATERIAL.toString().substring(
                    2,
                    ITEM_MATERIAL.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: snd.toString().startsWith("v_") ? "var" : "snd",
                data: { name: snd.toString().substring(2, snd.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_ACCESS.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: LIST_TO_ACCESS.toString().substring(
                    2,
                    LIST_TO_ACCESS.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LIST_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LIST_INDEX.toString().substring(2, LIST_INDEX.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBERS_TO_AVERAGE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBERS_TO_AVERAGE.toString().substring(
                    2,
                    NUMBERS_TO_AVERAGE.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_SET_TO.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_SET_TO.toString().substring(
                    2,
                    TEXT_TO_SET_TO.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_WRAP.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_WRAP.toString().substring(
                    2,
                    NUMBER_TO_WRAP.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LOWER_BOUND.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LOWER_BOUND.toString().substring(2, LOWER_BOUND.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: UPPER_BOUND.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: UPPER_BOUND.toString().substring(2, UPPER_BOUND.length),
                },
              },
              slot: 3,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NOISE_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NOISE_LOCATION.toString().substring(
                    2,
                    NOISE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CELL_FREQUENCY.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: CELL_FREQUENCY.toString().substring(
                    2,
                    CELL_FREQUENCY.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CELL_SCATTER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: CELL_SCATTER.toString().substring(
                    2,
                    CELL_SCATTER.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: GENERATION_SEED.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: GENERATION_SEED.toString().substring(
                    2,
                    GENERATION_SEED.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: HUE__COLOR_CIRCLE________.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: HUE__COLOR_CIRCLE________.toString().substring(
                    2,
                    HUE__COLOR_CIRCLE________.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SATURATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SATURATION.toString().substring(2, SATURATION.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: BRIGHTNESS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: BRIGHTNESS.toString().substring(2, BRIGHTNESS.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: H__S__B_VALUES.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: H__S__B_VALUES.toString().substring(
                    2,
                    H__S__B_VALUES.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: VARIABLE_TO_INCREMENT.toString().startsWith("v_")
                  ? "var"
                  : "var",
                data: {
                  name: VARIABLE_TO_INCREMENT.toString().substring(
                    2,
                    VARIABLE_TO_INCREMENT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_S__TO_INCREMENT_BY__DEFAULT_____.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_S__TO_INCREMENT_BY__DEFAULT_____.toString().substring(
                    2,
                    NUMBER_S__TO_INCREMENT_BY__DEFAULT_____.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "+=",
      });
    },
    GETITEMCOLOR(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBERS_TO_MULTIPLY.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBERS_TO_MULTIPLY.toString().substring(
                    2,
                    NUMBERS_TO_MULTIPLY.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_TO_CHANGE.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUND_TO_CHANGE.toString().substring(
                    2,
                    SOUND_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SOUND_VOLUME.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SOUND_VOLUME.toString().substring(
                    2,
                    SOUND_VOLUME.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHANGE.toString().substring(
                    2,
                    LOCATION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: NEW_COORDINATE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NEW_COORDINATE.toString().substring(
                    2,
                    NEW_COORDINATE.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SHIFT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SHIFT.toString().substring(
                    2,
                    LOCATION_TO_SHIFT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TARGET_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: TARGET_LOCATION.toString().substring(
                    2,
                    TARGET_LOCATION.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SHIFT_DISTANCE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SHIFT_DISTANCE.toString().substring(
                    2,
                    SHIFT_DISTANCE.length
                  ),
                },
              },
              slot: 3,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION.toString().startsWith("v_") ? "var" : "POTION",
                data: { name: POTION.toString().substring(2, POTION.length) },
              },
              slot: 1,
            },
          ],
        },
        action: "GetPotionType",
      });
    },
    SETITEMNAME(VARIABLE_TO_SET, ITEM, ITEM_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ITEM_NAME.toString().substring(2, ITEM_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_MEASURE.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_MEASURE.toString().substring(
                    2,
                    LIST_TO_MEASURE.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NOISE_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NOISE_LOCATION.toString().substring(
                    2,
                    NOISE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: FREQUENCY__SCALE_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: FREQUENCY__SCALE_.toString().substring(
                    2,
                    FREQUENCY__SCALE_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: OCTAVES__PERLIN_LAYERS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: OCTAVES__PERLIN_LAYERS_.toString().substring(
                    2,
                    OCTAVES__PERLIN_LAYERS_.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: OCTAVE_FREQUENCY_GAIN.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: OCTAVE_FREQUENCY_GAIN.toString().substring(
                    2,
                    OCTAVE_FREQUENCY_GAIN.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: OCTAVE_AMPLITUDE_GAIN.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: OCTAVE_AMPLITUDE_GAIN.toString().substring(
                    2,
                    OCTAVE_AMPLITUDE_GAIN.length
                  ),
                },
              },
              slot: 5,
            },
            {
              item: {
                id: GENERATION_SEED.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: GENERATION_SEED.toString().substring(
                    2,
                    GENERATION_SEED.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SHIFT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SHIFT.toString().substring(
                    2,
                    LOCATION_TO_SHIFT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SHIFT_DISTANCE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SHIFT_DISTANCE.toString().substring(
                    2,
                    SHIFT_DISTANCE.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NOISE_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NOISE_LOCATION.toString().substring(
                    2,
                    NOISE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CELL_FREQUENCY.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: CELL_FREQUENCY.toString().substring(
                    2,
                    CELL_FREQUENCY.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CELL_SCATTER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: CELL_SCATTER.toString().substring(
                    2,
                    CELL_SCATTER.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: GENERATION_SEED.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: GENERATION_SEED.toString().substring(
                    2,
                    GENERATION_SEED.length
                  ),
                },
              },
              slot: 4,
            },
          ],
        },
        action: "WorleyNoise",
      });
    },
    SETITEMCOLOR(VARIABLE_TO_SET, ITEM, COLOR_HEXADECIMAL) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: COLOR_HEXADECIMAL.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: COLOR_HEXADECIMAL.toString().substring(
                    2,
                    COLOR_HEXADECIMAL.length
                  ),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "SetItemColor",
      });
    },
    GETITEMLORE(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_TO_CHANGE.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: SOUND_TO_CHANGE.toString().substring(
                    2,
                    SOUND_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SOUND_PITCH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SOUND_PITCH.toString().substring(2, SOUND_PITCH.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: SOUND_NOTE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: SOUND_NOTE.toString().substring(2, SOUND_NOTE.length),
                },
              },
              slot: 5,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_REVERSE.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_REVERSE.toString().substring(
                    2,
                    LIST_TO_REVERSE.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_SORT.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: LIST_TO_SORT.toString().substring(
                    2,
                    LIST_TO_SORT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHANGE.toString().substring(
                    2,
                    LOCATION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TARGET_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: TARGET_LOCATION.toString().substring(
                    2,
                    TARGET_LOCATION.length
                  ),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "FaceLocation",
      });
    },
    SETITEMFLAGS(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TIME_TO_FORMAT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TIME_TO_FORMAT.toString().substring(
                    2,
                    TIME_TO_FORMAT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CUSTOM_FORMAT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_FORMAT.toString().substring(
                    2,
                    CUSTOM_FORMAT.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_TO_CHANGE.toString().substring(
                    2,
                    POTION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: DURATION__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: DURATION__TICKS_.toString().substring(
                    2,
                    DURATION__TICKS_.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ___MEAN_MIDPOINT_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ___MEAN_MIDPOINT_
                    .toString()
                    .substring(2, ___MEAN_MIDPOINT_.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ___STANDARD_DEVIATION_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ___STANDARD_DEVIATION_
                    .toString()
                    .substring(2, ___STANDARD_DEVIATION_.length),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_TO_CHANGE.toString().substring(
                    2,
                    POTION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: POTION_TYPE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: POTION_TYPE.toString().substring(2, POTION_TYPE.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_DUPLICATE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_DUPLICATE.toString().substring(
                    2,
                    TEXT_TO_DUPLICATE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TIMES_TO_DUPLICATE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: TIMES_TO_DUPLICATE.toString().substring(
                    2,
                    TIMES_TO_DUPLICATE.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_DECREMENT.toString().startsWith("v_")
                  ? "var"
                  : "var",
                data: {
                  name: VARIABLE_TO_DECREMENT.toString().substring(
                    2,
                    VARIABLE_TO_DECREMENT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_S__TO_DECREMENT_BY__DEFAULT_____.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_S__TO_DECREMENT_BY__DEFAULT_____.toString().substring(
                    2,
                    NUMBER_S__TO_DECREMENT_BY__DEFAULT_____.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "-=",
      });
    },
    GETITEMTAG(VARIABLE_TO_SET, ITEM, TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_LIST.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUE_LIST.toString().substring(2, VALUE_LIST.length),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "CreateList",
      });
    },
    SETITEMDURA(VARIABLE_TO_SET, ITEM, ITEM_DURABILITY) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_DURABILITY.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ITEM_DURABILITY.toString().substring(
                    2,
                    ITEM_DURABILITY.length
                  ),
                },
              },
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
              item: {
                id: LIST_TO_APPEND_TO.toString().startsWith("v_")
                  ? "var"
                  : "var",
                data: {
                  name: LIST_TO_APPEND_TO.toString().substring(
                    2,
                    LIST_TO_APPEND_TO.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_S__TO_APPEND.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_S__TO_APPEND.toString().substring(
                    2,
                    LIST_S__TO_APPEND.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "AppendList",
      });
    },
    SETBREAKABILITY(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: LIST_TO_TRIM.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: LIST_TO_TRIM.toString().substring(
                    2,
                    LIST_TO_TRIM.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: START_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: START_INDEX.toString().substring(2, START_INDEX.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: END_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: END_INDEX.toString().substring(2, END_INDEX.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_CHANGE.toString().substring(
                    2,
                    LOCATION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: NEW_X.toString().startsWith("v_") ? "var" : "num",
                data: { name: NEW_X.toString().substring(2, NEW_X.length) },
              },
              slot: 2,
            },
            {
              item: {
                id: NEW_Y.toString().startsWith("v_") ? "var" : "num",
                data: { name: NEW_Y.toString().substring(2, NEW_Y.length) },
              },
              slot: 3,
            },
            {
              item: {
                id: NEW_Z.toString().startsWith("v_") ? "var" : "num",
                data: { name: NEW_Z.toString().substring(2, NEW_Z.length) },
              },
              slot: 4,
            },
            {
              item: {
                id: NEW_PITCH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NEW_PITCH.toString().substring(2, NEW_PITCH.length),
                },
              },
              slot: 6,
            },
            {
              item: {
                id: NEW_YAW.toString().startsWith("v_") ? "var" : "num",
                data: { name: NEW_YAW.toString().substring(2, NEW_YAW.length) },
              },
              slot: 7,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_CONVERT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CONVERT.toString().substring(
                    2,
                    TEXT_TO_CONVERT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: EXPONENT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: EXPONENT.toString().substring(2, EXPONENT.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SHIFT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SHIFT.toString().substring(
                    2,
                    LOCATION_TO_SHIFT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: FORWARDS_CHANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: FORWARDS_CHANGE.toString().substring(
                    2,
                    FORWARDS_CHANGE.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: UPWARDS_CHANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: UPWARDS_CHANGE.toString().substring(
                    2,
                    UPWARDS_CHANGE.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: SIDEWAYS_CHANGE___L____R_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: SIDEWAYS_CHANGE___L____R_.toString().substring(
                    2,
                    SIDEWAYS_CHANGE___L____R_.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_SEARCH_IN.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_SEARCH_IN.toString().substring(
                    2,
                    LIST_TO_SEARCH_IN.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VALUE_TO_SEARCH.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUE_TO_SEARCH.toString().substring(
                    2,
                    VALUE_TO_SEARCH.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RED.toString().startsWith("v_") ? "var" : "num",
                data: { name: RED.toString().substring(2, RED.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: GREEN.toString().startsWith("v_") ? "var" : "num",
                data: { name: GREEN.toString().substring(2, GREEN.length) },
              },
              slot: 2,
            },
            {
              item: {
                id: BLUE.toString().startsWith("v_") ? "var" : "num",
                data: { name: BLUE.toString().substring(2, BLUE.length) },
              },
              slot: 3,
            },
            {
              item: {
                id: R__G__B_VALUES.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: R__G__B_VALUES.toString().substring(
                    2,
                    R__G__B_VALUES.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: LIST_TO_MODIFY.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: LIST_TO_MODIFY.toString().substring(
                    2,
                    LIST_TO_MODIFY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_INDEX.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LIST_INDEX.toString().substring(2, LIST_INDEX.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VALUE_TO_INSERT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUE_TO_INSERT.toString().substring(
                    2,
                    VALUE_TO_INSERT.length
                  ),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "InsertListIndex",
      });
    },
    SETCANDESTROY(VARIABLE_TO_SET, ITEM, BREAKABLE_BLOCKS) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: BREAKABLE_BLOCKS.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BREAKABLE_BLOCKS.toString().substring(
                    2,
                    BREAKABLE_BLOCKS.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_SPLIT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_SPLIT.toString().substring(
                    2,
                    TEXT_TO_SPLIT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SPLITTER_TEXT__DEFAULT_______.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: SPLITTER_TEXT__DEFAULT_______.toString().substring(
                    2,
                    SPLITTER_TEXT__DEFAULT_______.length
                  ),
                },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BOOK_ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: BOOK_ITEM.toString().substring(2, BOOK_ITEM.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: BOOK_PAGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: BOOK_PAGE.toString().substring(2, BOOK_PAGE.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: HUE__COLOR_CIRCLE________.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: HUE__COLOR_CIRCLE________.toString().substring(
                    2,
                    HUE__COLOR_CIRCLE________.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SATURATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SATURATION.toString().substring(2, SATURATION.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: LUMINOSITY.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LUMINOSITY.toString().substring(2, LUMINOSITY.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: H__S__L_VALUES.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: H__S__L_VALUES.toString().substring(
                    2,
                    H__S__L_VALUES.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: LIST_TO_MODIFY.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: LIST_TO_MODIFY.toString().substring(
                    2,
                    LIST_TO_MODIFY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: INDEX_OR_INDICES_TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: INDEX_OR_INDICES_TO_REMOVE.toString().substring(
                    2,
                    INDEX_OR_INDICES_TO_REMOVE.length
                  ),
                },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_INPUT.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_INPUT.toString().substring(
                    2,
                    NUMBER_INPUT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: BASE.toString().startsWith("v_") ? "var" : "num",
                data: { name: BASE.toString().substring(2, BASE.length) },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_RANDOMIZE.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_RANDOMIZE.toString().substring(
                    2,
                    LIST_TO_RANDOMIZE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "RandomizeList",
      });
    },
    SETITEMTAG(VARIABLE_TO_SET, ITEM, TAG_NAME, TAG_VALUE, TAG_VALUE_) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: TAG_VALUE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TAG_VALUE.toString().substring(2, TAG_VALUE.length),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: TAG_VALUE_.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_VALUE_.toString().substring(2, TAG_VALUE_.length),
                },
              },
              slot: 6,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_CLAMP.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_CLAMP.toString().substring(
                    2,
                    NUMBER_TO_CLAMP.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: MINIMUM.toString().startsWith("v_") ? "var" : "num",
                data: { name: MINIMUM.toString().substring(2, MINIMUM.length) },
              },
              slot: 2,
            },
            {
              item: {
                id: MAXIMUM.toString().startsWith("v_") ? "var" : "num",
                data: { name: MAXIMUM.toString().substring(2, MAXIMUM.length) },
              },
              slot: 3,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_ROUND.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_ROUND.toString().substring(
                    2,
                    NUMBER_TO_ROUND.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ROUND_MULTIPLE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ROUND_MULTIPLE.toString().substring(
                    2,
                    ROUND_MULTIPLE.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SOUND_TO_GET_PITCH_OR_NOTE_OF.toString().startsWith("v_")
                  ? "var"
                  : "snd",
                data: {
                  name: SOUND_TO_GET_PITCH_OR_NOTE_OF.toString().substring(
                    2,
                    SOUND_TO_GET_PITCH_OR_NOTE_OF.length
                  ),
                },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXTS_TO_JOIN.toString().startsWith("v_") ? "var" : "LIST",
                data: {
                  name: TEXTS_TO_JOIN.toString().substring(
                    2,
                    TEXTS_TO_JOIN.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: JOINING_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: JOINING_TEXT.toString().substring(
                    2,
                    JOINING_TEXT.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: FINAL_JOINING_TEXT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: FINAL_JOINING_TEXT.toString().substring(
                    2,
                    FINAL_JOINING_TEXT.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_TRANSLATE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_TRANSLATE.toString().substring(
                    2,
                    TEXT_TO_TRANSLATE.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: LIST_TO_MODIFY.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: LIST_TO_MODIFY.toString().substring(
                    2,
                    LIST_TO_MODIFY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VALUE_S__TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VALUE_S__TO_REMOVE.toString().substring(
                    2,
                    VALUE_S__TO_REMOVE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "RemoveListValue",
      });
    },
    GETITEMAMOUNT(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: POTION_TO_CHANGE.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_TO_CHANGE.toString().substring(
                    2,
                    POTION_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: AMPLIFIER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: AMPLIFIER.toString().substring(2, AMPLIFIER.length),
                },
              },
              slot: 2,
            },
          ],
        },
        action: "SetPotionAmp",
      });
    },
    GETITEMNAME(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
          ],
        },
        action: "GetItemName",
      });
    },
    GETITEMDURA(VARIABLE_TO_SET, ITEM) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
          ],
        },
        action: "GetItemDura",
      });
    },
    SETCANPLACEON(VARIABLE_TO_SET, ITEM, PLACEABLE_BLOCKS) {
      module.exports.blocks.push({
        id: "block",
        block: "set_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: { name: ITEM.toString().substring(2, ITEM.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: PLACEABLE_BLOCKS.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: PLACEABLE_BLOCKS.toString().substring(
                    2,
                    PLACEABLE_BLOCKS.length
                  ),
                },
              },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: COLOR.toString().startsWith("v_") ? "var" : "txt",
                data: { name: COLOR.toString().substring(2, COLOR.length) },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_CHANGE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CHANGE.toString().substring(
                    2,
                    TEXT_TO_CHANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TEXT_PART_TO_REPLACE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_PART_TO_REPLACE.toString().substring(
                    2,
                    TEXT_PART_TO_REPLACE.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: REPLACEMENT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: REPLACEMENT.toString().substring(2, REPLACEMENT.length),
                },
              },
              slot: 3,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_MEASURE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_MEASURE.toString().substring(
                    2,
                    TEXT_TO_MEASURE.length
                  ),
                },
              },
              slot: 1,
            },
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
                id: SPAWN_EGG__PROJECTILE__OR_VEHICLE.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "ENTITY_TYPE",
                data: {
                  name: SPAWN_EGG__PROJECTILE__OR_VEHICLE.toString().substring(
                    2,
                    SPAWN_EGG__PROJECTILE__OR_VEHICLE.length
                  ),
                },
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
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TAG_VALUE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TAG_VALUE.toString().substring(2, TAG_VALUE.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: TAG_VALUE_.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_VALUE_.toString().substring(2, TAG_VALUE_.length),
                },
              },
              slot: 4,
            },
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
              item: {
                id: CENTER_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: CENTER_LOCATION.toString().substring(
                    2,
                    CENTER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RANGE_FROM_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: RANGE_FROM_LOCATION.toString().substring(
                    2,
                    RANGE_FROM_LOCATION.length
                  ),
                },
              },
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
                id: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "txt",
                data: {
                  name: ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.toString().substring(
                    2,
                    ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO.length
                  ),
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
              item: {
                id: BLOCK_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_S__TO_CHECK_FOR.toString().substring(
                    2,
                    BLOCK_S__TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_OF_BLOCK_S__TO_CHECK_FOR.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_OF_BLOCK_S__TO_CHECK_FOR.toString().substring(
                    2,
                    LOCATION_OF_BLOCK_S__TO_CHECK_FOR.length
                  ),
                },
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
              item: {
                id: NAME_TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_TO_CHECK_FOR.toString().substring(
                    2,
                    NAME_TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: DAMAGE_TO_INFLICT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: DAMAGE_TO_INFLICT.toString().substring(
                    2,
                    DAMAGE_TO_INFLICT.length
                  ),
                },
              },
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
                id: LOCATIONS_TO_TELEPORT_TO.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATIONS_TO_TELEPORT_TO.toString().substring(
                    2,
                    LOCATIONS_TO_TELEPORT_TO.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TELEPORT_DELAY__TICKS__DEFAULT______.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: TELEPORT_DELAY__TICKS__DEFAULT______.toString().substring(
                    2,
                    TELEPORT_DELAY__TICKS__DEFAULT______.length
                  ),
                },
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
            {
              item: {
                id: AMOUNT_TO_HEAL.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: AMOUNT_TO_HEAL.toString().substring(
                    2,
                    AMOUNT_TO_HEAL.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: UUID_OF_SHOOTER.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: UUID_OF_SHOOTER.toString().substring(
                    2,
                    UUID_OF_SHOOTER.length
                  ),
                },
              },
              slot: 0,
            },
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
          items: [
            {
              item: {
                id: OWNER_UUID.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: OWNER_UUID.toString().substring(2, OWNER_UUID.length),
                },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: NEW_MAXIMUM_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NEW_MAXIMUM_HEALTH.toString().substring(
                    2,
                    NEW_MAXIMUM_HEALTH.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: AGE.toString().startsWith("v_") ? "var" : "num",
                data: { name: AGE.toString().substring(2, AGE.length) },
              },
              slot: 0,
            },
          ],
        },
        action: "SetAge",
      });
    },
    ENDCRYSTALBEAM(TARGET) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: {
                id: TARGET.toString().startsWith("v_") ? "var" : "loc",
                data: { name: TARGET.toString().substring(2, TARGET.length) },
              },
              slot: 0,
            },
          ],
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
          items: [
            {
              item: {
                id: DELAY.toString().startsWith("v_") ? "var" : "num",
                data: { name: DELAY.toString().substring(2, DELAY.length) },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: TARGET_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TARGET_NAME.toString().substring(2, TARGET_NAME.length),
                },
              },
              slot: 0,
            },
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
          items: [
            {
              item: {
                id: POWER.toString().startsWith("v_") ? "var" : "num",
                data: { name: POWER.toString().substring(2, POWER.length) },
              },
              slot: 0,
            },
          ],
        },
        action: "SetCreeperPower",
      });
    },
    REMOVECUSTOMTAG(TAG_NAME) {
      module.exports.blocks.push({
        id: "block",
        block: "entity_action",
        args: {
          items: [
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 0,
            },
          ],
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
          items: [
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: ABSORPTION_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ABSORPTION_HEALTH.toString().substring(
                    2,
                    ABSORPTION_HEALTH.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: NEW_RADIUS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NEW_RADIUS.toString().substring(2, NEW_RADIUS.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RADIUS_DECREASE_IN_BLOCKS_PER_SECOND.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: RADIUS_DECREASE_IN_BLOCKS_PER_SECOND.toString().substring(
                    2,
                    RADIUS_DECREASE_IN_BLOCKS_PER_SECOND.length
                  ),
                },
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
          items: [
            {
              item: {
                id: NEW_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NEW_NAME.toString().substring(2, NEW_NAME.length),
                },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: POTION_EFFECTS.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_EFFECTS.toString().substring(
                    2,
                    POTION_EFFECTS.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: X_ROTATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: X_ROTATION.toString().substring(2, X_ROTATION.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: Y_ROTATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: Y_ROTATION.toString().substring(2, Y_ROTATION.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: Z_ROTATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: Z_ROTATION.toString().substring(2, Z_ROTATION.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: PITCH______TO____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: PITCH______TO____.toString().substring(
                    2,
                    PITCH______TO____.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: YAW_______TO_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: YAW_______TO_____.toString().substring(
                    2,
                    YAW_______TO_____.length
                  ),
                },
              },
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
                id: NAME_OR_UUID_OF_TARGET_TO_RIDE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OR_UUID_OF_TARGET_TO_RIDE.toString().substring(
                    2,
                    NAME_OR_UUID_OF_TARGET_TO_RIDE.length
                  ),
                },
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
            {
              item: {
                id: BLOCK_TO_HOLD.toString().startsWith("v_") ? "var" : "BLOCK",
                data: {
                  name: BLOCK_TO_HOLD.toString().substring(
                    2,
                    BLOCK_TO_HOLD.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: NEW_POSITION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: NEW_POSITION.toString().substring(
                    2,
                    NEW_POSITION.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: LAUNCH_DESTINATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LAUNCH_DESTINATION.toString().substring(
                    2,
                    LAUNCH_DESTINATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: ARMOR_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ARMOR_TO_SET.toString().substring(
                    2,
                    ARMOR_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 1,
            },
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
          items: [
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: PROJECTILE_TO_LAUNCH.toString().startsWith("v_")
                  ? "var"
                  : "PROJECTILE",
                data: {
                  name: PROJECTILE_TO_LAUNCH.toString().substring(
                    2,
                    PROJECTILE_TO_LAUNCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LAUNCH_POINT.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LAUNCH_POINT.toString().substring(
                    2,
                    LAUNCH_POINT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PROJECTILE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: PROJECTILE_NAME.toString().substring(
                    2,
                    PROJECTILE_NAME.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPEED.toString().startsWith("v_") ? "var" : "num",
                data: { name: SPEED.toString().substring(2, SPEED.length) },
              },
              slot: 3,
            },
            {
              item: {
                id: INACCURACY__DEFAULT_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: INACCURACY__DEFAULT_____.toString().substring(
                    2,
                    INACCURACY__DEFAULT_____.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: LAUNCH_TRAIL.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: LAUNCH_TRAIL.toString().substring(
                    2,
                    LAUNCH_TRAIL.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: PROGRESS_PERCENTAGE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: PROGRESS_PERCENTAGE.toString().substring(
                    2,
                    PROGRESS_PERCENTAGE.length
                  ),
                },
              },
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
          items: [
            {
              item: {
                id: FUSE_TICKS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: FUSE_TICKS.toString().substring(2, FUSE_TICKS.length),
                },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: POTION_EFFECTS.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_EFFECTS.toString().substring(
                    2,
                    POTION_EFFECTS.length
                  ),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: NAME_OF_OWNER.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NAME_OF_OWNER.toString().substring(
                    2,
                    NAME_OF_OWNER.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: REMAINING_HEALTH.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: REMAINING_HEALTH.toString().substring(
                    2,
                    REMAINING_HEALTH.length
                  ),
                },
              },
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
              item: {
                id: MOB_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "SPAWN_EGG",
                data: {
                  name: MOB_DISGUISE.toString().substring(
                    2,
                    MOB_DISGUISE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DISGUISE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DISGUISE_NAME.toString().substring(
                    2,
                    DISGUISE_NAME.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: BLOCK_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_DISGUISE.toString().substring(
                    2,
                    BLOCK_DISGUISE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NAME_OF_DISGUISE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OF_DISGUISE.toString().substring(
                    2,
                    NAME_OF_DISGUISE.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: BLOCK_TO_SHOW.toString().startsWith("v_") ? "var" : "BLOCK",
                data: {
                  name: BLOCK_TO_SHOW.toString().substring(
                    2,
                    BLOCK_TO_SHOW.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCK_OFFSET.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: BLOCK_OFFSET.toString().substring(
                    2,
                    BLOCK_OFFSET.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: LAUNCH_POWER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LAUNCH_POWER.toString().substring(
                    2,
                    LAUNCH_POWER.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: FALL_DISTANCE__BLOCKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: FALL_DISTANCE__BLOCKS_.toString().substring(
                    2,
                    FALL_DISTANCE__BLOCKS_.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_SET.toString().substring(2, ITEM_TO_SET.length),
                },
              },
              slot: 0,
            },
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
            {
              item: {
                id: LEAD_HOLDER_UUID.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: LEAD_HOLDER_UUID.toString().substring(
                    2,
                    LEAD_HOLDER_UUID.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LEAD_KNOT_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LEAD_KNOT_LOCATION.toString().substring(
                    2,
                    LEAD_KNOT_LOCATION.length
                  ),
                },
              },
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
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TAG_VALUE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TAG_VALUE.toString().substring(2, TAG_VALUE.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: TAG_VALUE_.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_VALUE_.toString().substring(2, TAG_VALUE_.length),
                },
              },
              slot: 4,
            },
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
          items: [
            {
              item: {
                id: SIZE.toString().startsWith("v_") ? "var" : "num",
                data: { name: SIZE.toString().substring(2, SIZE.length) },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: DISGUISE_PLAYER_NAME.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: DISGUISE_PLAYER_NAME.toString().substring(
                    2,
                    DISGUISE_PLAYER_NAME.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DISGUISE_SKIN.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: DISGUISE_SKIN.toString().substring(
                    2,
                    DISGUISE_SKIN.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: TARGET_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: TARGET_LOCATION.toString().substring(
                    2,
                    TARGET_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: WALK_SPEED.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: WALK_SPEED.toString().substring(2, WALK_SPEED.length),
                },
              },
              slot: 1,
            },
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
          items: [
            {
              item: {
                id: EXPERIENCE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: EXPERIENCE.toString().substring(2, EXPERIENCE.length),
                },
              },
              slot: 0,
            },
          ],
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
            {
              item: {
                id: DISPLAY_ITEM.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: DISPLAY_ITEM.toString().substring(
                    2,
                    DISPLAY_ITEM.length
                  ),
                },
              },
              slot: 0,
            },
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
          items: [
            {
              item: {
                id: STRENGTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: STRENGTH.toString().substring(2, STRENGTH.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: NUMBER_TO_CHECK.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_CHECK.toString().substring(
                    2,
                    NUMBER_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_TO_COMPARE_TO.toString().substring(
                    2,
                    NUMBER_TO_COMPARE_TO.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_TO_CHECK.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_CHECK.toString().substring(
                    2,
                    ITEM_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TAG_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_NAME.toString().substring(2, TAG_NAME.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: TAG_VALUE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: TAG_VALUE.toString().substring(2, TAG_VALUE.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: TAG_VALUE_.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TAG_VALUE.toString().substring(2, TAG_VALUE_.length),
                },
              },
              slot: 5,
            },
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
            {
              item: {
                id: TEXT_TO_CHECK.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CHECK.toString().substring(
                    2,
                    TEXT_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_START_WITH.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_START_WITH.toString().substring(
                    2,
                    TEXT_TO_START_WITH.length
                  ),
                },
              },
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
            {
              item: {
                id: LIST_TO_CHECK_IN.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_CHECK_IN.toString().substring(
                    2,
                    LIST_TO_CHECK_IN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: INDEX_TO_CHECK_AT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: INDEX_TO_CHECK_AT.toString().substring(
                    2,
                    INDEX_TO_CHECK_AT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VARIABLE_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLE_TO_COMPARE_TO.toString().substring(
                    2,
                    VARIABLE_TO_COMPARE_TO.length
                  ),
                },
              },
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
              item: {
                id: VALUE_TO_CHECK.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VALUE_TO_CHECK.toString().substring(
                    2,
                    VALUE_TO_CHECK.length
                  ),
                },
              },
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
            {
              item: {
                id: CHECK_VALUE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CHECK_VALUE.toString().substring(2, CHECK_VALUE.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CENTER_VALUE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CENTER_VALUE.toString().substring(
                    2,
                    CENTER_VALUE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: RANGE_VALUE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: RANGE_VALUE.toString().substring(2, RANGE_VALUE.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: VARIABLE_TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "var",
                data: {
                  name: VARIABLE_TO_CHECK.toString().substring(
                    2,
                    VARIABLE_TO_CHECK.length
                  ),
                },
              },
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
            {
              item: {
                id: ITEM_TO_CHECK.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_CHECK.toString().substring(
                    2,
                    ITEM_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_COMPARE_TO.toString().substring(
                    2,
                    ITEM_S__TO_COMPARE_TO.length
                  ),
                },
              },
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
            {
              item: {
                id: LIST_TO_CHECK_IN.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_CHECK_IN.toString().substring(
                    2,
                    LIST_TO_CHECK_IN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VARIABLE_TO_FIND.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLE_TO_FIND.toString().substring(
                    2,
                    VARIABLE_TO_FIND.length
                  ),
                },
              },
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
            {
              item: {
                id: CHECK_VALUE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CHECK_VALUE.toString().substring(2, CHECK_VALUE.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: MINIMUM_VALUE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MINIMUM_VALUE.toString().substring(
                    2,
                    MINIMUM_VALUE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: MAXIMUM_VALUE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MAXIMUM_VALUE.toString().substring(
                    2,
                    MAXIMUM_VALUE.length
                  ),
                },
              },
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
            {
              item: {
                id: TEXT_TO_CHECK.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CHECK.toString().substring(
                    2,
                    TEXT_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_CHECK_FOR.toString().substring(
                    2,
                    TEXT_TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: TEXT_OR_EXPRESSION_TO_MATCH.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_OR_EXPRESSION_TO_MATCH.toString().substring(
                    2,
                    TEXT_OR_EXPRESSION_TO_MATCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_COMPARE.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_COMPARE.toString().substring(
                    2,
                    TEXT_TO_COMPARE.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: " TextMatches ",
      });
    },
    neq(VARIABLE_TO_CHECK, VARIABLES_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLE_TO_CHECK.toString().substring(
                    2,
                    VARIABLE_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VARIABLES_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLES_TO_COMPARE_TO.toString().substring(
                    2,
                    VARIABLES_TO_COMPARE_TO.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "!=",
      });
    },
    _(NUMBER_TO_CHECK, NUMBER_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: {
                id: NUMBER_TO_CHECK.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_CHECK.toString().substring(
                    2,
                    NUMBER_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_TO_COMPARE_TO.toString().substring(
                    2,
                    NUMBER_TO_COMPARE_TO.length
                  ),
                },
              },
              slot: 1,
            },
          ],
        },
        action: "<",
      });
    },
    eq(VARIABLE_TO_CHECK, VARIABLES_TO_COMPARE_TO) {
      module.exports.blocks.push({
        id: "block",
        block: "if_var",
        args: {
          items: [
            {
              item: {
                id: VARIABLE_TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLE_TO_CHECK.toString().substring(
                    2,
                    VARIABLE_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VARIABLES_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: VARIABLES_TO_COMPARE_TO.toString().substring(
                    2,
                    VARIABLES_TO_COMPARE_TO.length
                  ),
                },
              },
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
              item: {
                id: NUMBER_TO_CHECK.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_CHECK.toString().substring(
                    2,
                    NUMBER_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_TO_COMPARE_TO.toString().substring(
                    2,
                    NUMBER_TO_COMPARE_TO.length
                  ),
                },
              },
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
            {
              item: {
                id: TEXT_TO_CHECK.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: TEXT_TO_CHECK.toString().substring(
                    2,
                    TEXT_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_END_WITH.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_END_WITH.toString().substring(
                    2,
                    TEXT_TO_END_WITH.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: NUMBER_TO_CHECK.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_TO_CHECK.toString().substring(
                    2,
                    NUMBER_TO_CHECK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_TO_COMPARE_TO.toString().substring(
                    2,
                    NUMBER_TO_COMPARE_TO.length
                  ),
                },
              },
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
                id: NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT.toString().substring(
                    2,
                    NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT.length
                  ),
                },
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
                id: USERNAME_OF_PLAYER_TO_SELECT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: USERNAME_OF_PLAYER_TO_SELECT.toString().substring(
                    2,
                    USERNAME_OF_PLAYER_TO_SELECT.length
                  ),
                },
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
                id: NUMBER_OF_OBJECTS_TO_SELECT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_OF_OBJECTS_TO_SELECT.toString().substring(
                    2,
                    NUMBER_OF_OBJECTS_TO_SELECT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_S__TO_COMPARE_TO.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_S__TO_COMPARE_TO.toString().substring(
                    2,
                    LOCATION_S__TO_COMPARE_TO.length
                  ),
                },
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
                id: NUMBER_OF_OBJECTS_TO_SELECT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_OF_OBJECTS_TO_SELECT.toString().substring(
                    2,
                    NUMBER_OF_OBJECTS_TO_SELECT.length
                  ),
                },
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
                id: NAME_OF_MOB_OR_MOBS_TO_SELECT.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: NAME_OF_MOB_OR_MOBS_TO_SELECT.toString().substring(
                    2,
                    NAME_OF_MOB_OR_MOBS_TO_SELECT.length
                  ),
                },
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
              item: {
                id: FURNACE_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: FURNACE_LOCATION.toString().substring(
                    2,
                    FURNACE_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TICKS.toString().startsWith("v_") ? "var" : "num",
                data: { name: TICKS.toString().substring(2, TICKS.length) },
              },
              slot: 1,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CIRCLE_CENTER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CIRCLE_CENTER_LOCATION.toString().substring(
                    2,
                    CIRCLE_CENTER_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_FILL_WITH.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_FILL_WITH.toString().substring(
                    2,
                    ITEM_S__TO_FILL_WITH.length
                  ),
                },
              },
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
              item: {
                id: BLOCK_S__TO_BREAK.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: BLOCK_S__TO_BREAK.toString().substring(
                    2,
                    BLOCK_S__TO_BREAK.length
                  ),
                },
              },
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
              item: {
                id: BLOCK_S__TO_BONE_MEAL.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: BLOCK_S__TO_BONE_MEAL.toString().substring(
                    2,
                    BLOCK_S__TO_BONE_MEAL.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_OF_BONE_MEAL_APPLICATIONS.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NUMBER_OF_BONE_MEAL_APPLICATIONS.toString().substring(
                    2,
                    NUMBER_OF_BONE_MEAL_APPLICATIONS.length
                  ),
                },
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
              item: {
                id: BLOCK_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: BLOCK_LOCATION.toString().substring(
                    2,
                    BLOCK_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCK_TYPE.toString().startsWith("v_") ? "var" : "BLOCK",
                data: {
                  name: BLOCK_TYPE.toString().substring(2, BLOCK_TYPE.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: BLOCK_METADATA.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK_TAG",
                data: {
                  name: BLOCK_METADATA.toString().substring(
                    2,
                    BLOCK_METADATA.length
                  ),
                },
              },
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
            {
              item: {
                id: WEBHOOK_URL.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: WEBHOOK_URL.toString().substring(2, WEBHOOK_URL.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: MESSAGE_CONTENT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MESSAGE_CONTENT.toString().substring(
                    2,
                    MESSAGE_CONTENT.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: SIGN_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: SIGN_LOCATION.toString().substring(
                    2,
                    SIGN_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LINE_NUMBER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: LINE_NUMBER.toString().substring(2, LINE_NUMBER.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: NEW_LINE_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NEW_LINE_TEXT.toString().substring(
                    2,
                    NEW_LINE_TEXT.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: BLOCK_S__TO_TICK.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: BLOCK_S__TO_TICK.toString().substring(
                    2,
                    BLOCK_S__TO_TICK.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NUMBER_OF_TICKS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: NUMBER_OF_TICKS.toString().substring(
                    2,
                    NUMBER_OF_TICKS.length
                  ),
                },
              },
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
            {
              item: {
                id: URL_TO_REQUEST.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: URL_TO_REQUEST.toString().substring(
                    2,
                    URL_TO_REQUEST.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CONTENT_BODY.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CONTENT_BODY.toString().substring(
                    2,
                    CONTENT_BODY.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SPIRAL_BASE_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: SPIRAL_BASE_LOCATION.toString().substring(
                    2,
                    SPIRAL_BASE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SPIRAL_LENGTH__DEFAULT______BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_LENGTH__DEFAULT______BLOCKS_.toString().substring(
                    2,
                    SPIRAL_LENGTH__DEFAULT______BLOCKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: SPIRAL_PARTICLES__DEFAULT______PARTICLES_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_PARTICLES__DEFAULT______PARTICLES_.toString().substring(
                    2,
                    SPIRAL_PARTICLES__DEFAULT______PARTICLES_.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.toString().substring(
                    2,
                    SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.length
                  ),
                },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_REPLACE.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_REPLACE.toString().substring(
                    2,
                    ITEM_S__TO_REPLACE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_TO_REPLACE_WITH.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_TO_REPLACE_WITH.toString().substring(
                    2,
                    ITEM_TO_REPLACE_WITH.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: AMOUNT_OF_ITEMS_TO_REPLACE.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: AMOUNT_OF_ITEMS_TO_REPLACE.toString().substring(
                    2,
                    AMOUNT_OF_ITEMS_TO_REPLACE.length
                  ),
                },
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
              item: {
                id: PROJECTILE_TO_LAUNCH.toString().startsWith("v_")
                  ? "var"
                  : "PROJECTILE",
                data: {
                  name: PROJECTILE_TO_LAUNCH.toString().substring(
                    2,
                    PROJECTILE_TO_LAUNCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: PROJECTILE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: PROJECTILE_NAME.toString().substring(
                    2,
                    PROJECTILE_NAME.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LAUNCH_TRAIL.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: LAUNCH_TRAIL.toString().substring(
                    2,
                    LAUNCH_TRAIL.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: EXPLOSION_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: EXPLOSION_LOCATION.toString().substring(
                    2,
                    EXPLOSION_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: EXPLOSION_POWER_______DEFAULT_____.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: EXPLOSION_POWER_______DEFAULT_____.toString().substring(
                    2,
                    EXPLOSION_POWER_______DEFAULT_____.length
                  ),
                },
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
            {
              item: {
                id: MOB_TYPE.toString().startsWith("v_") ? "var" : "SPAWN_EGG",
                data: {
                  name: MOB_TYPE.toString().substring(2, MOB_TYPE.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: MOB_HEALTH.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: MOB_HEALTH.toString().substring(2, MOB_HEALTH.length),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: MOB_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: MOB_NAME.toString().substring(2, MOB_NAME.length),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: POTION_EFFECT_S_.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: POTION_EFFECT_S_.toString().substring(
                    2,
                    POTION_EFFECT_S_.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: MOB_EQUIPMENT.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: MOB_EQUIPMENT.toString().substring(
                    2,
                    MOB_EQUIPMENT.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CIRCLE_CENTER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CIRCLE_CENTER_LOCATION.toString().substring(
                    2,
                    CIRCLE_CENTER_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    CIRCLE_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: ANIMATION_DURATION__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ANIMATION_DURATION__TICKS_.toString().substring(
                    2,
                    ANIMATION_DURATION__TICKS_.length
                  ),
                },
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
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: DESTINATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: DESTINATION.toString().substring(2, DESTINATION.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LIFESPAN__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: LIFESPAN__TICKS_.toString().substring(
                    2,
                    LIFESPAN__TICKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CUSTOM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_NAME.toString().substring(2, CUSTOM_NAME.length),
                },
              },
              slot: 3,
            },
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
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: EFFECT_S__TO_APPLY.toString().startsWith("v_")
                  ? "var"
                  : "POTION",
                data: {
                  name: EFFECT_S__TO_APPLY.toString().substring(
                    2,
                    EFFECT_S__TO_APPLY.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CLOUD_RADIUS__BLOCKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: CLOUD_RADIUS__BLOCKS_.toString().substring(
                    2,
                    CLOUD_RADIUS__BLOCKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CLOUD_DURATION__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: CLOUD_DURATION__TICKS_.toString().substring(
                    2,
                    CLOUD_DURATION__TICKS_.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: CUSTOM_PARTICLE.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: CUSTOM_PARTICLE.toString().substring(
                    2,
                    CUSTOM_PARTICLE.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: CUSTOM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_NAME.toString().substring(2, CUSTOM_NAME.length),
                },
              },
              slot: 5,
            },
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
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCK_DATA.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK_TAG",
                data: {
                  name: BLOCK_DATA.toString().substring(2, BLOCK_DATA.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CLUSTER_CENTER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CLUSTER_CENTER_LOCATION.toString().substring(
                    2,
                    CLUSTER_CENTER_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: CLUSTER_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: CLUSTER_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    CLUSTER_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____.toString().substring(
                    2,
                    CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____.length
                  ),
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LINE_START_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LINE_START_LOCATION.toString().substring(
                    2,
                    LINE_START_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LINE_END_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LINE_END_LOCATION.toString().substring(
                    2,
                    LINE_END_LOCATION.length
                  ),
                },
              },
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
              item: {
                id: PROJECTILE_TO_LAUNCH.toString().startsWith("v_")
                  ? "var"
                  : "PROJECTILE",
                data: {
                  name: PROJECTILE_TO_LAUNCH.toString().substring(
                    2,
                    PROJECTILE_TO_LAUNCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LAUNCH_POINT.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: LAUNCH_POINT.toString().substring(
                    2,
                    LAUNCH_POINT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: PROJECTILE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: PROJECTILE_NAME.toString().substring(
                    2,
                    PROJECTILE_NAME.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPEED.toString().startsWith("v_") ? "var" : "num",
                data: { name: SPEED.toString().substring(2, SPEED.length) },
              },
              slot: 3,
            },
            {
              item: {
                id: INACCURACY__DEFAULT_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: INACCURACY__DEFAULT_____.toString().substring(
                    2,
                    INACCURACY__DEFAULT_____.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: LAUNCH_TRAIL.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: LAUNCH_TRAIL.toString().substring(
                    2,
                    LAUNCH_TRAIL.length
                  ),
                },
              },
              slot: 5,
            },
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
              item: {
                id: FIREWORK_TO_LAUNCH.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: FIREWORK_TO_LAUNCH.toString().substring(
                    2,
                    FIREWORK_TO_LAUNCH.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: FIREWORK_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: FIREWORK_NAME.toString().substring(
                    2,
                    FIREWORK_NAME.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: NEW_DAMAGE_AMOUNT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NEW_DAMAGE_AMOUNT.toString().substring(
                    2,
                    NEW_DAMAGE_AMOUNT.length
                  ),
                },
              },
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
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: GROWTH_STAGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: GROWTH_STAGE.toString().substring(
                    2,
                    GROWTH_STAGE.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CONTAINER_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CONTAINER_NAME.toString().substring(
                    2,
                    CONTAINER_NAME.length
                  ),
                },
              },
              slot: 1,
            },
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
            {
              item: {
                id: ITEM_S__TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_SPAWN.toString().substring(
                    2,
                    ITEM_S__TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ITEM_NAME.toString().substring(2, ITEM_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: HEAD_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: HEAD_LOCATION.toString().substring(
                    2,
                    HEAD_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: HEAD_TO_SET_TO.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: HEAD_TO_SET_TO.toString().substring(
                    2,
                    HEAD_TO_SET_TO.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: HEAD_OWNER.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: HEAD_OWNER.toString().substring(2, HEAD_OWNER.length),
                },
              },
              slot: 4,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: RAY_ORIGIN.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: RAY_ORIGIN.toString().substring(2, RAY_ORIGIN.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: RAY_LENGTH__DEFAULT______BLOCKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: RAY_LENGTH__DEFAULT______BLOCKS_.toString().substring(
                    2,
                    RAY_LENGTH__DEFAULT______BLOCKS_.length
                  ),
                },
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
                id: LOCATION_OF_HOLOGRAM_TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_OF_HOLOGRAM_TO_REMOVE.toString().substring(
                    2,
                    LOCATION_OF_HOLOGRAM_TO_REMOVE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_OF_HOLOGRAM_TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_OF_HOLOGRAM_TO_REMOVE.toString().substring(
                    2,
                    TEXT_OF_HOLOGRAM_TO_REMOVE.length
                  ),
                },
              },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_PLAY_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_PLAY_AT.toString().substring(
                    2,
                    LOCATION_TO_PLAY_AT.length
                  ),
                },
              },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_REMOVE.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_REMOVE.toString().substring(
                    2,
                    ITEM_S__TO_REMOVE.length
                  ),
                },
              },
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
              item: {
                id: ITEMS_TO_PICK_FROM.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEMS_TO_PICK_FROM.toString().substring(
                    2,
                    ITEMS_TO_PICK_FROM.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ITEM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ITEM_NAME.toString().substring(2, ITEM_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: FIREWORK_EXPLOSION_TO_PLAY.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: FIREWORK_EXPLOSION_TO_PLAY.toString().substring(
                    2,
                    FIREWORK_EXPLOSION_TO_PLAY.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_S__TO_SET.toString().substring(
                    2,
                    ITEM_S__TO_SET.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_TO_SET.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: ITEM_TO_SET.toString().substring(2, ITEM_TO_SET.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SLOT_TO_SET.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SLOT_TO_SET.toString().substring(2, SLOT_TO_SET.length),
                },
              },
              slot: 2,
            },
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
            {
              item: {
                id: TNT_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: TNT_LOCATION.toString().substring(
                    2,
                    TNT_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TNT_POWER_______DEFAULT_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: TNT_POWER_______DEFAULT_____.toString().substring(
                    2,
                    TNT_POWER_______DEFAULT_____.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: FUSE_DURATION__TICKS__DEFAULT______.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: FUSE_DURATION__TICKS__DEFAULT______.toString().substring(
                    2,
                    FUSE_DURATION__TICKS__DEFAULT______.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: CUSTOM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_NAME.toString().substring(2, CUSTOM_NAME.length),
                },
              },
              slot: 3,
            },
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
              item: {
                id: ARMOR_STAND_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: ARMOR_STAND_LOCATION.toString().substring(
                    2,
                    ARMOR_STAND_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: NAME.toString().startsWith("v_") ? "var" : "txt",
                data: { name: NAME.toString().substring(2, NAME.length) },
              },
              slot: 1,
            },
            {
              item: {
                id: EQUIPMENT.toString().startsWith("v_") ? "var" : "ITEM",
                data: {
                  name: EQUIPMENT.toString().substring(2, EQUIPMENT.length),
                },
              },
              slot: 2,
            },
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
            {
              item: {
                id: ORB_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: ORB_LOCATION.toString().substring(
                    2,
                    ORB_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: EXPERIENCE_AMOUNT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: EXPERIENCE_AMOUNT.toString().substring(
                    2,
                    EXPERIENCE_AMOUNT.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: ORB_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: ORB_NAME.toString().substring(2, ORB_NAME.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: NEW_HEALING_AMOUNT.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: NEW_HEALING_AMOUNT.toString().substring(
                    2,
                    NEW_HEALING_AMOUNT.length
                  ),
                },
              },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: PATH_LOCATIONS.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: PATH_LOCATIONS.toString().substring(
                    2,
                    PATH_LOCATIONS.length
                  ),
                },
              },
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
              item: {
                id: TREE_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: TREE_LOCATION.toString().substring(
                    2,
                    TREE_LOCATION.length
                  ),
                },
              },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
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
                id: OBJECTIVE_NAME_____CHARACTERS_OR_LESS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "txt",
                data: {
                  name: OBJECTIVE_NAME_____CHARACTERS_OR_LESS_.toString().substring(
                    2,
                    OBJECTIVE_NAME_____CHARACTERS_OR_LESS_.length
                  ),
                },
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
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CUSTOM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_NAME.toString().substring(2, CUSTOM_NAME.length),
                },
              },
              slot: 1,
            },
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
              item: {
                id: LOCATION_TO_SPAWN_AT.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION_TO_SPAWN_AT.toString().substring(
                    2,
                    LOCATION_TO_SPAWN_AT.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CUSTOM_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: CUSTOM_NAME.toString().substring(2, CUSTOM_NAME.length),
                },
              },
              slot: 1,
            },
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
          items: [
            {
              item: {
                id: NEW_SOUND.toString().startsWith("v_") ? "var" : "snd",
                data: {
                  name: NEW_SOUND.toString().substring(2, NEW_SOUND.length),
                },
              },
              slot: 0,
            },
          ],
        },
        action: "SetEventSound",
      });
    },
    SETEVENTXP(EXPERIENCE) {
      module.exports.blocks.push({
        id: "block",
        block: "game_action",
        args: {
          items: [
            {
              item: {
                id: EXPERIENCE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: EXPERIENCE.toString().substring(2, EXPERIENCE.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CONTAINER_LOCK_KEY.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: CONTAINER_LOCK_KEY.toString().substring(
                    2,
                    CONTAINER_LOCK_KEY.length
                  ),
                },
              },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SPIRAL_BASE_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: SPIRAL_BASE_LOCATION.toString().substring(
                    2,
                    SPIRAL_BASE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SPIRAL_LENGTH__DEFAULT______BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_LENGTH__DEFAULT______BLOCKS_.toString().substring(
                    2,
                    SPIRAL_LENGTH__DEFAULT______BLOCKS_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    SPIRAL_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
              },
              slot: 3,
            },
            {
              item: {
                id: SPIRAL_PARTICLES__DEFAULT______PARTICLES_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_PARTICLES__DEFAULT______PARTICLES_.toString().substring(
                    2,
                    SPIRAL_PARTICLES__DEFAULT______PARTICLES_.length
                  ),
                },
              },
              slot: 4,
            },
            {
              item: {
                id: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.toString().substring(
                    2,
                    SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_.length
                  ),
                },
              },
              slot: 5,
            },
            {
              item: {
                id: ANIMATION_DURATION__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ANIMATION_DURATION__TICKS_.toString().substring(
                    2,
                    ANIMATION_DURATION__TICKS_.length
                  ),
                },
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
            {
              item: {
                id: VEHICLE_TYPE.toString().startsWith("v_")
                  ? "var"
                  : "VEHICLE",
                data: {
                  name: VEHICLE_TYPE.toString().substring(
                    2,
                    VEHICLE_TYPE.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: VEHICLE_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: VEHICLE_LOCATION.toString().substring(
                    2,
                    VEHICLE_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: VEHICLE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: VEHICLE_NAME.toString().substring(
                    2,
                    VEHICLE_NAME.length
                  ),
                },
              },
              slot: 2,
            },
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
              item: {
                id: IMPACT_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: IMPACT_LOCATION.toString().substring(
                    2,
                    IMPACT_LOCATION.length
                  ),
                },
              },
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
            {
              item: {
                id: BLOCK_TO_SET.toString().startsWith("v_") ? "var" : "BLOCK",
                data: {
                  name: BLOCK_TO_SET.toString().substring(
                    2,
                    BLOCK_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: loc.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: loc.toString().substring(2, loc.length),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LOCATION____REGION_.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LOCATION____REGION_.toString().substring(
                    2,
                    LOCATION____REGION_.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: BLOCK_DATA.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK_TAG",
                data: {
                  name: BLOCK_DATA.toString().substring(2, BLOCK_DATA.length),
                },
              },
              slot: 3,
            },
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
          items: [
            {
              item: {
                id: SCORE_NAME.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: SCORE_NAME.toString().substring(2, SCORE_NAME.length),
                },
              },
              slot: 0,
            },
          ],
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
              item: {
                id: HOLOGRAM_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: HOLOGRAM_LOCATION.toString().substring(
                    2,
                    HOLOGRAM_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: HOLOGRAM_TEXT.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: HOLOGRAM_TEXT.toString().substring(
                    2,
                    HOLOGRAM_TEXT.length
                  ),
                },
              },
              slot: 1,
            },
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
                id: SCORE_NAME_____CHARACTERS_OR_LESS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "txt",
                data: {
                  name: SCORE_NAME_____CHARACTERS_OR_LESS_.toString().substring(
                    2,
                    SCORE_NAME_____CHARACTERS_OR_LESS_.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SCORE_VALUE__DEFAULT_____.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: SCORE_VALUE__DEFAULT_____.toString().substring(
                    2,
                    SCORE_VALUE__DEFAULT_____.length
                  ),
                },
              },
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
              item: {
                id: REGION_LOCATION__.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: REGION_LOCATION__.toString().substring(
                    2,
                    REGION_LOCATION__.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: REGION_LOCATION___.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: REGION_LOCATION___.toString().substring(
                    2,
                    REGION_LOCATION___.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: POSITION_TO_COPY_FROM.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: POSITION_TO_COPY_FROM.toString().substring(
                    2,
                    POSITION_TO_COPY_FROM.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: POSITION_TO_PASTE_TO.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: POSITION_TO_PASTE_TO.toString().substring(
                    2,
                    POSITION_TO_PASTE_TO.length
                  ),
                },
              },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LINE_START_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LINE_START_LOCATION.toString().substring(
                    2,
                    LINE_START_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: LINE_END_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: LINE_END_LOCATION.toString().substring(
                    2,
                    LINE_END_LOCATION.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: ANIMATION_DURATION__TICKS_.toString().startsWith("v_")
                  ? "var"
                  : "num",
                data: {
                  name: ANIMATION_DURATION__TICKS_.toString().substring(
                    2,
                    ANIMATION_DURATION__TICKS_.length
                  ),
                },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CLEAR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CLEAR.toString().substring(
                    2,
                    ITEM_S__TO_CLEAR.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: PARTICLE_TO_SPAWN.toString().startsWith("v_")
                  ? "var"
                  : "PARTICLE",
                data: {
                  name: PARTICLE_TO_SPAWN.toString().substring(
                    2,
                    PARTICLE_TO_SPAWN.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SPHERE_CENTER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: SPHERE_CENTER_LOCATION.toString().substring(
                    2,
                    SPHERE_CENTER_LOCATION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SPHERE_DIAMETER__DEFAULT_____BLOCKS_.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "num",
                data: {
                  name: SPHERE_DIAMETER__DEFAULT_____BLOCKS_.toString().substring(
                    2,
                    SPHERE_DIAMETER__DEFAULT_____BLOCKS_.length
                  ),
                },
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
            {
              item: {
                id: WAIT_DURATION.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: WAIT_DURATION.toString().substring(
                    2,
                    WAIT_DURATION.length
                  ),
                },
              },
              slot: 0,
            },
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
                id: THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION.toString().substring(
                    2,
                    THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: CENTER_BLOCK.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: CENTER_BLOCK.toString().substring(
                    2,
                    CENTER_BLOCK.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: VARIABLE_TO_SET.toString().startsWith("v_") ? "var" : "var",
                data: {
                  name: VARIABLE_TO_SET.toString().substring(
                    2,
                    VARIABLE_TO_SET.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: SPHERE_CENTER.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: SPHERE_CENTER.toString().substring(
                    2,
                    SPHERE_CENTER.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: SPHERE_RADIUS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SPHERE_RADIUS.toString().substring(
                    2,
                    SPHERE_RADIUS.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: SPHERE_POINTS.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: SPHERE_POINTS.toString().substring(
                    2,
                    SPHERE_POINTS.length
                  ),
                },
              },
              slot: 3,
            },
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
                id: GETS_THE_CURRENT_INDEX_EACH_ITERATION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: GETS_THE_CURRENT_INDEX_EACH_ITERATION.toString().substring(
                    2,
                    GETS_THE_CURRENT_INDEX_EACH_ITERATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: AMOUNT.toString().startsWith("v_") ? "var" : "num",
                data: { name: AMOUNT.toString().substring(2, AMOUNT.length) },
              },
              slot: 1,
            },
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
                id: GETS_THE_CURRENT_BLOCK_EACH_ITERATION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: GETS_THE_CURRENT_BLOCK_EACH_ITERATION.toString().substring(
                    2,
                    GETS_THE_CURRENT_BLOCK_EACH_ITERATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: START_OF_REGION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: START_OF_REGION.toString().substring(
                    2,
                    START_OF_REGION.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: END_OF_REGION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: END_OF_REGION.toString().substring(
                    2,
                    END_OF_REGION.length
                  ),
                },
              },
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
                id: GETS_THE_CURRENT_NUMBER_EACH_ITERATION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: GETS_THE_CURRENT_NUMBER_EACH_ITERATION.toString().substring(
                    2,
                    GETS_THE_CURRENT_NUMBER_EACH_ITERATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: START_OF_RANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: START_OF_RANGE.toString().substring(
                    2,
                    START_OF_RANGE.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: END_OF_RANGE.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: END_OF_RANGE.toString().substring(
                    2,
                    END_OF_RANGE.length
                  ),
                },
              },
              slot: 2,
            },
            {
              item: {
                id: INTERVAL.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: INTERVAL.toString().substring(2, INTERVAL.length),
                },
              },
              slot: 3,
            },
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
                id: GETS_THE_CURRENT_VALUE_EACH_ITERATION.toString().startsWith(
                  "v_"
                )
                  ? "var"
                  : "var",
                data: {
                  name: GETS_THE_CURRENT_VALUE_EACH_ITERATION.toString().substring(
                    2,
                    GETS_THE_CURRENT_VALUE_EACH_ITERATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: LIST_TO_REPEAT_THROUGH.toString().startsWith("v_")
                  ? "var"
                  : "LIST",
                data: {
                  name: LIST_TO_REPEAT_THROUGH.toString().substring(
                    2,
                    LIST_TO_REPEAT_THROUGH.length
                  ),
                },
              },
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
              item: {
                id: SIGN_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: SIGN_LOCATION.toString().substring(
                    2,
                    SIGN_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: TEXT_TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_TO_CHECK_FOR.toString().substring(
                    2,
                    TEXT_TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CHECK.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK.toString().substring(
                    2,
                    ITEM_S__TO_CHECK.length
                  ),
                },
              },
              slot: 1,
            },
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
              item: {
                id: BLOCK_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_S__TO_CHECK_FOR.toString().substring(
                    2,
                    BLOCK_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: TEXT_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_S__TO_CHECK_FOR.toString().substring(
                    2,
                    TEXT_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: CHECK_LOCATION.toString().startsWith("v_") ? "var" : "loc",
                data: {
                  name: CHECK_LOCATION.toString().substring(
                    2,
                    CHECK_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: BLOCK_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK",
                data: {
                  name: BLOCK_S__TO_CHECK_FOR.toString().substring(
                    2,
                    BLOCK_S__TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 1,
            },
            {
              item: {
                id: BLOCK_DATA.toString().startsWith("v_")
                  ? "var"
                  : "BLOCK_TAG",
                data: {
                  name: BLOCK_DATA.toString().substring(2, BLOCK_DATA.length),
                },
              },
              slot: 2,
            },
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
              item: {
                id: CHECK_LOCATION_S_.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CHECK_LOCATION_S_.toString().substring(
                    2,
                    CHECK_LOCATION_S_.length
                  ),
                },
              },
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
            {
              item: {
                id: NAME_OR_UUID.toString().startsWith("v_") ? "var" : "txt",
                data: {
                  name: NAME_OR_UUID.toString().substring(
                    2,
                    NAME_OR_UUID.length
                  ),
                },
              },
              slot: 0,
            },
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
              item: {
                id: CONTAINER_LOCATION.toString().startsWith("v_")
                  ? "var"
                  : "loc",
                data: {
                  name: CONTAINER_LOCATION.toString().substring(
                    2,
                    CONTAINER_LOCATION.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ITEM_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "ITEM",
                data: {
                  name: ITEM_S__TO_CHECK_FOR.toString().substring(
                    2,
                    ITEM_S__TO_CHECK_FOR.length
                  ),
                },
              },
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
              item: {
                id: TEXT_S__TO_CHECK_FOR.toString().startsWith("v_")
                  ? "var"
                  : "txt",
                data: {
                  name: TEXT_S__TO_CHECK_FOR.toString().substring(
                    2,
                    TEXT_S__TO_CHECK_FOR.length
                  ),
                },
              },
              slot: 0,
            },
            {
              item: {
                id: ARGUMENT_NUMBER.toString().startsWith("v_") ? "var" : "num",
                data: {
                  name: ARGUMENT_NUMBER.toString().substring(
                    2,
                    ARGUMENT_NUMBER.length
                  ),
                },
              },
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
