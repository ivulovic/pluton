import withDocumentationLinks from "./withDocumentationLinks";

function Overview(): JSX.Element {
  return (
    <div>
      <h1 className="section-title">Otvoreni podaci</h1>
      <h3 className="section-subtitle">Podatke možete da koristite potpuno besplatno.</h3>

      <div className="divider"></div>

      <h2 className="section-subtitle">O podacima</h2>

      <p className="paragraph">
        Podaci koje ćete ovde naći su preuzeti sa{" "}
        <a target="_blank" href="https://data.gov.rs">
          Portala otvorenih podataka Republike Srbije
        </a>
        .
      </p>
      <p className="paragraph">
        Skupovi podataka koje ćete ovde naći su prebačeni iz originalno tekstualnih fajlova u JSON format, agregirani po odredjenim vremenskim periodima, a potom redistribuirani i
        napravljeni ponovo dostupnim za dalje preuzimanje i upotrebu.
      </p>
      <p className="paragraph">Podaci bivaju osveženi na svakih sat vremena.</p>
    </div>
  );
}

export default withDocumentationLinks(Overview);
