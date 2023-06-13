import { PropsWithChildren } from "react";

import Header from "@web/components/Header";

import "./style.scss";
import OpenDataLinks from "./Links";
import OpenDataLogo from "./Logo";

export default function OpenDataLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="open-data-layout">
      <Header type="default" links={OpenDataLinks} logo={OpenDataLogo} />
      <div className="page-content">{children}</div>
    </div>
  );
}
