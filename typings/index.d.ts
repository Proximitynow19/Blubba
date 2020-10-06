export interface message {
  send(message: Message | string): void;
  hover(message: message | string, hover: message | string): void;
  sendDialogue(messages: (Message | string)[]): void;
}

export class Message {
  message: string;
  constructor(message: string);
}

export function on(event: EventType, callback: Function): void;

export enum EventType {
  JOIN,
  LEAVE,
}
