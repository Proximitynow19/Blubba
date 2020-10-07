export interface message {
  send(message: Message | string): void;
  hover(message: message | string, hover: message | string): void;
  sendDialogue(messages: (Message | string)[]): void;
  empty: string; // This is the equivalent to /text []
}

export class Message {
  message: string;
  constructor(message: string);
}

export function on(event: EventType, callback: Function): void;

export enum EventType {
  PLAYER_JOIN_GAME,
  PLAYER_QUIT_GAME,
  PLAYER_COMMAND,
  PLAYER_RIGHT_CLICK,
  PLAYER_LEFT_CLICK,
  PLAYER_RIGHT_CLICK_ENTITY,
  PLAYER_RIGHT_CLICK_PLAYER,
  PLAYER_PLACE_BLOCK,
  PLAYER_BREAK_BLOCK,
  PLAYER_SWAP_HANDS,
  PLAYER_CHANGE_SLOT,
  PLAYER_WALK,
  PLAYER_JUMP,
  PLAYER_SNEAK,
  PLAYER_UNSNEAK,
  PLAYER_START_SPRINT,
  PLAYER_STOP_SPRINTING,
  PLAYER_START_FLIGHT,
  PLAYER_STOP_FLIGHT,
  PLAYER_RIPTIDE,
  PLAYER_DISMOUNT,
  PLAYER_CLICK_ITEM,
  PLAYER_CLICK_OWN_INVENTORY_ITEM,
  PLAYER_PICKUP_ITEM,
  PLAYER_DROP_ITEM,
  PLAYER_CONSUME_ITEM,
  PLAYER_BREAK_ITEM,
  PLAYER_CLOSE_INVENTORY,
  PLAYER_TAKE_DAMAGE,
  PLAYER_DAMAGE_PLAYER,
  ENTITY_DAMAGE_PLAYER,
  PLAYER_DAMAGE_ENTITY,
  PLAYER_HEAL,
  PLAYER_SHOOT_BOW,
  PLAYER_PROJECTILE_HIT,
  PROJECTILE_DAMAGE_PLAYER,
  POTION_CLOUD_IMBUE_PLAYER,
  PLAYER_DEATH,
  PLAYER_KILL_PLAYER,
  PLAYER_KILL_MOB,
  MOB_KILL_PLAYER,
  PLAYER_RESPAWN,
  ENTITY_DAMAGE_ENTITY,
  ENTITY_KILL_ENTITY,
  ENTITY_TAKE_DAMAGE,
  PROJECTILE_DAMAGE_ENTITY,
  PROJECTILE_KILL_ENTITY,
  ENTITY_DEATH,
  VEHICLE_TAKE_DAMAGE,
  BLOCK_FALL,
  FALLING_BLOCK_LAND,
}
