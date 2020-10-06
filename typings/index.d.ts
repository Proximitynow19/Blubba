export interface message {
  send(message: Message | string);
  hover(message: message | string, hover: message | string);
  sendDialogue(messages: (message | string)[]);
}

export class Message {
  message: string;
  constructor(message: string);
}
