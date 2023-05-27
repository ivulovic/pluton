import { ChangeEvent, useState } from "react";

import "./style.scss";
import { FormProps, Message, MessageType } from "../types";

export default function Form(props: FormProps): JSX.Element {
  const getInitialState = (): Message => ({
    id: Math.random().toString(36),
    content: "",
    type: MessageType.Prompt,
  });
  const [state, setState] = useState(getInitialState());

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    props.onSubmit(state);
    setState(getInitialState());
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input autoComplete="off" value={state.content} placeholder="Send a message..." className="text-input" name="content" onChange={handleChange} />
    </form>
  );
}
