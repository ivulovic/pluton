import { PropsWithChildren } from "react";

import Header from "@web/components/Header";
import "./style.scss";

export default function DefaultLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="default-layout">
      <Header type="default" />
      <div className="page-content">{children}</div>
    </div>
  );
}
