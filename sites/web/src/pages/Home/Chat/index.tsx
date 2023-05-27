import { BiPaperPlane } from "react-icons/bi";
import { BsStars } from "react-icons/bs";

import { ChatProps, MessageType } from "../types";
import "./style.scss";

export default function Chat(props: ChatProps): JSX.Element {
  const { messages } = props;
  return (
    <div className="chat">
      {messages.map((msg) => {
        return (
          <div key={msg.id} className={`message ${msg.type}`}>
            <div className="avatar">
              {msg.type === MessageType.Prompt ? <BiPaperPlane /> : <BsStars />}
              {/* {msg.type.charAt(0)} */}
            </div>
            <div className={`content`}>{msg.content}</div>
          </div>
        );
      })}
    </div>
  );
}
