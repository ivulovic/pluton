import { useEffect, useMemo } from "react";

import { useDispatch, useReducer, useSaga, useSelector } from "@web/core";

import Chat from "./Chat";
import { CHAT_SCOPE } from "./constants";
import Form from "./Form";
import saga from "./saga";
import { selectMessages } from "./selectors";
import { actions, reducer } from "./slice";
import { Message } from "./types";
import "./style.scss";

export default function AIPage(): JSX.Element {
  useReducer({ key: CHAT_SCOPE, reducer });
  useSaga({ key: CHAT_SCOPE, saga: saga });

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

  return (
    <div className="home-page">
      <Chat messages={messages} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
