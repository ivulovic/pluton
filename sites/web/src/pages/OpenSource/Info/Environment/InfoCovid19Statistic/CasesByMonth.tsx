import { Axis, Chart, Interval, Tooltip } from "bizcharts";
import { useMemo } from "react";

import { useSelector } from "@web/core/redux";
import { selectLoading, selectMonthlyStatistic } from "@web/pages/OpenSource/selectors";

import Loading from "./Loading";

interface MonthlyCase {
  key: string;
  date: number;
  value: number;
}

export default function CasesByMonth(): JSX.Element {
  const { monthly: monthlyLoading } = useSelector(selectLoading);
  const monthly = useSelector(selectMonthlyStatistic);
  const label = {
    autoRotate: true,
    style: {
      fontSize: 8,
    },
  };
  const casesByMonth = useMemo((): Array<MonthlyCase> => {
    const result: Array<MonthlyCase> = [];

    if (!monthly) {
      return result;
    }
    const data = Object.values(monthly.data);
    data.forEach(({ sumPositive, sumDeaths, sumTested, sumHospitalized, date }, i) => {
      const d = new Date(date);
      const ts = Date.UTC(d.getFullYear(), d.getMonth(), 1);
      const confirmedValue = i === 0 ? sumPositive : sumPositive - data[i - 1].sumPositive;
      const deathsValue = i === 0 ? sumDeaths : sumDeaths - data[i - 1].sumDeaths;
      const testedValue = i === 0 ? sumTested : sumTested - data[i - 1].sumTested;
      const hospitalizedValue = i === 0 ? sumHospitalized : sumHospitalized - data[i - 1].sumHospitalized;
      result.push({
        date: ts,
        key: "confirmed",
        value: confirmedValue,
      });
      result.push({
        date: ts,
        key: "deaths",
        value: deathsValue,
      });
      result.push({
        date: ts,
        key: "tested",
        value: testedValue,
      });
      result.push({
        date: ts,
        key: "hospitalized",
        value: hospitalizedValue,
      });
    });
    return result;
  }, [monthly]);

  return (
    <div>
      <h3 className="section-subtitle">Prikaz statistike za svaki mesec pojedinacno</h3>
      <div className="grid-1x1">
        <Loading isLoading={monthlyLoading}>
          <Chart
            scale={{
              date: {
                nice: true,
                type: "time",
                tickCount: casesByMonth.length,
              },
            }}
            height={400}
            data={casesByMonth}
            autoFit
          >
            <Interval adjust={"stack"} position="date*value" color={"key"} />
            <Axis name="date" grid={null} label={label} />
            <Tooltip shared showCrosshairs />
          </Chart>
        </Loading>
      </div>
    </div>
  );
}
