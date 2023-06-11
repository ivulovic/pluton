import { useReducer, useSaga } from "@web/core";

import { OPEN_SOURCE_SCOPE } from "./constants";
import Content from "./Content";
import Nav from "./Nav";
import saga from "./saga";
import { reducer } from "./slice";
import "./style.scss";

export default function OpenSourcePage(): JSX.Element {
  useReducer({ key: OPEN_SOURCE_SCOPE, reducer });
  useSaga({ key: OPEN_SOURCE_SCOPE, saga: saga });

  return (
    <div className="open-source">
      <Nav />
      <Content />
    </div>
  );
}
