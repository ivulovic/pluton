import { Area, Axis, Chart } from "bizcharts";
import { useMemo } from "react";

import { useSelector } from "@web/core/redux";
import { selectDailyStatistic, selectLoading } from "@web/pages/Info/selectors";

import ChartCard from "./ChartCard";
import Loading from "./Loading";
import { DailyCase } from "./types";

export default function RecentCases(): JSX.Element {
  const { daily: dailyLoading } = useSelector(selectLoading);
  const dailyStatistic = useSelector(selectDailyStatistic);
  const label = {
    autoRotate: true,
    style: {
      fontSize: 8,
    },
  };
  const [data, lastRecord] = useMemo(() => {
    if (!dailyStatistic) {
      return [[], undefined];
    }
    const daily = Object.values(dailyStatistic.data);
    const lastActiveDate = daily ? new Date(daily[daily.length - 1]?.date) : new Date();
    const currentMonthDailyData: Array<DailyCase> = [];

    for (let i = daily.length - 1; i >= 0; i--) {
      const { date } = daily[i];
      const dateObj = new Date(date);
      if (dateObj.getMonth() < lastActiveDate.getMonth()) {
        break;
      }
      currentMonthDailyData.unshift(daily[i]);
    }

    const lastRecord = daily[daily.length - 1] || daily[daily.length - 2] || daily[daily.length - 3];
    return [currentMonthDailyData, lastRecord];
  }, [dailyStatistic]);

  const scale = {
    date: {
      range: [0, 1],
      type: "time",
      nice: true,
      tickCount: data.length,
    },
  };

  const getDailyScaleConfig = (key: keyof DailyCase): any => {
    if (!data) {
      return scale;
    }
    // const min = Math.min(...currentMonthDailyData.map((x) => x[key]));
    return {
      ...scale,
      [key]: {
        nice: true,
        tickCount: data.length,
      },
    };
  };

  return (
    <div>
      <h3 className="section-subtitle">Podaci za poslednje uneti zapis {lastRecord?.date}</h3>

      <div className="grid-2x2">
        <Loading isLoading={dailyLoading}>
          <ChartCard title="Broj testiranih" value={lastRecord?.testedForDate}>
            <Chart scale={getDailyScaleConfig("testedForDate")} height={200} data={data} autoFit>
              <Area position="date*testedForDate" />
              <Axis name="testedForDate" grid={null} />
              <Axis name="date" grid={null} label={label} />
            </Chart>
          </ChartCard>
        </Loading>
        <Loading isLoading={dailyLoading}>
          <ChartCard
            title="Broj potvrdjenih"
            value={lastRecord?.positiveForDate}
            change={
              lastRecord
                ? {
                    value: lastRecord?.percentOfInfectedComparedWithTestedForDate,
                    description: "testiranih",
                  }
                : undefined
            }
          >
            <Chart scale={getDailyScaleConfig("positiveForDate")} height={200} data={data} autoFit>
              <Area position="date*positiveForDate" />
              <Axis name="positiveForDate" grid={null} />
              <Axis
                name="date"
                grid={null}
                label={{
                  autoRotate: true,
                  style: {
                    fontSize: 10,
                  },
                }}
              />
            </Chart>
          </ChartCard>
        </Loading>
        <Loading isLoading={dailyLoading}>
          <ChartCard
            title="Broj hospitalizovanih"
            value={lastRecord?.hospitalizedForDate}
            change={
              lastRecord
                ? {
                    value: lastRecord?.percentOfHospitalizedComparedWithInfectedSumForDate,
                    description: "ukupno pozitivnih",
                  }
                : undefined
            }
          >
            <Chart scale={getDailyScaleConfig("hospitalizedForDate")} height={200} data={data} autoFit>
              <Area position="date*hospitalizedForDate" />
              <Axis name="date" grid={null} />
              <Axis name="hospitalizedForDate" grid={null} />
            </Chart>
          </ChartCard>
        </Loading>
        <Loading isLoading={dailyLoading}>
          <ChartCard title="Broj preminulih" value={lastRecord?.deathsForDate}>
            <Chart scale={getDailyScaleConfig("deathsForDate")} height={200} data={data} autoFit>
              <Area position="date*deathsForDate" />
              <Axis name="deathsForDate" grid={null} />
              <Axis
                name="date"
                grid={null}
                label={{
                  autoRotate: true,
                  style: {
                    fontSize: 10,
                  },
                }}
              />
            </Chart>
          </ChartCard>
        </Loading>
      </div>
    </div>
  );
}
