import { Area, Axis, Chart } from "bizcharts";
import { useMemo } from "react";

import { useSelector } from "@web/core/redux";
import { selectDailyStatistic, selectLoading, selectMonthlyStatistic } from "@web/pages/OpenSource/selectors";
import { Statistic } from "@web/pages/OpenSource/types";

import ChartCard from "./ChartCard";
import Loading from "./Loading";

export default function MonthlyCases(): JSX.Element {
  const { monthly: monthlyLoading } = useSelector(selectLoading);
  const monthlyStatistic = useSelector(selectMonthlyStatistic);
  const dailyStatistic = useSelector(selectDailyStatistic);

  const lastRecord = useMemo(() => {
    if (!dailyStatistic) {
      return undefined;
    }
    const daily = Object.values(dailyStatistic.data);

    const lastRecord = daily[daily.length - 1] || daily[daily.length - 2] || daily[daily.length - 3];
    return lastRecord;
  }, [dailyStatistic]);

  const data = useMemo(() => {
    if (!monthlyStatistic) {
      return [];
    }
    return Object.values(monthlyStatistic.data);
  }, [monthlyStatistic]);

  const getMonthlyScaleConfig = (key: keyof Statistic): any => {
    if (!monthlyStatistic) {
      return scale;
    }
    // const min = Math.min(...monthly.data.map((x) => +x[key]));
    return {
      ...scale,
      [key]: {
        nice: true,
        tickCount: data.length,
      },
    };
  };

  const label = {
    autoRotate: true,
    style: {
      fontSize: 8,
    },
  };

  const scale = {
    date: {
      range: [0, 1],
      type: "time",
      nice: true,
      tickCount: data.length,
    },
  };

  return (
    <div>
      <h3 className="section-subtitle">Podaci na ukupnom nivou</h3>
      <div className="grid-1x1">
        <Loading isLoading={monthlyLoading}>
          <ChartCard title="Ukupan broj testiranih lica" value={lastRecord?.sumTested}>
            <Chart scale={getMonthlyScaleConfig("sumTested")} height={200} data={data} autoFit>
              <Area position="date*sumTested" />
              <Axis name="sumTested" grid={null} />
              <Axis name="date" grid={null} label={label} />
            </Chart>
          </ChartCard>
        </Loading>
        <Loading isLoading={monthlyLoading}>
          <ChartCard
            title="Ukupan broj pozitivno registrovanih"
            value={lastRecord?.sumPositive}
            change={
              lastRecord
                ? {
                    value: lastRecord?.percentOfInfectedSumComparedWithTestedSum,
                    description: "ukupno testiranih lica",
                  }
                : undefined
            }
          >
            <Chart scale={getMonthlyScaleConfig("sumPositive")} height={200} data={data} autoFit>
              <Area position="date*sumPositive" />
              <Axis name="sumPositive" grid={null} />
              <Axis name="date" grid={null} label={label} />
            </Chart>
          </ChartCard>
        </Loading>
      </div>
      <div className="grid-1x1">
        <Loading isLoading={monthlyLoading}>
          <ChartCard
            title="Ukupan broj lica na respiratoru"
            value={lastRecord?.onRespiratorForDate}
            change={
              lastRecord
                ? {
                    value: lastRecord?.percentOnRespiratorComparedWithHospitalizedForDate,
                    description: "pozitivnih lica u poslednja 24h",
                  }
                : undefined
            }
          >
            <Chart scale={getMonthlyScaleConfig("onRespiratorForDate")} height={200} data={data} autoFit>
              <Area position="date*onRespiratorForDate" />
              <Axis name="onRespiratorForDate" grid={null} />
              <Axis name="date" grid={null} label={label} />
            </Chart>
          </ChartCard>
        </Loading>
      </div>
    </div>
  );
}
