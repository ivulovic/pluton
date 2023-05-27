export const enum MessageType {
  Prompt = "prompt",
  Assistant = "assistant",
}
export interface Message {
  id: string;
  content: string;
  type: MessageType;
}

export interface ChatProps {
  messages: Array<Message>;
}

export interface FormProps {
  onSubmit(message: Message): void;
}
