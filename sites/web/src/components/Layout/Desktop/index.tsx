import { PropsWithChildren } from "react";

import Header from "@web/components/Header";
import "./style.scss";

export default function DesktopLayout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div>
      <Header type="desktop" />
      {children}
    </div>
  );
}
