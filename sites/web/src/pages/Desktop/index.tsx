import Background from "./Background";
import DesktopShell from "./DesktopShell";
import Onboarding from "./Onboarding";
import "./style.scss";

export default function Desktop(): JSX.Element {
  return (
    <div className="public-desktop">
      <Background />
      <DesktopShell>
        <Onboarding />
      </DesktopShell>
    </div>
  );
}
