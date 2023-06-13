import { useEffect } from "react";

import { useDispatch } from "@web/core/redux";

import { actions } from "../../slice";
import withVisualizationLinks from "../../withVisualizationLinks";

import CasesByMonth from "./CasesByMonth";
import CasesOvertime from "./CasesOvertime";
import MonthlyCases from "./MonthlyCases";
import RecentCases from "./RecentCases";

function Covid19Statistic(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCovid19DailyStatistic());
    dispatch(actions.getCovid19MonthlyStatistic());
  }, []);

  return (
    <div className="info-content">
      <h1 className="section-title">COVID-19 statistika</h1>
      <h3 className="section-subtitle">Dnevni i mesečni podaci o statusu virusa Korona u Srbiji.</h3>

      <div className="divider"></div>
      <RecentCases />
      <MonthlyCases />
      <CasesOvertime />
      <CasesByMonth />
    </div>
  );
}

export default withVisualizationLinks(Covid19Statistic);
