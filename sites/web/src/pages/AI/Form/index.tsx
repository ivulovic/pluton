import { ChangeEvent, useEffect, useRef, useState } from "react";

import "./style.scss";
import { FormProps, Message, Role } from "../types";

export default function Form(props: FormProps): JSX.Element {
  const inputRef = useRef<any>();
  const getInitialState = (): Message => ({
    id: Math.random().toString(36),
    content: "",
    role: Role.User,
  });
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
      <input ref={inputRef} autoComplete="off" value={state.content} placeholder="Informacije u sekundi..." className="text-input" name="content" onChange={handleChange} />
    </form>
  );
}
