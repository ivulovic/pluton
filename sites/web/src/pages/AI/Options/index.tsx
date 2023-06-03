import { useRef, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

import { useDispatch, useSelector } from "@web/core/redux";
import useOutsideClick from "@web/hooks/useOutsideClick";
import { selectConversations } from "@web/slices/persisted/selectors";

import { actions } from "../slice";
import "./style.scss";
import { OptionProps } from "../types";

export default function Options(props: OptionProps): JSX.Element {
  const { onClose, onSubmit, onConversationRemove } = props;
  const ref = useRef<any>();
  const dispatch = useDispatch();
  const conversations = useSelector(selectConversations);
  const [name, setName] = useState("");
  useOutsideClick(ref, onClose);

  const handleSelectConversation = (e: any) => {
    dispatch(actions.setMessages(conversations.find((c) => c.id === e.target.id)?.messages || []));
    onClose();
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (name) {
      onSubmit({ name });
      onClose();
    }
  };

  const handleChange = (e: any): void => {
    setName(e.target.value);
  };

  return (
    <div className="options" ref={ref}>
      <div className="options-wrapper">
        <div className="header">
          <h1>Konverzacije</h1>
        </div>

        <form className="controls" onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={name} name="name" placeholder="Unesite ime trenutne konverzacije da biste je sačuvali..." autoComplete="off" />
        </form>

        <div className="pre-content">
          <h2>Lista prethodnih konverzacija</h2>
        </div>
        <div className="content">
          <div className="conversation-list">
            {conversations.length === 0 ? (
              <div className="conversation">
                <div className="conversation-name">Nemate sačuvanih konverzacija.</div>
              </div>
            ) : (
              conversations.map(({ id, name }) => (
                <div className="conversation" key={id}>
                  <div className="conversation-name clickable" role="presentation" onClick={handleSelectConversation} id={id}>
                    {name}
                  </div>
                  <button onClick={(): void => onConversationRemove(id)}>
                    <RiDeleteBin7Line />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="footer">
        <button>
          <BiMessageDetail />
          Konverzacije
          {/* BiSolidMessageDetail */}
        </button>
      </div>
    </div>
  );
}
