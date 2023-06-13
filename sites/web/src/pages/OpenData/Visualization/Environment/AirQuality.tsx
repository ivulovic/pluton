import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { FormattedMessage } from "@web/core/intl";
import { useDispatch, useSelector } from "@web/core/redux";

import { getAirQualityStatus, metrics } from "../constants";
import { selectAirQuality } from "../selectors";
import { actions } from "../slice";
import withVisualizationLinks from "../withVisualizationLinks";

function AirQuality(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getAirQuality());
  }, []);

  const [filter, setFilter] = useState("all");
  const airQualityData = useSelector(selectAirQuality);

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value);
  };

  const dataArr = useMemo(() => {
    if (!airQualityData) {
      return [];
    }
    return filter === "all" ? airQualityData.data : airQualityData.data.filter((x) => x.station.city === filter);
  }, [filter, airQualityData]);

  const options = useMemo(() => {
    const arr: Array<string> = [];
    if (!airQualityData) {
      return arr;
    }
    airQualityData.data.forEach(({ station: { city } }) => {
      if (!arr.includes(city)) {
        arr.push(city);
      }
    });
    return arr;
  }, [airQualityData]);

  const t = (s: string): JSX.Element => <FormattedMessage id={`openSource.${s}`} />;

  return (
    <div className="info-content">
      <h1 className="section-title">Kvalitet vazduha</h1>
      <h3 className="section-subtitle">Podaci o zagađenju vazduha u mestima u kojima su postavljene merne stanice.</h3>

      <div className="divider"></div>
      <div className="filter">
        <select className="select" onChange={handleFilterChange} value={filter}>
          <option value="all">{t("allCities")}</option>
          {options.map((x) => (
            <option key={x} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
      <table className="table">
        <thead>
          <th align="left">{t("city")}</th>
          <th align="left">{t("stationPlace")}</th>
          <th align="left">{t("status")}</th>
          <th align="right">{t("value")}</th>
        </thead>
        <tbody>
          {dataArr.map((x) => {
            return (
              <tr key={x.station.id} className="table-row">
                <td align="left">{x.station.city.toUpperCase()}</td>
                <td align="left">{x.station.name}</td>
                <td align="left">{t(getAirQualityStatus(x.value))}</td>
                <td align="right">{x.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="table">
        <thead>
          <th align="left">{t("status")}</th>
          <th align="right">{t("value")}</th>
        </thead>
        <tbody>
          {metrics.map(([from, to], i) => {
            const isLast = metrics.length - 1 === i;
            return (
              <tr key={i} className="table-row">
                <td align="left">{t(getAirQualityStatus(from))}</td>
                <td align="right">
                  {isLast && (
                    <>
                      {from} {t("moreThan")}
                    </>
                  )}
                  {!isLast && (
                    <>
                      {from}
                      {" - "}
                      {to}
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default withVisualizationLinks(AirQuality);
