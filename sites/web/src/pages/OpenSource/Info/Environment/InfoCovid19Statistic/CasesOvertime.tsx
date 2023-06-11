import { Axis, Chart, Geom, Tooltip } from "bizcharts";
import { useMemo } from "react";

import { useSelector } from "@web/core/redux";
import { selectLoading, selectMonthlyStatistic } from "@web/pages/OpenSource/selectors";

import Loading from "./Loading";

interface OvertimeCase {
  key: string;
  date: number;
  value: number;
}

export default function CasesOvertime(): JSX.Element {
  const { monthly: monthlyLoading } = useSelector(selectLoading);
  const monthly = useSelector(selectMonthlyStatistic);
  const label = {
    autoRotate: true,
    style: {
      fontSize: 8,
    },
  };
  const overtimeData = useMemo((): Array<OvertimeCase> => {
    const result: Array<OvertimeCase> = [];

    if (!monthly) {
      return result;
    }
    Object.values(monthly.data).forEach((x) => {
      const d = new Date(x.date);
      const ts = Date.UTC(d.getFullYear(), d.getMonth(), 1);
      result.push({
        date: ts,
        key: "sumDeaths",
        value: x.sumDeaths,
      });
      result.push({
        date: ts,
        key: "sumTested",
        value: x.sumTested,
      });
      result.push({
        date: ts,
        key: "sumPositive",
        value: x.sumPositive,
      });
      result.push({
        date: ts,
        key: "sumHospitalized",
        value: x.sumHospitalized,
      });
    });
    return result;
  }, [monthly]);
  return (
    <div>
      <h3 className="section-subtitle">Ponašanje virusa tokom vremena</h3>
      <div className="grid-1x1">
        <Loading isLoading={monthlyLoading}>
          <Chart
            scale={{
              date: {
                nice: true,
                type: "time",
                tickCount: overtimeData.length,
              },
            }}
            autoFit
            height={400}
            data={overtimeData}
          >
            {/* <Point position="date*value" color="key" size={2} /> */}
            <Geom type="line" position="date*value" color="key" />
            <Tooltip shared showCrosshairs />
            <Axis name="date" grid={null} label={label} />
          </Chart>
        </Loading>
      </div>
    </div>
  );
}
