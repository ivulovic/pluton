import { useState } from "react";

import Chat from "./Chat";
import Form from "./Form";
import { Message, MessageType } from "./types";
import "./style.scss";

export default function HomePage(): JSX.Element {
  const initialMessage = {
    // content: "Hello! I'm here to find answers for you. How can I help you?",
    content: "Здраво! Овде сам да одговорим на сва твоја питања. Како могу да помогнем?",
    type: MessageType.Assistant,
    id: Math.random().toString(36),
  };
  const [messages, setMessages] = useState<Array<Message>>([initialMessage]);
  const handleSubmit = (message: Message): void => {
    setMessages([...messages, message, { ...message, type: MessageType.Assistant, id: Math.random().toString(36) }]);
  };
  return (
    <div className="home-page">
      <Chat messages={messages} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
