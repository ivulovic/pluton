import { Outlet } from "react-router-dom";

import { useReducer, useSaga } from "@web/core";

import { INFO_SCOPE } from "./constants";
import saga from "./saga";
import { reducer } from "./slice";

import "./style.scss";

export default function VisualizationPage(): JSX.Element {
  useReducer({ key: INFO_SCOPE, reducer });
  useSaga({ key: INFO_SCOPE, saga: saga });

  return <Outlet />;
}
