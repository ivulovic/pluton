import { ChatState, Role } from "./types";

export const CHAT_SCOPE = "chat";

export const initialState: ChatState = {
  loading: false,
  messages: [
    {
      role: Role.System,
      // content: "Здраво! Ја сам твој асистент Плутон! Како могу да помогнем?",
      content: "Zdravo! Ja sam tvoj asistent Pluton. Kako mogu da pomognem?",
    },
  ],
};
