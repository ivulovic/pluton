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

  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();
  const handleSubmit = (message: Message): void => {
    dispatch(actions.prompt(message));
  };
  return (
    <div className="home-page">
      <Chat messages={messages} />
      <Form onSubmit={handleSubmit} />
    </div>
  );
}
