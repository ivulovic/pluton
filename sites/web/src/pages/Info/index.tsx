import { Outlet } from "react-router-dom";

import { useReducer, useSaga } from "@web/core";

import { INFO_SCOPE } from "./constants";
import Nav from "./Nav";
import saga from "./saga";
import { reducer } from "./slice";

import "./style.scss";

export default function InfoPage(): JSX.Element {
  useReducer({ key: INFO_SCOPE, reducer });
  useSaga({ key: INFO_SCOPE, saga: saga });

  return (
    <div className="info">
      <Nav />
      <Outlet />
    </div>
  );
}
