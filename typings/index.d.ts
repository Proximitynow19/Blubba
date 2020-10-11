declare namespace blubba {
  type ANY_TYPE =
    | (TEXT | string)
    | (NUMBER | number)
    | LOCATION
    | VARIABLE
    | PARTICLE
    | POTION
    | PROJECTILE
    | ITEM
    | SOUND
    | LIST;

  class Value {
    value: any;
  }

  export class TEXT extends Value {
    constructor(value: TEXT | string | VARIABLE) {
      super();
      this.value = value;
    }
  }

  export class NUMBER extends Value {
    constructor(value: NUMBER | number | VARIABLE) {
      super();
      this.value = value;
    }
  }

  export class LOCATION extends Value {
    constructor(
      x: number | VARIABLE,
      y: number | VARIABLE,
      z: number | VARIABLE,
      pitch: number | undefined | VARIABLE,
      yaw: number | undefined | VARIABLE
    ) {
      super();
      this.value = {
        x,
        y,
        z,
      };
    }
  }

  export class VARIABLE extends Value {
    constructor(key: TEXT | string | VARIABLE, value: ANY_TYPE) {
      super();
      this.value = { key, value };
    }
  }

  export class PARTICLE extends Value {
    constructor(value: string | ITEM | VARIABLE) {
      super();
      this.value = value;
    }
  }

  export class POTION extends Value {
    constructor(
      value: string | ITEM | VARIABLE,
      length: number | undefined | VARIABLE,
      amplifier: number | undefined | VARIABLE
    ) {
      super();
      this.value = {
        value,
        length,
        amplifier,
      };
    }
  }

  export class PROJECTILE extends Value {
    constructor(value: string | ITEM | VARIABLE) {
      super();
      this.value = value;
    }
  }

  export class ITEM extends Value {
    constructor(value: string | ITEM | VARIABLE) {
      super();
      this.value = value;
    }
  }

  export type SOUND = string;
  export type LIST = any[];
  export type BLOCK_TAG = string;
  export type BLOCK = string | ITEM;
  export type SPAWN_EGG = string | ITEM;
  export type ENTITY_TYPE = string | ITEM;
  export type VEHICLE = string | ITEM;

  /**
   * PLAYER ACTION
   *
   * Used to do something related to
   * a player or multiple players.
   *
   * \> Send a message to a player
   * \> Damage or heal a player
   * \> Clear a player's inventory
   */
  export interface player_action {
    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CLOSEINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CLEAREFFECTS(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GIVEITEMS(
      ITEM_S__TO_GIVE: ITEM | ITEM[],
      AMOUNT_TO_GIVE: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    NOKEEPINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    BOSSBAR(
      TITLE: undefined | TEXT,
      REMAINING_HEALTH: undefined | NUMBER,
      MAXIMUM_HEALTH: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETATKSPEED(ATTACK_SPEED: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ADDINVROW(ITEMS_TO_DISPLAY: undefined | ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISABLEPVP(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    NONATREGEN(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISPLAYLIGHTNING(STRIKE_LOCATION: LOCATION): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REPLACEPROJ(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DAMAGE(DAMAGE_TO_INFLICT: NUMBER, DAMAGE_SOURCE: undefined | TEXT): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETEXP(EXPERIENCE_TO_SET: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDANIMATION(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETXPPROG(PROGRESS__________: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    TPSEQUENCE(
      LOCATIONS_TO_TELEPORT_TO: LOCATION | LOCATION[],
      TELEPORT_DELAY__TICKS__DEFAULT______: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    HEAL(AMOUNT_TO_HEAL: undefined | NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETINVENTORYKEPT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETALLOWFLIGHT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    LAUNCHUP(LAUNCH_POWER: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETMAXHEALTH(MAXIMUM_HEALTH: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    FORCEFLIGHT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    LOADINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    KICK(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETTABLISTINFO(HEADER_FOOTER_TEXT: undefined | TEXT | TEXT[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ENABLEPVP(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    PROJCOLL(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    HIDEDISGUISE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETINVULTICKS(TICKS: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETCURSORITEM(ITEM_TO_SET: undefined | ITEM): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETABSORPTION(ABSORPTION_HEALTH: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETFIRETICKS(TICKS: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETGAMEMODE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REMOVEINVROW(ROWS_TO_REMOVE: undefined | NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ENABLEFLIGHT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISABLEBLOCKS(BLOCKS_TO_DISALLOW: undefined | BLOCK | BLOCK[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REMOVEEFFECT(POTION_EFFECT_S_: POTION | POTION[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    L_SETHEALTH(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GMADVENTURE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    PARTICLEEFFECT(
      PARTICLE_EFFECT: PARTICLE,
      PARTICLE_LOCATION: LOCATION,
      PARTICLE_COUNT: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CLEARINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETGLIDING(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISALLOWDROPS(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CLEARITEMS(ITEM_S__TO_CLEAR: ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISPLAYBLOCK(
      BLOCK_TO_DISPLAY: BLOCK,
      BLOCK_LOCATION__OR_START_OF_REGION: LOCATION,
      END_OF_REGION: undefined | LOCATION,
      BLOCK_DATA: undefined | BLOCK_TAG | BLOCK_TAG[]
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    RIDEENTITY(NAME_OR_UUID_OF_TARGET_TO_RIDE: TEXT): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    WEATHERRAIN(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETFLYING(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    RMWORLDBORDER(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISPLAYBLOCKOPEN(BLOCK_LOCATION: LOCATION): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETHANDITEM(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDADVANCEMENT(ADVANCEMENT_NAME: TEXT, ADVANCEMENT_ICON: ITEM): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CLEARCHAT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    TELEPORT(NEW_POSITION: LOCATION): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETALLOWPVP(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETMENUITEM(
      SLOT_S__TO_SET: NUMBER | NUMBER[],
      ITEM_S__TO_DISPLAY: undefined | ITEM | ITEM[]
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    LAUNCHTOWARD(
      LAUNCH_DESTINATION: LOCATION,
      LAUNCH_POWER: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETARMOR(ARMOR_TO_SET: ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISABLEFLIGHT(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GMSURVIVAL(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETDISGUISEVISIBLE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETARROWSSTUCK(ARROW_COUNT: undefined | NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GIVEEXP(EXPERIENCE_TO_GIVE: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETITEMS(
      ITEM_S__TO_GIVE__IN_THEIR_CORRESPONDING_ITEM_SLOTS: ITEM | ITEM[]
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    KEEPINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REPLACEITEMS(
      ITEM_S__TO_REPLACE: undefined | ITEM | ITEM[],
      ITEM_TO_REPLACE_WITH: ITEM,
      AMOUNT_OF_ITEMS_TO_REPLACE: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ACTIONBAR(MESSAGE_TO_SEND: TEXT | TEXT[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETCHATTAG(NEW_CHAT_TAG: undefined | TEXT | TEXT[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDMESSAGE(MESSAGE_TO_SEND: undefined | TEXT | TEXT[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SHIFTWORLDBORDER(
      NEW_RADIUS: NUMBER,
      BLOCKS_PER_SECOND: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETSLOTITEM(ITEM_TO_SET: undefined | ITEM, SLOT_TO_SET: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    PLAYSOUNDSEQ(
      SOUNDS_TO_PLAY: SOUND | SOUND[],
      SOUND_DELAY__TICKS__DEFAULT______: undefined | NUMBER,
      PLAYBACK_LOCATION: undefined | LOCATION
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDDIALOGUE(
      MESSAGES_TO_SEND: TEXT | TEXT[],
      MESSAGE_DELAY_TICKS: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISPLAYSIGNTEXT(
      SIGN_LOCATION: LOCATION,
      TEXT_LINE_S_: undefined | TEXT | TEXT[]
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    RESPAWN(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETSPEED(MOVEMENT_SPEED_PERCENTAGE_____TO_______: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    EXPANDINV(ITEMS_TO_DISPLAY: undefined | ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETINVNAME(INVENTORY_NAME: TEXT): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH: PROJECTILE,
      LAUNCH_POINT: undefined | LOCATION,
      PROJECTILE_NAME: undefined | TEXT,
      SPEED: undefined | NUMBER,
      INACCURACY__DEFAULT_____: undefined | NUMBER,
      LAUNCH_TRAIL: undefined | PARTICLE
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETITEMCOOLDOWN(
      ITEM_TYPE_TO_AFFECT: ITEM,
      COOLDOWN_IN_TICKS: NUMBER,
      COOLDOWN_REFRESH_SOUND: undefined | SOUND
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETPLAYERWEATHER(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDHOVER(
      MESSAGE_TO_SEND_IN_CHAT: TEXT,
      MESSAGE_TO_SEE_ON_HOVER: TEXT
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GIVEEFFECT(POTION_EFFECTS: POTION | POTION[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    NOPROJCOLL(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SHOWDISGUISE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETAIRTICKS(BREATH_TICKS: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    CHATCOLOR(NEW_CHAT_COLOR: undefined | TEXT): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETWORLDBORDER(
      CENTER_POSITION: LOCATION,
      RADIUS_IN_BLOCKS: NUMBER,
      WARNING_DISTANCE: NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETPLAYERTIME(DAYLIGHT_TIME: undefined | NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    NATREGEN(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    PLAYSOUND(
      SOUND_TO_PLAY: SOUND | SOUND[],
      PLAYBACK_LOCATION: undefined | LOCATION
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETCOMPASS(NEW_TARGET: LOCATION): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REMOVEITEMS(ITEM_S__TO_REMOVE: ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    RNGTELEPORT(LOCATIONS_TO_CHOOSE_FROM: LOCATION | LOCATION[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SAVEINV(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    OPENBOOK(BOOK_ITEM: ITEM): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETHEALTH(REMAINING_HEALTH: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    MOBDISGUISE(MOB_DISGUISE: SPAWN_EGG, DISGUISE_NAME: undefined | TEXT): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    BLOCKDISGUISE(
      BLOCK_DISGUISE: BLOCK,
      NAME_OF_DISGUISE: undefined | TEXT
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ROLLBACKBLOCKS(ROLLBACK_TIME: undefined | NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    NODEATHDROPS(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    WALKSPEED(__OF_NORMAL_WALK_SPEED____TO_____: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ENABLEBLOCKS(BLOCKS_TO_ALLOW: undefined | BLOCK | BLOCK[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    OPENBLOCKINV(BLOCK_TO_ACCESS: LOCATION): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETCOLLIDABLE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    LAUNCHFWD(LAUNCH_POWER: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    REMOVEBOSSBAR(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETFALLDISTANCE(FALL_DISTANCE__BLOCKS_: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETEQUIPMENT(ITEM_TO_SET: undefined | ITEM): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ATTACKANIMATION(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    GIVERNGITEM(ITEMS_TO_PICK_FROM: ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETDROPSENABLED(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DISPLAYFRACTURE(
      BLOCK_S__TO_FRACTURE: LOCATION | LOCATION[],
      FRACTURE_LEVEL: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    ALLOWDROPS(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    DEATHDROPS(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SHOWINV(ITEMS_TO_DISPLAY: undefined | ITEM | ITEM[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETSLOT(NEW_SLOT: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETFOODLEVEL(NEW_HUNGER_LEVEL_______: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    PLAYERDISGUISE(
      DISGUISE_PLAYER_NAME: TEXT,
      DISGUISE_SKIN: undefined | TEXT
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETSATURATION(NEW_SATURATION_LEVEL_______: NUMBER): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    WEATHERCLEAR(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    UNDISGUISE(): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SENDTITLE(
      TITLE_TEXT: TEXT,
      SUBTITLE_TEXT: undefined | TEXT,
      TITLE_DURATION: undefined | NUMBER,
      FADE_IN_LENGTH: undefined | NUMBER,
      FADE_OUT_LENGTH: undefined | NUMBER
    ): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    STOPSOUND(SOUNDS_TO_STOP: undefined | SOUND | SOUND[]): void;

    /**
     * PLAYER ACTION
     *
     * Used to do something related to
     * a player or multiple players.
     *
     * \> Send a message to a player
     * \> Damage or heal a player
     * \> Clear a player's inventory
     */
    SETNAMECOLOR(NAME_COLOR: TEXT): void;
  }

  /**
   * IF PLAYER
   *
   * Used to execute the code inside it
   * if a certain condition related to a
   * player is met.
   *
   * \> Check if a player is swimming
   * \> Check if a player has an item
   * \> Check a player's username
   */
  export interface if_player {
    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISLOOKINGAT(
      BLOCK_S__TO_CHECK_FOR: undefined | BLOCK | BLOCK[],
      LOCATION_S__TO_CHECK_FOR: LOCATION | LOCATION[],
      MAXIMUM_DISTANCE_FROM_TARGET_BLOCK: undefined | NUMBER
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    INWORLDBORDER(LOCATION_TO_CHECK: undefined | LOCATION): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASROOMFORITEM(ITEM_S__TO_CHECK: undefined | ITEM): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISHOLDINGOFF(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    NOITEMCOOLDOWN(ITEM_TYPE_S__TO_CHECK: ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISUSINGITEM(ITEM_S__TO_CHECK: undefined | ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASALLITEMS(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISSWIMMING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASITEM(ITEM_S__TO_CHECK_FOR: ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    BLOCKEQUALS(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISWEARING(ITEM_S__TO_CHECK_FOR: ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISNEAR(
      CENTER_LOCATION: LOCATION | LOCATION[],
      RANGE: undefined | NUMBER
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISRIDING(
      ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO:
        | undefined
        | TEXT
        | TEXT[]
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    STANDINGON(
      BLOCK_TO_CHECK_FOR: undefined | BLOCK | BLOCK[],
      LOCATION_TO_CHECK_FOR: LOCATION | LOCATION[]
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    CMDEQUALS(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASEFFECT(POTION_S__TO_CHECK_FOR: POTION | POTION[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISGROUNDED(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    CURSORITEM(ITEMS_S__TO_CHECK_FOR: undefined | ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    SLOTEQUALS(SLOT_ID_TO_CHECK: NUMBER): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ITEMEQUALS(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISHOLDINGMAIN(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISHOLDING(ITEM_S__TO_CHECK_FOR: undefined | ITEM | ITEM[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    MENUSLOTEQUALS(
      SLOT_ID_S__TO_CHECK: NUMBER | NUMBER[],
      ITEM_S__TO_CHECK_FOR: undefined | ITEM | ITEM[]
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISBLOCKING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASPERMISSION(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISSNEAKING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISFLYING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    NAMEEQUALS(NAME_S__TO_CHECK_FOR: TEXT | TEXT[]): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    INVOPEN(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    HASSLOTITEM(
      SLOT_S__TO_CHECK: NUMBER | NUMBER[],
      ITEM_S__TO_CHECK_FOR: undefined | ITEM | ITEM[]
    ): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISSPRINTING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    ISGLIDING(): void;

    /**
     * IF PLAYER
     *
     * Used to execute the code inside it
     * if a certain condition related to a
     * player is met.
     *
     * \> Check if a player is swimming
     * \> Check if a player has an item
     * \> Check a player's username
     */
    CMDARGEQUALS(): void;
  }

  /**
   * CALL FUNCTION
   *
   * Used to call functions declared by
   * a Function block.
   * Code will not continue past this block
   * until the Function completes/returns.
   *
   *
   */
  export interface call_func {
    /**
     * CALL FUNCTION
     *
     * Used to call functions declared by
     * a Function block.
     * Code will not continue past this block
     * until the Function completes/returns.
     *
     *
     */
    DYNAMIC(): void;
  }

  /**
   * FUNCTION
   *
   * Used to define a line of code that can be
   * called with a Call Function block.
   *
   *
   */
  export interface func {
    /**
     * FUNCTION
     *
     * Used to define a line of code that can be
     * called with a Call Function block.
     *
     *
     */
    DYNAMIC(): void;
  }

  /**
   * ENTITY EVENT
   *
   * Used to execute code when an entity
   * does something or when something
   * happens to an entity.
   *
   * \> Detect when a mob takes damage
   * \> Detect when a projectile kills a mob
   * \> Detect when a mob kills another mob
   */
  export interface entity_event {
    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    ENTITYKILLENTITY(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    BLOCKFALL(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    PROJKILLENTITY(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    ENTITYDMGENTITY(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    FALLINGBLOCKLAND(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    ENTITYDMG(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    PROJDMGENTITY(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    ENTITYDEATH(): void;

    /**
     * ENTITY EVENT
     *
     * Used to execute code when an entity
     * does something or when something
     * happens to an entity.
     *
     * \> Detect when a mob takes damage
     * \> Detect when a projectile kills a mob
     * \> Detect when a mob kills another mob
     */
    VEHICLEDAMAGE(): void;
  }

  /**
   * SET VARIABLE
   *
   * Used to set the value of a dynamic
   * variable.
   *
   * \> Set a variable to a sum of numbers
   * \> Remove all instances of a certain
   * text from a text variable
   * \> Set a variable to a random value
   */
  export interface set_var {
    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETPOTIONAMP(VARIABLE_TO_SET: VARIABLE, POTION: POTION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RANDOMOBJ(
      VARIABLE_TO_SET: VARIABLE,
      VALUE_S__TO_CHOOSE_FROM: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMAMOUNT(
      VARIABLE_TO_SET: VARIABLE,
      STACK_SIZE: NUMBER,
      ITEM: undefined | ITEM
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMENCHANTS(
      VARIABLE_TO_SET: VARIABLE,
      ITEM_TO_ENCHANT: undefined | ITEM,
      ITEM_ENCHANTS: LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETCASE(VARIABLE_TO_SET: VARIABLE, TEXT_TO_CHANGE: undefined | TEXT): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PURGEVARS(NAME_TO_MATCH: TEXT | TEXT[]): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTALLAXES(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_CHANGE: undefined | LOCATION,
      X_CHANGE: undefined | NUMBER,
      Y_CHANGE: undefined | NUMBER,
      Z_CHANGE: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETLIGHT(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    DISTANCE(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION: LOCATION,
      LOCATION__: LOCATION
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ABSOLUTEVALUE(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_INPUT: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    FACEDIRECTION(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_CHANGE: undefined | LOCATION,
      DIRECTION: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    APPENDVALUE(
      LIST_TO_APPEND_TO: VARIABLE,
      VALUE_S__TO_APPEND: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMLORE(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      ITEM_LORE: undefined | TEXT | TEXT[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ROOT(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_INPUT: undefined | NUMBER,
      ROOT_INDEX: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    _(VARIABLE_TO_SET: VARIABLE, DIVIDEND: NUMBER, DIVISOR: NUMBER): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMATTRIBUTE(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    _(VARIABLE_TO_SET: VARIABLE, VALUES_TO_ADD: ANY_TYPE | ANY_TYPE[]): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTROTATION(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_SHIFT: undefined | LOCATION,
      ROTATION_AMOUNT: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    _(
      VARIABLE_TO_SET: VARIABLE,
      VALUE_TO_SUBTRACT_FROM: ANY_TYPE,
      VALUES_TO_SUBTRACT: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ADDITEMENCHANT(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      ENCHANT_NAME: TEXT,
      ENCHANT_LEVEL: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMRARITY(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    _(VARIABLE_TO_SET: VARIABLE, NUMBERS_TO_DIVIDE: NUMBER | NUMBER[]): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMTYPE(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETDIRECTION(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TRIMTEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_TRIM: undefined | VARIABLE,
      START_CHARACTER_POSITION: NUMBER,
      END_CHARACTER_POSITION: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETSIGNTEXT(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETHEADOWNER(
      VARIABLE_TO_SET: VARIABLE,
      PLAYER_HEAD_ITEM: undefined | ITEM,
      OWNER_NAME_OR_UUID: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSEX(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSEY(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSEZ(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETALLBLOCKDATA(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    _(
      VARIABLE_TO_SET: VARIABLE,
      VALUE_S__TO_ASSIGN: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RMTEXT(
      VARIABLE_TO_REMOVE_OTHER_TEXT_FROM: VARIABLE,
      TEXT_TO_REMOVE: TEXT | TEXT[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ADDITEMATTRIBUTE(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      MODIFIER_AMOUNT: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETCOORD(VARIABLE_TO_SET: VARIABLE, LOCATION_TO_PARSE: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    REMOVEITEMTAG(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      TAG_NAME: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETPOTIONDUR(VARIABLE_TO_SET: VARIABLE, POTION: POTION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ALIGNLOC(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_ALIGN: undefined | LOCATION
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RANDOMLOC(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION: LOCATION,
      LOCATION__: LOCATION
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETSOUNDTYPE(
      VARIABLE_TO_SET: VARIABLE,
      SOUND_TO_CHANGE: undefined | SOUND,
      SOUND_NAME__E_G___RABBIT_EAT__: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTDIRECTION(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_SHIFT: undefined | LOCATION,
      SHIFT_DISTANCE: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETCONTAINERNAME(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETSOUNDVOLUME(
      VARIABLE_TO_SET: VARIABLE,
      SOUND_TO_GET_VOLUME_OF: SOUND
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RANDOMNUMBER(
      VARIABLE_TO_SET: VARIABLE,
      MINIMUM_NUMBER: NUMBER,
      MAXIMUM_NUMBER: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    MIXCOLORS(VARIABLE_TO_SET: VARIABLE, COLORS_TO_MIX: TEXT | TEXT[]): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETHEADOWNER(VARIABLE_TO_SET: VARIABLE, HEAD_TO_GET_OWNER_OF: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMENCHANTS(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETMAXITEMAMOUNT(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETLISTVALUE(
      LIST_TO_MODIFY: VARIABLE,
      LIST_INDEX: NUMBER,
      VALUE_TO_SET: ANY_TYPE
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    FINDCENTER(
      VARIABLE_TO_SET: VARIABLE,
      LOCATIONS_TO_CENTER: LOCATION | LOCATION[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETBOOKTEXT(
      VARIABLE_TO_SET: VARIABLE,
      BOOK_ITEM: undefined | ITEM,
      PAGES: LIST,
      PAGE_TEXT: TEXT,
      PAGE_NUMBER: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMTYPE(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      ITEM_MATERIAL: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETSOUNDTYPE(VARIABLE_TO_SET: VARIABLE, SOUND: SOUND): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETLISTVALUE(
      VARIABLE_TO_SET: VARIABLE,
      LIST_TO_ACCESS: LIST,
      LIST_INDEX: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    AVERAGE(
      VARIABLE_TO_SET: VARIABLE,
      NUMBERS_TO_AVERAGE: NUMBER | NUMBER[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_SET_TO: undefined | ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TANGENT(VARIABLE_TO_SET: VARIABLE, NUMBER_INPUT: NUMBER): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    WRAPNUMBER(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_TO_WRAP: undefined | NUMBER,
      LOWER_BOUND: NUMBER,
      UPPER_BOUND: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETY(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETBLOCKDATA(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION: LOCATION,
      TAG_NAME: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    VORONOINOISE(
      VARIABLE_TO_SET: VARIABLE,
      NOISE_LOCATION: LOCATION,
      CELL_FREQUENCY: undefined | NUMBER,
      CELL_SCATTER: undefined | NUMBER,
      GENERATION_SEED: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETX(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    HSBCOLOR(
      VARIABLE_TO_SET: VARIABLE,
      HUE__COLOR_CIRCLE________: NUMBER,
      SATURATION: undefined | NUMBER,
      BRIGHTNESS: undefined | NUMBER,
      H__S__B_VALUES: LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    __(
      VARIABLE_TO_INCREMENT: VARIABLE,
      NUMBER_S__TO_INCREMENT_BY__DEFAULT_____: undefined | NUMBER | NUMBER[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMCOLOR(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    X(VARIABLE_TO_SET: VARIABLE, NUMBERS_TO_MULTIPLY: NUMBER | NUMBER[]): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSEYAW(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETSOUNDVOLUME(
      VARIABLE_TO_SET: VARIABLE,
      SOUND_TO_CHANGE: undefined | SOUND,
      SOUND_VOLUME: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETCOORD(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_CHANGE: undefined | LOCATION,
      NEW_COORDINATE: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETZ(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETPITCH(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTTOWARDS(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_SHIFT: undefined | LOCATION,
      TARGET_LOCATION: LOCATION,
      SHIFT_DISTANCE: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETPOTIONTYPE(VARIABLE_TO_SET: VARIABLE, POTION: POTION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMNAME(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      ITEM_NAME: TEXT | TEXT[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    LISTLENGTH(VARIABLE_TO_SET: VARIABLE, LIST_TO_MEASURE: LIST): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PERLINNOISE(
      VARIABLE_TO_SET: VARIABLE,
      NOISE_LOCATION: LOCATION,
      FREQUENCY__SCALE_: undefined | NUMBER,
      OCTAVES__PERLIN_LAYERS_: undefined | NUMBER,
      OCTAVE_FREQUENCY_GAIN: undefined | NUMBER,
      OCTAVE_AMPLITUDE_GAIN: undefined | NUMBER,
      GENERATION_SEED: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SINE(VARIABLE_TO_SET: VARIABLE, NUMBER_INPUT: NUMBER): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTAXIS(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_SHIFT: undefined | LOCATION,
      SHIFT_DISTANCE: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    WORLEYNOISE(
      VARIABLE_TO_SET: VARIABLE,
      NOISE_LOCATION: LOCATION,
      CELL_FREQUENCY: undefined | NUMBER,
      CELL_SCATTER: undefined | NUMBER,
      GENERATION_SEED: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMCOLOR(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      COLOR_HEXADECIMAL: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMLORE(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETSOUNDPITCH(
      VARIABLE_TO_SET: VARIABLE,
      SOUND_TO_CHANGE: undefined | SOUND,
      SOUND_PITCH: NUMBER,
      SOUND_NOTE: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    REVERSELIST(
      VARIABLE_TO_SET: VARIABLE,
      LIST_TO_REVERSE: undefined | LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SORTLIST(VARIABLE_TO_SET: VARIABLE, LIST_TO_SORT: undefined | LIST): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    FACELOCATION(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_CHANGE: undefined | LOCATION,
      TARGET_LOCATION: LOCATION
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMFLAGS(VARIABLE_TO_SET: VARIABLE, ITEM: undefined | ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    FORMATTIME(
      VARIABLE_TO_SET: VARIABLE,
      TIME_TO_FORMAT: NUMBER,
      CUSTOM_FORMAT: undefined | TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETPOTIONDUR(
      VARIABLE_TO_SET: VARIABLE,
      POTION_TO_CHANGE: undefined | POTION,
      DURATION__TICKS_: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    NORMALRANDOM(
      VARIABLE_TO_SET: VARIABLE,
      ___MEAN_MIDPOINT_: NUMBER,
      ___STANDARD_DEVIATION_: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETPOTIONTYPE(
      VARIABLE_TO_SET: VARIABLE,
      POTION_TO_CHANGE: undefined | POTION,
      POTION_TYPE: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETYAW(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    DUPLICATETEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_DUPLICATE: TEXT,
      TIMES_TO_DUPLICATE: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    __(
      VARIABLE_TO_DECREMENT: VARIABLE,
      NUMBER_S__TO_DECREMENT_BY__DEFAULT_____: undefined | NUMBER | NUMBER[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMTAG(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM, TAG_NAME: TEXT): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    CREATELIST(
      VARIABLE_TO_SET: VARIABLE,
      VALUE_LIST: undefined | ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMDURA(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      ITEM_DURABILITY: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    APPENDLIST(
      LIST_TO_APPEND_TO: VARIABLE,
      LIST_S__TO_APPEND: LIST | LIST[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETBREAKABILITY(VARIABLE_TO_SET: VARIABLE, ITEM: undefined | ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETCONTAINERITEMS(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TRIMLIST(
      LIST_TO_TRIM: VARIABLE,
      START_INDEX: NUMBER,
      END_INDEX: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    COSINE(VARIABLE_TO_SET: VARIABLE, NUMBER_INPUT: NUMBER): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETALLCOORDS(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_CHANGE: undefined | LOCATION,
      NEW_X: undefined | NUMBER,
      NEW_Y: undefined | NUMBER,
      NEW_Z: undefined | NUMBER,
      NEW_PITCH: undefined | NUMBER,
      NEW_YAW: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSENUMBER(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_CONVERT: undefined | TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    EXPONENT(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_INPUT: undefined | NUMBER,
      EXPONENT: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTALLDIRS(
      VARIABLE_TO_SET: VARIABLE,
      LOCATION_TO_SHIFT: undefined | LOCATION,
      FORWARDS_CHANGE: undefined | NUMBER,
      UPWARDS_CHANGE: undefined | NUMBER,
      SIDEWAYS_CHANGE___L____R_: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETVALUEINDEX(
      VARIABLE_TO_SET: VARIABLE,
      LIST_TO_SEARCH_IN: LIST,
      VALUE_TO_SEARCH: ANY_TYPE
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RGBCOLOR(
      VARIABLE_TO_SET: VARIABLE,
      RED: NUMBER,
      GREEN: NUMBER,
      BLUE: NUMBER,
      R__G__B_VALUES: LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    INSERTLISTINDEX(
      LIST_TO_MODIFY: VARIABLE,
      LIST_INDEX: NUMBER,
      VALUE_TO_INSERT: ANY_TYPE
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETCANDESTROY(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      BREAKABLE_BLOCKS: BLOCK | BLOCK[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SPLITTEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_SPLIT: TEXT,
      SPLITTER_TEXT__DEFAULT_______: undefined | TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETBOOKTEXT(
      VARIABLE_TO_SET: VARIABLE,
      BOOK_ITEM: ITEM,
      BOOK_PAGE: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    HSLCOLOR(
      VARIABLE_TO_SET: VARIABLE,
      HUE__COLOR_CIRCLE________: NUMBER,
      SATURATION: undefined | NUMBER,
      LUMINOSITY: undefined | NUMBER,
      H__S__L_VALUES: LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    REMOVELISTINDEX(
      LIST_TO_MODIFY: VARIABLE,
      INDEX_OR_INDICES_TO_REMOVE: NUMBER | NUMBER[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SHIFTLOCATION(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    LOGARITHM(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_INPUT: undefined | NUMBER,
      BASE: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    RANDOMIZELIST(
      VARIABLE_TO_SET: VARIABLE,
      LIST_TO_RANDOMIZE: undefined | LIST
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETITEMTAG(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      TAG_NAME: TEXT,
      TAG_VALUE: NUMBER,
      TAG_VALUE__: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    CLAMPNUMBER(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_TO_CLAMP: undefined | NUMBER,
      MINIMUM: NUMBER,
      MAXIMUM: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    ROUND(
      VARIABLE_TO_SET: VARIABLE,
      NUMBER_TO_ROUND: undefined | NUMBER,
      ROUND_MULTIPLE: undefined | NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETSOUNDPITCH(
      VARIABLE_TO_SET: VARIABLE,
      SOUND_TO_GET_PITCH_OR_NOTE_OF: SOUND
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    JOINTEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXTS_TO_JOIN: LIST,
      JOINING_TEXT: undefined | TEXT,
      FINAL_JOINING_TEXT: undefined | TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TRANSLATECOLORS(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_TRANSLATE: undefined | TEXT | TEXT[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETBLOCKGROWTH(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    REMOVELISTVALUE(
      LIST_TO_MODIFY: VARIABLE,
      VALUE_S__TO_REMOVE: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMAMOUNT(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETPOTIONAMP(
      VARIABLE_TO_SET: VARIABLE,
      POTION_TO_CHANGE: undefined | POTION,
      AMPLIFIER: NUMBER
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMNAME(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETITEMDURA(VARIABLE_TO_SET: VARIABLE, ITEM: ITEM): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETCANPLACEON(
      VARIABLE_TO_SET: VARIABLE,
      ITEM: undefined | ITEM,
      PLACEABLE_BLOCKS: BLOCK | BLOCK[]
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETCOLORCHANNEL(VARIABLE_TO_SET: VARIABLE, COLOR: TEXT): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETBLOCKTYPE(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    PARSEPITCH(): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    REPLACETEXT(
      VARIABLE_TO_SET: VARIABLE,
      TEXT_TO_CHANGE: TEXT,
      TEXT_PART_TO_REPLACE: TEXT,
      REPLACEMENT: TEXT
    ): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    CONTAINERLOCK(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    GETBLOCKPOWER(VARIABLE_TO_SET: VARIABLE, LOCATION: LOCATION): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    TEXTLENGTH(VARIABLE_TO_SET: VARIABLE, TEXT_TO_MEASURE: TEXT): void;

    /**
     * SET VARIABLE
     *
     * Used to set the value of a dynamic
     * variable.
     *
     * \> Set a variable to a sum of numbers
     * \> Remove all instances of a certain
     * text from a text variable
     * \> Set a variable to a random value
     */
    SETCOORDS(): void;
  }

  /**
   * IF ENTITY
   *
   * Used to execute the code inside it
   * if a certain condition related to an
   * entity or multiple entities is met.
   *
   * \> Check if an entity is a projectile
   * \> Check if an entity is a certain type
   * of mob
   * \> Check the name of an entity
   */
  export interface if_entity {
    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISVEHICLE(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISGROUNDED(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISTYPE(
      SPAWN_EGG__PROJECTILE__OR_VEHICLE: ENTITY_TYPE | ENTITY_TYPE[]
    ): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISPROJ(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISMOB(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    HASCUSTOMTAG(
      TAG_NAME: TEXT,
      TAG_VALUE: undefined | NUMBER,
      TAG_VALUE__: undefined | TEXT
    ): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISITEM(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    EXISTS(): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISNEAR(
      CENTER_LOCATION: LOCATION,
      RANGE_FROM_LOCATION: undefined | NUMBER
    ): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    ISRIDING(
      ENTITY_TYPE__E_G___PIG____NAME__OR_UUID_TO_COMPARE_RIDDEN_ENTITY_TO:
        | undefined
        | TEXT
        | TEXT[]
    ): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    STANDINGON(
      BLOCK_S__TO_CHECK_FOR: BLOCK | BLOCK[],
      LOCATION_OF_BLOCK_S__TO_CHECK_FOR: LOCATION | LOCATION[]
    ): void;

    /**
     * IF ENTITY
     *
     * Used to execute the code inside it
     * if a certain condition related to an
     * entity or multiple entities is met.
     *
     * \> Check if an entity is a projectile
     * \> Check if an entity is a certain type
     * of mob
     * \> Check the name of an entity
     */
    NAMEEQUALS(NAME_TO_CHECK_FOR: TEXT | TEXT[]): void;
  }

  /**
   * ENTITY ACTION
   *
   * Used to do something related to
   * an entity or multiple entities.
   *
   * \> Set the age or size of a mob
   * \> Give a mob a potion effect
   * \> Delete an entity from the plot
   */
  export interface entity_action {
    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    CLEAREFFECTS(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPARROTCOLOR(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    REMOVE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    HIDENAME(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    DAMAGE(DAMAGE_TO_INFLICT: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETSHEEPSHEARED(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETMOBSITTING(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SENDANIMATION(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    DISABLEGLOWING(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETHORSEPATTERN(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    TPSEQUENCE(
      LOCATIONS_TO_TELEPORT_TO: LOCATION | LOCATION[],
      TELEPORT_DELAY__TICKS__DEFAULT______: undefined | NUMBER
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    HEAL(AMOUNT_TO_HEAL: undefined | NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETAI(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPROJSOURCE(UUID_OF_SHOOTER: undefined | TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETITEMOWNER(OWNER_UUID: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    EXPLODECREEPER(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPANDAGENE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETDYECOLOR(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    LAUNCHUP(LAUNCH_POWER: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETMAXHEALTH(NEW_MAXIMUM_HEALTH: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETAGE(AGE: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ENDCRYSTALBEAM(TARGET: undefined | LOCATION): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPROFESSION(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    NOGRAVITY(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETINVULNERABLE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    PROJCOLL(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ARMORSTANDTAGS(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPICKUPDELAY(DELAY: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETTARGET(TARGET_NAME: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    DROPITEMS(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCREEPERPOWER(POWER: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    REMOVECUSTOMTAG(TAG_NAME: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETNAMEVISIBLE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETINVULTICKS(TICKS: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETABSORPTION(ABSORPTION_HEALTH: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    CREEPERCHARGED(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETFIRETICKS(TICKS: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCLOUDRADIUS(
      NEW_RADIUS: NUMBER,
      RADIUS_DECREASE_IN_BLOCKS_PER_SECOND: undefined | NUMBER
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETGRAVITY(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETNAME(NEW_NAME: undefined | TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    REMOVEEFFECT(POTION_EFFECTS: POTION | POTION[]): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SILENCE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETPOSE(
      X_ROTATION: undefined | NUMBER,
      Y_ROTATION: undefined | NUMBER,
      Z_ROTATION: undefined | NUMBER
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETROTATION(PITCH______TO____: NUMBER, YAW_______TO_____: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETFISHPATTERN(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    RIDEENTITY(NAME_OR_UUID_OF_TARGET_TO_RIDE: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    NODROPS(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETHANDITEM(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ENABLEGLOWING(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETENDERMANBLOCK(BLOCK_TO_HOLD: BLOCK): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    TELEPORT(NEW_POSITION: LOCATION): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    LAUNCHTOWARD(
      LAUNCH_DESTINATION: LOCATION,
      LAUNCH_POWER: undefined | NUMBER
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETARMOR(ARMOR_TO_SET: ITEM | ITEM[]): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETAGE_SIZE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    GETCUSTOMTAG(VARIABLE_TO_SET: VARIABLE, TAG_NAME: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETANGERTICKS(TICKS: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    L_SETARMOR(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCATTYPE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETSADDLE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH: PROJECTILE,
      LAUNCH_POINT: undefined | LOCATION,
      PROJECTILE_NAME: undefined | TEXT,
      SPEED: undefined | NUMBER,
      INACCURACY__DEFAULT_____: undefined | NUMBER,
      LAUNCH_TRAIL: undefined | PARTICLE
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETLLAMACOLOR(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETWITHERSHIELD(PROGRESS_PERCENTAGE: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETVILLAGERBIOME(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCREEPERFUSE(FUSE_TICKS: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ENABLEAI(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETBABY(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    MOOSHROOMTYPE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    GIVEEFFECT(POTION_EFFECTS: POTION | POTION[]): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    NOPROJCOLL(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETINVISIBLE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SHEEPEAT(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    TAME(NAME_OF_OWNER: undefined | TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETGLOWING(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETHEALTH(REMAINING_HEALTH: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    MOBDISGUISE(MOB_DISGUISE: SPAWN_EGG, DISGUISE_NAME: undefined | TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    BLOCKDISGUISE(
      BLOCK_DISGUISE: BLOCK,
      NAME_OF_DISGUISE: undefined | TEXT
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETMINECARTBLOCK(
      BLOCK_TO_SHOW: BLOCK,
      BLOCK_OFFSET: undefined | NUMBER
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCOLLIDABLE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    LAUNCHFWD(LAUNCH_POWER: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETFALLDISTANCE(FALL_DISTANCE__BLOCKS_: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETEQUIPMENT(ITEM_TO_SET: undefined | ITEM): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ATTACKANIMATION(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETSILENCED(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    ATTACHLEAD(LEAD_HOLDER_UUID: TEXT, LEAD_KNOT_LOCATION: LOCATION): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SNOWMANPUMPKIN(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCUSTOMTAG(TAG_NAME: TEXT, TAG_VALUE: NUMBER, TAG_VALUE__: TEXT): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    GRAVITY(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SHEARSHEEP(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETRABBITTYPE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETSIZE(SIZE: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    NOAI(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SHOWNAME(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    PLAYERDISGUISE(
      DISGUISE_PLAYER_NAME: TEXT,
      DISGUISE_SKIN: undefined | TEXT
    ): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    MOVETO(TARGET_LOCATION: LOCATION, WALK_SPEED: undefined | NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    UNDISGUISE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETDEATHDROPS(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETVILLAGEREXP(EXPERIENCE: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    IGNITECREEPER(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    PROJECTILEITEM(DISPLAY_ITEM: ITEM): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETHORSEJUMP(STRENGTH: NUMBER): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    UNSILENCE(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETCARRYINGCHEST(): void;

    /**
     * ENTITY ACTION
     *
     * Used to do something related to
     * an entity or multiple entities.
     *
     * \> Set the age or size of a mob
     * \> Give a mob a potion effect
     * \> Delete an entity from the plot
     */
    SETFOXTYPE(): void;
  }

  /**
   * IF VARIABLE
   *
   * Used to execute the code inside it
   * if a certain condition related to the
   * value of a variable is met.
   *
   * \> Check if a number variable is less
   * than or equal to another number
   * \> Check if a text variable contains
   * a certain text
   * \> Check if a variable is equal
   * to something
   */
  export interface if_var {
    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    __(NUMBER_TO_CHECK: NUMBER, NUMBER_TO_COMPARE_TO: NUMBER): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    ITEMHASTAG(
      ITEM_TO_CHECK: ITEM,
      TAG_NAME: TEXT,
      TAG_VALUE: undefined | NUMBER,
      TAG_VALUE__: undefined | TEXT
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    STARTSWITH(TEXT_TO_CHECK: TEXT, TEXT_TO_START_WITH: TEXT | TEXT[]): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    LISTVALUEEQ(
      LIST_TO_CHECK_IN: LIST,
      INDEX_TO_CHECK_AT: NUMBER,
      VARIABLE_TO_COMPARE_TO: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    VARISTYPE(VALUE_TO_CHECK: ANY_TYPE): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    TEXTMATCHES(): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    ISNEAR(
      CHECK_VALUE: ANY_TYPE,
      CENTER_VALUE: ANY_TYPE,
      RANGE_VALUE: NUMBER
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    VAREXISTS(VARIABLE_TO_CHECK: VARIABLE): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    LEGACY___(): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    ITEMEQUALS(
      ITEM_TO_CHECK: ITEM,
      ITEM_S__TO_COMPARE_TO: undefined | ITEM | ITEM[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    LISTCONTAINS(
      LIST_TO_CHECK_IN: LIST,
      VARIABLE_TO_FIND: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    LEGACY__(): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    INRANGE(
      CHECK_VALUE: ANY_TYPE,
      MINIMUM_VALUE: ANY_TYPE,
      MAXIMUM_VALUE: ANY_TYPE
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    CONTAINS(TEXT_TO_CHECK: TEXT, TEXT_TO_CHECK_FOR: TEXT | TEXT[]): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    _TEXTMATCHES_(
      TEXT_OR_EXPRESSION_TO_MATCH: TEXT,
      TEXT_TO_COMPARE: TEXT | TEXT[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    __(
      VARIABLE_TO_CHECK: ANY_TYPE,
      VARIABLES_TO_COMPARE_TO: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    _(NUMBER_TO_CHECK: NUMBER, NUMBER_TO_COMPARE_TO: NUMBER): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    _(
      VARIABLE_TO_CHECK: ANY_TYPE,
      VARIABLES_TO_COMPARE_TO: ANY_TYPE | ANY_TYPE[]
    ): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    _(NUMBER_TO_CHECK: NUMBER, NUMBER_TO_COMPARE_TO: NUMBER): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    ENDSWITH(TEXT_TO_CHECK: TEXT, TEXT_TO_END_WITH: TEXT | TEXT[]): void;

    /**
     * IF VARIABLE
     *
     * Used to execute the code inside it
     * if a certain condition related to the
     * value of a variable is met.
     *
     * \> Check if a number variable is less
     * than or equal to another number
     * \> Check if a text variable contains
     * a certain text
     * \> Check if a variable is equal
     * to something
     */
    __(NUMBER_TO_CHECK: NUMBER, NUMBER_TO_COMPARE_TO: NUMBER): void;
  }

  /**
   * SELECT OBJECT
   *
   * Used to change the selection on the
   * current line of code, which will affect
   * the targets of most code blocks.
   *
   * \> Select all players on the plot
   * \> Select a player with a certain username
   * \> Select all players on the plot that meet
   * a certain condition
   */
  export interface select_obj {
    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    LASTMOB(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    RANDOMPLAYER(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    LASTENTITY(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    SHOOTER(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    RANDOMMOB(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    ALLMOBS(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    ENTITYNAME(NAME_OF_ENTITY_OR_ENTITIES_TO_SELECT: TEXT): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    DEFAULTENTITY(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    PLAYERNAME(USERNAME_OF_PLAYER_TO_SELECT: TEXT): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    ALLENTITIES(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    DAMAGER(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    FILTERDISTANCE(
      NUMBER_OF_OBJECTS_TO_SELECT: undefined | NUMBER,
      LOCATION_S__TO_COMPARE_TO: LOCATION | LOCATION[]
    ): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    KILLER(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    VICTIM(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    ENTITIESCOND(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    ALLPLAYERS(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    RANDOMENTITY(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    MOBSCOND(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    RANDOMSELECTED(NUMBER_OF_OBJECTS_TO_SELECT: undefined | NUMBER): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    FILTERSELECT(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    PROJECTILE(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    DEFAULTPLAYER(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    PLAYERSCOND(): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    MOBNAME(NAME_OF_MOB_OR_MOBS_TO_SELECT: TEXT): void;

    /**
     * SELECT OBJECT
     *
     * Used to change the selection on the
     * current line of code, which will affect
     * the targets of most code blocks.
     *
     * \> Select all players on the plot
     * \> Select a player with a certain username
     * \> Select all players on the plot that meet
     * a certain condition
     */
    NONE(): void;
  }

  /**
   * PLAYER EVENT
   *
   * Used to execute code when something
   * is done by (or happens to) a player.
   *
   * \> Detect when a player joins the plot
   * \> Detect when a player right clicks
   * \> Detect when an entity dies
   */
  export interface event {
    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLOSEINV(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    STARTFLY(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PICKUPITEM(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    BREAKBLOCK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    STARTSPRINT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    MOBKILLPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    SHOOTBOW(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    STOPFLY(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    LEFTCLICK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PLAYERTAKEDMG(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PROJHIT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    KILLPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    RESPAWN(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    SWAPHANDS(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    DAMAGEENTITY(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    SNEAK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PLAYERHEAL(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLICKPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CONSUME(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    DEATH(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PLACEBLOCK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    WALK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    DISMOUNT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLOUDIMBUEPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    QUIT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    DROPITEM(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CHANGESLOT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLICKENTITY(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    UNSNEAK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLICKOWNINV(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    CLICKITEM(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    FALLDAMAGE(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    BREAKITEM(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    LOOPEVENT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    RIGHTCLICK(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    RIPTIDE(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    KILLMOB(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    JOIN(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    ENTITYDMGPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    STOPSPRINT(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    JUMP(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PROJDMGPLAYER(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    COMMAND(): void;

    /**
     * PLAYER EVENT
     *
     * Used to execute code when something
     * is done by (or happens to) a player.
     *
     * \> Detect when a player joins the plot
     * \> Detect when a player right clicks
     * \> Detect when an entity dies
     */
    PLAYERDMGPLAYER(): void;
  }

  /**
   * GAME ACTION
   *
   * Used to do something related to
   * the plot and everyone playing it.
   *
   * \> Spawn a particle effect
   * \> Set a block on the plot
   * \> Spawn a mob or other entity
   */
  export interface game_action {
    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    STARTLOOP(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETFURNACESPEED(FURNACE_LOCATION: LOCATION, TICKS: NUMBER): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    BLOCKDROPSON(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_CIRCLE(
      PARTICLE_TO_SPAWN: PARTICLE,
      CIRCLE_CENTER_LOCATION: LOCATION,
      CIRCLE_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    FILLCONTAINER(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_FILL_WITH: ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    BREAKBLOCK(BLOCK_S__TO_BREAK: LOCATION | LOCATION[]): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    L_PFX_SPIRAL(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    BONEMEAL(
      BLOCK_S__TO_BONE_MEAL: LOCATION | LOCATION[],
      NUMBER_OF_BONE_MEAL_APPLICATIONS: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    DEBUGSTACKTRACE(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    L_PFX_CLUSTER(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    FALLINGBLOCK(
      BLOCK_LOCATION: LOCATION,
      BLOCK_TYPE: undefined | BLOCK,
      BLOCK_METADATA: undefined | BLOCK_TAG | BLOCK_TAG[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    DISCORDWEBHOOK(WEBHOOK_URL: TEXT, MESSAGE_CONTENT: TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CHANGESIGN(
      SIGN_LOCATION: LOCATION,
      LINE_NUMBER: NUMBER,
      NEW_LINE_TEXT: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    TICKBLOCK(
      BLOCK_S__TO_TICK: LOCATION | LOCATION[],
      NUMBER_OF_TICKS: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    WEBREQUEST(URL_TO_REQUEST: TEXT, CONTENT_BODY: undefined | TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_SPIRAL(
      PARTICLE_TO_SPAWN: PARTICLE,
      SPIRAL_BASE_LOCATION: LOCATION,
      SPIRAL_LENGTH__DEFAULT______BLOCKS_: undefined | NUMBER,
      SPIRAL_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER,
      SPIRAL_PARTICLES__DEFAULT______PARTICLES_: undefined | NUMBER,
      SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CLEARSCBOARD(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    HIDESIDEBAR(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    REPLACEITEMS(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_REPLACE: undefined | ITEM | ITEM[],
      ITEM_TO_REPLACE_WITH: ITEM,
      AMOUNT_OF_ITEMS_TO_REPLACE: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETEVENTPROJ(
      PROJECTILE_TO_LAUNCH: undefined | PROJECTILE,
      PROJECTILE_NAME: undefined | TEXT,
      LAUNCH_TRAIL: undefined | PARTICLE
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    EXPLOSION(
      EXPLOSION_LOCATION: LOCATION,
      EXPLOSION_POWER_______DEFAULT_____: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNMOB(
      MOB_TYPE: SPAWN_EGG,
      LOCATION_TO_SPAWN_AT: LOCATION,
      MOB_HEALTH: undefined | NUMBER,
      MOB_NAME: undefined | TEXT,
      POTION_EFFECT_S_: undefined | POTION | POTION[],
      MOB_EQUIPMENT: undefined | ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_CIRCLE__A_(
      PARTICLE_TO_SPAWN: PARTICLE,
      CIRCLE_CENTER_LOCATION: LOCATION,
      CIRCLE_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER,
      ANIMATION_DURATION__TICKS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNENDEREYE(
      LOCATION_TO_SPAWN_AT: LOCATION,
      DESTINATION: undefined | LOCATION,
      LIFESPAN__TICKS_: undefined | NUMBER,
      CUSTOM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SHOWSIDEBAR(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNPOTIONCLOUD(
      LOCATION_TO_SPAWN_AT: LOCATION,
      EFFECT_S__TO_APPLY: undefined | POTION | POTION[],
      CLOUD_RADIUS__BLOCKS_: undefined | NUMBER,
      CLOUD_DURATION__TICKS_: undefined | NUMBER,
      CUSTOM_PARTICLE: undefined | PARTICLE,
      CUSTOM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETBLOCKDATA(LOCATION: LOCATION, BLOCK_DATA: BLOCK_TAG | BLOCK_TAG[]): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_CLUSTER(
      PARTICLE_TO_SPAWN: PARTICLE,
      CLUSTER_CENTER_LOCATION: LOCATION,
      CLUSTER_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER,
      CLUSTER_DENSITY__PARTICLES_PER_BLOCK__DEFAULT_____: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_LINE(
      PARTICLE_TO_SPAWN: PARTICLE,
      LINE_START_LOCATION: LOCATION,
      LINE_END_LOCATION: LOCATION
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    LAUNCHPROJ(
      PROJECTILE_TO_LAUNCH: PROJECTILE,
      LAUNCH_POINT: LOCATION,
      PROJECTILE_NAME: undefined | TEXT,
      SPEED: undefined | NUMBER,
      INACCURACY__DEFAULT_____: undefined | NUMBER,
      LAUNCH_TRAIL: undefined | PARTICLE
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    FIREWORK(
      FIREWORK_TO_LAUNCH: ITEM,
      LOCATION_TO_SPAWN_AT: LOCATION,
      FIREWORK_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETEVENTDAMAGE(NEW_DAMAGE_AMOUNT: NUMBER): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETBLOCKGROWTH(LOCATION: LOCATION, GROWTH_STAGE: undefined | NUMBER): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    WAIT(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETCONTAINERNAME(CONTAINER_LOCATION: LOCATION, CONTAINER_NAME: TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNITEM(
      ITEM_S__TO_SPAWN: ITEM | ITEM[],
      LOCATION_TO_SPAWN_AT: LOCATION,
      ITEM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETHEAD(
      HEAD_LOCATION: LOCATION,
      HEAD_TO_SET_TO: ITEM,
      HEAD_OWNER: TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_RAY(
      PARTICLE_TO_SPAWN: PARTICLE,
      RAY_ORIGIN: LOCATION,
      RAY_LENGTH__DEFAULT______BLOCKS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    REMOVEHOLOGRAM(
      LOCATION_OF_HOLOGRAM_TO_REMOVE: LOCATION,
      TEXT_OF_HOLOGRAM_TO_REMOVE: TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PARTICLE_FX(
      PARTICLE_TO_SPAWN: PARTICLE,
      LOCATION_TO_PLAY_AT: LOCATION
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    REMOVEITEMS(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_REMOVE: ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNRNGITEM(
      ITEMS_TO_PICK_FROM: ITEM | ITEM[],
      LOCATION_TO_SPAWN_AT: LOCATION,
      ITEM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    FIREWORKEFFECT(
      FIREWORK_EXPLOSION_TO_PLAY: ITEM,
      LOCATION_TO_SPAWN_AT: LOCATION
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETCONTAINER(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_SET: ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETITEMINSLOT(
      CONTAINER_LOCATION: LOCATION,
      ITEM_TO_SET: undefined | ITEM,
      SLOT_TO_SET: NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    UNCANCELEVENT(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNTNT(
      TNT_LOCATION: LOCATION,
      TNT_POWER_______DEFAULT_____: undefined | NUMBER,
      FUSE_DURATION__TICKS__DEFAULT______: undefined | NUMBER,
      CUSTOM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNARMORSTAND(
      ARMOR_STAND_LOCATION: LOCATION,
      NAME: undefined | TEXT,
      EQUIPMENT: undefined | ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNEXPORB(
      ORB_LOCATION: LOCATION,
      EXPERIENCE_AMOUNT: undefined | NUMBER,
      ORB_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETEVENTHEAL(NEW_HEALING_AMOUNT: NUMBER): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_PATH(
      PARTICLE_TO_SPAWN: PARTICLE,
      PATH_LOCATIONS: LOCATION | LOCATION[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    STOPLOOP(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    GENERATETREE(TREE_LOCATION: LOCATION): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CLEARCONTAINER(CONTAINER_LOCATION: LOCATION): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETSCOBJ(OBJECTIVE_NAME_____CHARACTERS_OR_LESS_: TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CANCELEVENT(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNCRYSTAL(
      LOCATION_TO_SPAWN_AT: LOCATION,
      CUSTOM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNFANGS(
      LOCATION_TO_SPAWN_AT: LOCATION,
      CUSTOM_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETEVENTSOUND(NEW_SOUND: SOUND): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETEVENTXP(EXPERIENCE: NUMBER): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    LOCKCONTAINER(
      CONTAINER_LOCATION: LOCATION,
      CONTAINER_LOCK_KEY: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_SPIRAL__A_(
      PARTICLE_TO_SPAWN: PARTICLE,
      SPIRAL_BASE_LOCATION: LOCATION,
      SPIRAL_LENGTH__DEFAULT______BLOCKS_: undefined | NUMBER,
      SPIRAL_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER,
      SPIRAL_PARTICLES__DEFAULT______PARTICLES_: undefined | NUMBER,
      SPIRAL_ROTATIONS__DEFAULT_____ROTATIONS_: undefined | NUMBER,
      ANIMATION_DURATION__TICKS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SPAWNVEHICLE(
      VEHICLE_TYPE: VEHICLE,
      VEHICLE_LOCATION: LOCATION,
      VEHICLE_NAME: undefined | TEXT
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    LIGHTNING(IMPACT_LOCATION: LOCATION): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETBLOCK(
      BLOCK_TO_SET: BLOCK,
      LOCATION: LOCATION,
      LOCATION____REGION_: undefined | LOCATION,
      BLOCK_DATA: undefined | BLOCK_TAG | BLOCK_TAG[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    REMOVESCORE(SCORE_NAME: TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CREATEHOLOGRAM(HOLOGRAM_LOCATION: LOCATION, HOLOGRAM_TEXT: TEXT): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    SETSCORE(
      SCORE_NAME_____CHARACTERS_OR_LESS_: TEXT,
      SCORE_VALUE__DEFAULT_____: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    COPYBLOCKS(
      REGION_LOCATION: LOCATION,
      REGION_LOCATION__: LOCATION,
      POSITION_TO_COPY_FROM: LOCATION,
      POSITION_TO_PASTE_TO: LOCATION
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    BLOCKDROPSOFF(): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_LINE__A_(
      PARTICLE_TO_SPAWN: PARTICLE,
      LINE_START_LOCATION: LOCATION,
      LINE_END_LOCATION: LOCATION,
      ANIMATION_DURATION__TICKS_: undefined | NUMBER
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    CLEARITEMS(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_CLEAR: ITEM | ITEM[]
    ): void;

    /**
     * GAME ACTION
     *
     * Used to do something related to
     * the plot and everyone playing it.
     *
     * \> Spawn a particle effect
     * \> Set a block on the plot
     * \> Spawn a mob or other entity
     */
    PFX_SPHERE(
      PARTICLE_TO_SPAWN: PARTICLE,
      SPHERE_CENTER_LOCATION: LOCATION,
      SPHERE_DIAMETER__DEFAULT_____BLOCKS_: undefined | NUMBER
    ): void;
  }

  /**
   * START PROCESS
   *
   * Used to start processes declared by
   * a Process block.
   * Waits inside the Process will not
   * stop this code line, unlike Functions.
   *
   *
   */
  export interface start_process {
    /**
     * START PROCESS
     *
     * Used to start processes declared by
     * a Process block.
     * Waits inside the Process will not
     * stop this code line, unlike Functions.
     *
     *
     */
    DYNAMIC(): void;
  }

  /**
   * PROCESS
   *
   * Used to execute code when the process
   * is started using a Start Process block.
   *
   *
   */
  export interface process {
    /**
     * PROCESS
     *
     * Used to execute code when the process
     * is started using a Start Process block.
     *
     *
     */
    DYNAMIC(): void;
  }

  /**
   * CONTROL
   *
   * Used to control the execution of
   * some or all code blocks after it.
   *
   * \> Pause the code sequence
   * for a certain duration
   * \> Stop the code sequence
   * \> Skip a repeat iteration
   */
  export interface control {
    /**
     * CONTROL
     *
     * Used to control the execution of
     * some or all code blocks after it.
     *
     * \> Pause the code sequence
     * for a certain duration
     * \> Stop the code sequence
     * \> Skip a repeat iteration
     */
    STOPREPEAT(): void;

    /**
     * CONTROL
     *
     * Used to control the execution of
     * some or all code blocks after it.
     *
     * \> Pause the code sequence
     * for a certain duration
     * \> Stop the code sequence
     * \> Skip a repeat iteration
     */
    RETURN(): void;

    /**
     * CONTROL
     *
     * Used to control the execution of
     * some or all code blocks after it.
     *
     * \> Pause the code sequence
     * for a certain duration
     * \> Stop the code sequence
     * \> Skip a repeat iteration
     */
    SKIP(): void;

    /**
     * CONTROL
     *
     * Used to control the execution of
     * some or all code blocks after it.
     *
     * \> Pause the code sequence
     * for a certain duration
     * \> Stop the code sequence
     * \> Skip a repeat iteration
     */
    END(): void;

    /**
     * CONTROL
     *
     * Used to control the execution of
     * some or all code blocks after it.
     *
     * \> Pause the code sequence
     * for a certain duration
     * \> Stop the code sequence
     * \> Skip a repeat iteration
     */
    WAIT(WAIT_DURATION: undefined | NUMBER): void;
  }

  /**
   * REPEAT
   *
   * Used to repeat the code inside it.
   *
   * \> Repeat code forever
   * \> Repeat code a certain number
   * of times
   * \> Repeat code until a certain
   * condition is met
   */
  export interface repeat {
    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    ADJACENT(
      THE_CURRENT_BLOCK_LOCATION_EACH_ITERATION: VARIABLE,
      CENTER_BLOCK: LOCATION
    ): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    SPHERE(
      VARIABLE_TO_SET: VARIABLE,
      SPHERE_CENTER: LOCATION,
      SPHERE_RADIUS: NUMBER,
      SPHERE_POINTS: NUMBER
    ): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    FOREVER(): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    MULTIPLE(
      GETS_THE_CURRENT_INDEX_EACH_ITERATION: undefined | VARIABLE,
      AMOUNT: NUMBER
    ): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    GRID(
      GETS_THE_CURRENT_BLOCK_EACH_ITERATION: VARIABLE,
      START_OF_REGION: LOCATION,
      END_OF_REGION: LOCATION
    ): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    WHILE(): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    RANGE(
      GETS_THE_CURRENT_NUMBER_EACH_ITERATION: undefined | VARIABLE,
      START_OF_RANGE: NUMBER,
      END_OF_RANGE: NUMBER,
      INTERVAL: undefined | NUMBER
    ): void;

    /**
     * REPEAT
     *
     * Used to repeat the code inside it.
     *
     * \> Repeat code forever
     * \> Repeat code a certain number
     * of times
     * \> Repeat code until a certain
     * condition is met
     */
    FOREACH(
      GETS_THE_CURRENT_VALUE_EACH_ITERATION: VARIABLE,
      LIST_TO_REPEAT_THROUGH: LIST
    ): void;
  }

  /**
   * IF GAME
   *
   * Used to execute the code inside
   * it if a certain condition related
   * to the plot is met.
   *
   * \> Check if a container has all of
   * a certain set of items
   * \> Check if a sign's text contains
   * a certain text
   * \> Check if a block at a certain
   * location is a certain block
   */
  export interface if_game {
    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    SIGNHASTXT(SIGN_LOCATION: LOCATION, TEXT_TO_CHECK_FOR: TEXT | TEXT[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    HASROOMFORITEM(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_CHECK: undefined | ITEM
    ): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    EVENTBLOCKEQUALS(BLOCK_S__TO_CHECK_FOR: BLOCK | BLOCK[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    COMMANDEQUALS(TEXT_S__TO_CHECK_FOR: TEXT | TEXT[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    EVENTITEMEQUALS(ITEM_S__TO_CHECK_FOR: ITEM | ITEM[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    CONTAINERHAS(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_CHECK_FOR: ITEM | ITEM[]
    ): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    BLOCKEQUALS(
      CHECK_LOCATION: LOCATION,
      BLOCK_S__TO_CHECK_FOR: undefined | BLOCK | BLOCK[],
      BLOCK_DATA: undefined | BLOCK_TAG | BLOCK_TAG[]
    ): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    BLOCKPOWERED(CHECK_LOCATION_S_: LOCATION | LOCATION[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    HASPLAYER(NAME_OR_UUID: TEXT | TEXT[]): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    CONTAINERHASALL(
      CONTAINER_LOCATION: LOCATION,
      ITEM_S__TO_CHECK_FOR: ITEM | ITEM[]
    ): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    CMDARGEQUALS(
      TEXT_S__TO_CHECK_FOR: TEXT | TEXT[],
      ARGUMENT_NUMBER: NUMBER
    ): void;

    /**
     * IF GAME
     *
     * Used to execute the code inside
     * it if a certain condition related
     * to the plot is met.
     *
     * \> Check if a container has all of
     * a certain set of items
     * \> Check if a sign's text contains
     * a certain text
     * \> Check if a block at a certain
     * location is a certain block
     */
    EVENTCANCELLED(): void;
  }
}
