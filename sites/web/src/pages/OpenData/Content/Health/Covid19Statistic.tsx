export default function Covid19Statistic(): JSX.Element {
  return (
    <div>
      <h1 className="section-title">COVID-19 statistika</h1>
      <h3 className="section-subtitle">Dnevni i mesečni podaci o statusu virusa Korona u Srbiji.</h3>

      <div className="divider"></div>

      <h2 className="section-subtitle">API:</h2>

      <p className="paragraph">
        <code>
          <pre>GET https://pluton.rs/api/v1/open-source/covid-19-daily-statistic</pre>
        </code>
      </p>
      <h2 className="section-subtitle">Format podataka:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
  data: Array<DailyData>;
  fetchTime: number;
}

interface DailyData {
  date: string;
  onRespiratorForDate: number;
  hospitalizedForDate: number;
  sumHospitalized: number;
  positiveForDate: number;
  sumPositive: number;
  testedForDate: number;
  sumTested: number;
  deathsForDate: number;
  sumDeaths: number;
  percentOfInfectedComparedWithTestedForDate: number;
  percentOfInfectedSumComparedWithTestedSum: number;
  percentOfHospitalizedComparedWithInfectedSumForDate: number;
  percentOnRespiratorComparedWithHospitalizedForDate: number;
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
        "date": "2020-3-7",
        "onRespiratorForDate": 0,
        "hospitalizedForDate": 1,
        "sumHospitalized": 2,
        "positiveForDate": 0,
        "sumPositive": 1,
        "testedForDate": 24,
        "sumTested": 91,
        "deathsForDate": 0,
        "sumDeaths": 0,
        "percentOfInfectedComparedWithTestedForDate": 0,
        "percentOfInfectedSumComparedWithTestedSum": 1.1,
        "percentOfHospitalizedComparedWithInfectedSumForDate": 100,
        "percentOnRespiratorComparedWithHospitalizedForDate": 0
      },
      ...
  ]
}`}
          </pre>
        </code>
      </p>

      {/**  */}

      <div className="divider"></div>

      <h2 className="section-subtitle">API:</h2>

      <p className="paragraph">
        <code>
          <pre>GET https://pluton.rs/api/v1/open-source/covid-19-monthly-statistic</pre>
        </code>
      </p>
      <h2 className="section-subtitle">Format podataka:</h2>
      <p className="paragraph">
        <code>
          <pre>
            {`{
  data: Array<MonthlyData>;
  fetchTime: number;
}

interface MonthlyData {
  date: string;
  onRespiratorForDate: number;
  hospitalizedForDate: number;
  sumHospitalized: number;
  positiveForDate: number;
  sumPositive: number;
  testedForDate: number;
  sumTested: number;
  deathsForDate: number;
  sumDeaths: number;
  percentOfInfectedComparedWithTestedForDate: number;
  percentOfInfectedSumComparedWithTestedSum: number;
  percentOfHospitalizedComparedWithInfectedSumForDate: number;
  percentOnRespiratorComparedWithHospitalizedForDate: number;
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
        "date": "2020-4-30",
        "onRespiratorForDate": 71,
        "hospitalizedForDate": 2479,
        "sumHospitalized": 78418,
        "positiveForDate": 285,
        "sumPositive": 9009,
        "testedForDate": 6703,
        "sumTested": 85645,
        "deathsForDate": 6,
        "sumDeaths": 179,
        "percentOfInfectedComparedWithTestedForDate": 4.25,
        "percentOfInfectedSumComparedWithTestedSum": 10.52,
        "percentOfHospitalizedComparedWithInfectedSumForDate": 27.52,
        "percentOnRespiratorComparedWithHospitalizedForDate": 2.86
      },
      ...
  ]
}`}
          </pre>
        </code>
      </p>

      {/** */}
    </div>
  );
}
