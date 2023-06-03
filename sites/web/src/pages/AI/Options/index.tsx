import { useRef } from "react";
import { BiMessageDetail } from "react-icons/bi";
// import { RiChatSettingsLine } from "react-icons/ri";

import { Modal } from "@web/components";
import useOutsideClick from "@web/hooks/useOutsideClick";

import { OptionProps } from "../types";

import Button from "./Button";
import ConversationOptions from "./Conversation";
import Footer from "./Footer";

export default function Options(props: OptionProps): JSX.Element {
  const { onClose } = props;
  const ref = useRef<any>();
  useOutsideClick(ref, onClose);

  return (
    <div>
      <Modal
        ref={ref}
        title="Konverzacije"
        icon={BiMessageDetail}
        footer={(): JSX.Element => (
          <Footer>
            {/* <Button title="Podešavanja" icon={RiChatSettingsLine} /> */}
            <Button title="Konverzacije" icon={BiMessageDetail} />
          </Footer>
        )}
      >
        <ConversationOptions onClose={onClose} />
      </Modal>
    </div>
  );
}
