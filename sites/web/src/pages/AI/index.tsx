import { useEffect, useMemo, useState } from "react";

import { useDispatch, useReducer, useSaga, useSelector } from "@web/core";

import { actions as persistedActions } from "../../slices/persisted";

import Chat from "./Chat";
import { CHAT_SCOPE } from "./constants";
import Form from "./Form";
import Options from "./Options";
import saga from "./saga";
import { selectMessages } from "./selectors";
import { actions, reducer } from "./slice";
import { Message } from "./types";

import "./style.scss";

export default function AIPage(): JSX.Element {
  useReducer({ key: CHAT_SCOPE, reducer });
  useSaga({ key: CHAT_SCOPE, saga: saga });

  const [showOptions, setShowOptions] = useState(false);

  const aiStream = useMemo(
    () =>
      new EventSource("/api/stream", {
        withCredentials: true,
      }),
    [],
  );

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  const handleSubmit = (message: Message): void => {
    dispatch(actions.prompt(message));
  };

  useEffect(() => {
    aiStream.addEventListener("ai", (e) => {
      dispatch(actions.onStreamMessage(JSON.parse(e.data)));
    });
    return () => {
      aiStream.close();
    };
  }, []);

  const handleOpenOptions = (): void => {
    setShowOptions(true);
  };

  const handleCloseOptions = (): void => {
    setShowOptions(false);
  };

  const handleOptionsSubmit = (conversation: { name: string }): void => {
    dispatch(
      persistedActions.storeConversation({
        id: Math.random().toString(36),
        name: conversation.name,
        messages: messages,
      }),
    );
  };

  const handleConversationRemove = (id: string): void => {
    dispatch(persistedActions.removeConversation({ id }));
  };

  return (
    <div className="home-page">
      <Chat messages={messages} className={showOptions ? "zoom" : ""} />
      {showOptions && <Options onConversationRemove={handleConversationRemove} onSubmit={handleOptionsSubmit} onClose={handleCloseOptions} />}
      <div className={`${showOptions ? "zoom" : ""}`}>
        <Form handleOpenOptions={handleOpenOptions} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
