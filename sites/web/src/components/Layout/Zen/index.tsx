import { PropsWithChildren } from "react";

import Header from "@web/components/Header";
import "./style.scss";

export default function ZenLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="zen-layout">
      <Header type="zen" />
      <div className="page-content">{children}</div>
    </div>
  );
}
