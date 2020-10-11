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

export class Value {
  value: any;
}

export class TEXT extends Value {
  constructor(value: TEXT | string | VARIABLE);
}

export class NUMBER extends Value {
  constructor(value: NUMBER | number | VARIABLE);
}

export class LOCATION extends Value {
  constructor(
    x: number | VARIABLE,
    y: number | VARIABLE,
    z: number | VARIABLE,
    pitch: number | undefined | VARIABLE,
    yaw: number | undefined | VARIABLE
  );
}

export class VARIABLE extends Value {
  constructor(key: TEXT | string | VARIABLE, value: ANY_TYPE);
}

export class PARTICLE extends Value {
  constructor(value: string | ITEM | VARIABLE);
}

export class POTION extends Value {
  constructor(
    value: string | ITEM | VARIABLE,
    length: number | undefined | VARIABLE,
    amplifier: number | undefined | VARIABLE
  );
}

export class PROJECTILE extends Value {
  constructor(value: string | ITEM | VARIABLE);
}

export class ITEM extends Value {
  constructor(value: string | ITEM | VARIABLE);
}

export type SOUND = string;
export type LIST = any[];
export type BLOCK_TAG = string;
export type BLOCK = string | ITEM;
export type SPAWN_EGG = string | ITEM;
export type ENTITY_TYPE = string | ITEM;
export type VEHICLE = string | ITEM;
