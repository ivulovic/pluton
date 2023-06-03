import { Message } from "@web/pages/AI/types";

export interface Conversation {
  id: string;
  name: string;
  messages: Array<Message>;
}

export interface PersistedState {
  conversations: Record<string, Conversation>;
}
