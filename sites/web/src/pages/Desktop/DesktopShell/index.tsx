import { PropsWithChildren } from "react";
import "./style.scss";

export default function DesktopShell({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <div className="desktop-shell">
      <div className="desktop-main">
        <div className="desktop-main-content-wrapper">
          <div className="desktop-main-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
