import withDocumentationLinks from "../withDocumentationLinks";

function Covid19Clinic(): JSX.Element {
  return (
    <div>
      <h1 className="section-title">COVID-19 ambulante</h1>
      <h3 className="section-subtitle">Podaci o zdravstvenim ustanovama koje rade u COVID-19 režimu.</h3>

      <div className="divider"></div>

      <h2 className="section-subtitle">API:</h2>

      <p className="paragraph">
        <code>
          <pre>GET https://pluton.rs/api/v1/open-source/covid-19-ambulances</pre>
        </code>
      </p>
      <h2 className="section-subtitle">Format podataka:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
  data: Array<CovidAmbulance>;
  fetchTime: number;
}

interface CovidAmbulance {
  id: number;
  name: string;
  city: string;
  memo: string;
  type: string;
  street: string;
  homeNo: string;
  phone1: string;
  phone2: string;
  latitude: number;
  longitude: number;
}`}
          </pre>
        </code>
      </p>
      <h2 className="section-subtitle">Primer:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
"fetchTime": 1685879823004,
"data": [
    {
        "id": 171,
        "type": "COVID_AMBULANCE",
        "name": "ДОМ ЗДРАВЉА ВРАЧАР",
        "city": "БЕОГРАД",
        "street": "БОЈАНСКА",
        "homeNo": "16",
        "longitude": 20.48418,
        "latitude": 44.79726,
        "phone1": "+381 698851684",
        "phone2": "+381 698851636",
        "memo": "радни дан: 7-22 викенд: 7-22"
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

export default withDocumentationLinks(Covid19Clinic);
