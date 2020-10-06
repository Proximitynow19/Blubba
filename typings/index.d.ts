export interface message {
  send(message: Message | string);
}

export class Message {
  message: string;
  constructor(message: string);
}
