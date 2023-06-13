import withVisualizationLinks from "./withVisualizationLinks";

function OverviewVisualization(): JSX.Element {
  return (
    <div className="info-content">
      <h1 className="section-title">Vizuelizacija</h1>
      <h3 className="section-subtitle">Vizuelizovani otvoreni podaci</h3>
      <div className="divider"></div>

      <h2 className="section-subtitle">O informacijama</h2>

      <p className="paragraph">
        Informacije koje ćete ovde moći da vidite su vizuelizovan prikaz otvorenih podataka. Ovo je samo jedna od mnogobrojnih mogućih prikaza dostupnih podataka.
      </p>
    </div>
  );
}

export default withVisualizationLinks(OverviewVisualization);
