export const enum Role {
  System = "system",
  User = "user",
  Assistant = "assistant",
}
export interface Message {
  content: string;
  role: Role;
}

export interface ChatProps {
  messages: Array<Message>;
}

export interface FormProps {
  onSubmit(message: Message): void;
}

export interface ChatState {
  loading: boolean;
  messages: Array<Message>;
}
