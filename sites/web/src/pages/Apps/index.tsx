import { useReducer, useSaga } from "@web/core";

import { APPS_SCOPE } from "./constants";
import saga from "./saga";
import { reducer } from "./slice";

import "./style.scss";

export default function AppsPage(): JSX.Element {
  useReducer({ key: APPS_SCOPE, reducer });
  useSaga({ key: APPS_SCOPE, saga: saga });

  return <div className="apps-page">Apps</div>;
}
