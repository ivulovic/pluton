import withDocumentationLinks from "../withDocumentationLinks";

function AirQuality(): JSX.Element {
  return (
    <div>
      <h1 className="section-title">Kvalitet vazduha</h1>
      <h3 className="section-subtitle">Podaci o zagađenju vazduha u mestima u kojima su postavljene merne stanice.</h3>

      <div className="divider"></div>

      <h2 className="section-subtitle">API:</h2>

      <p className="paragraph">
        <code>
          <pre>GET https://pluton.rs/api/v1/open-source/air-quality</pre>
        </code>
      </p>
      <h2 className="section-subtitle">Format podataka:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
  data: Array<Station>;
  fetchTime: number;
}

interface Station {
  station: StationData;
  value: number;
}

interface StationData {
  id: number;
  name: string;
  city: string;
  latitude: string;
  longitude: string;
}`}
          </pre>
        </code>
      </p>
      <h2 className="section-subtitle">Primer:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
  "fetchTime": 1685879823009,
  "data": [
      {
          "station": {
              "id": 2,
              "name": "Нови Сад - Спенс",
              "latitude": "45.245065",
              "longitude": "19.84119",
              "city": "Нови Сад"
          },
          "value": 15.858813559322
      },
      ...
  ]
}`}
          </pre>
        </code>
      </p>
    </div>
  );
}

export default withDocumentationLinks(AirQuality);
