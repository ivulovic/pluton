import BackgroundSpaceman from "../BackgroundSpaceman";
import "./style.scss";

export default function Onboarding(): JSX.Element {
  return (
    <div className="onboarding">
      <BackgroundSpaceman>
        <h1>
          <span>Svet</span> <span>korisnih</span> <span>informacija</span>
          <h2>Nauči. Rasti. Deli.</h2>
        </h1>
      </BackgroundSpaceman>
    </div>
  );
}
