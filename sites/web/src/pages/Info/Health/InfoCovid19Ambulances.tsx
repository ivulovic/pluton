import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

import { FormattedMessage } from "@web/core/intl";
import { useDispatch, useSelector } from "@web/core/redux";

import { selectAmbulances } from "../selectors";
import { actions } from "../slice";

export default function InfoCovid19Ambulances(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCovid19Ambulances());
  }, []);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState("all");
  const ambulancesData = useSelector(selectAmbulances);

  const toggleExpanded = (id: number): void => {
    const obj = { ...(expanded || {}) };
    if (obj[id]) {
      obj[id] = false;
    } else {
      obj[id] = true;
    }
    setExpanded(obj);
  };
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setFilter(e.target.value);
  };

  const dataArr = useMemo(() => {
    if (!ambulancesData) {
      return [];
    }
    return filter === "all" ? ambulancesData.data : ambulancesData.data.filter((x) => x.city === filter);
  }, [filter, ambulancesData]);

  const options = useMemo(() => {
    const arr: Array<string> = [];
    if (!ambulancesData) {
      return arr;
    }
    ambulancesData.data.forEach(({ city }) => {
      if (!arr.includes(city)) {
        arr.push(city);
      }
    });
    return arr;
  }, [ambulancesData]);

  const t = (s: string): JSX.Element => <FormattedMessage id={`openSource.${s}`} />;

  return (
    <div className="info-content">
      <h1 className="section-title">COVID-19 ambulante</h1>
      <h3 className="section-subtitle">Podaci o zdravstvenim ustanovama koje rade u COVID-19 režimu.</h3>

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
          <th align="left">{t("name")}</th>
          <th align="left">{t("streetName")}</th>
        </thead>
        <tbody>
          {dataArr.map((x) => {
            const [workingDays] = x.memo.split("\n");
            const [, workDaysWorkTime] = workingDays.split(":");
            const [, weekendWorkTime] = workingDays.split(":");
            return (
              <>
                <tr className="table-row" key={x.id} onClick={(): void => toggleExpanded(x.id)}>
                  <td>
                    <span>{expanded[x.id] ? <BiChevronDown /> : <BiChevronRight />}</span> {x.city}
                  </td>
                  <td>{x.name}</td>
                  <td>
                    {x.street} {x.homeNo}
                  </td>
                </tr>
                {expanded[x.id] ? (
                  <tr className="subrow-container">
                    <td className="subrow" colSpan={3}>
                      <p>
                        <span>{t("weekdayWorkHours")}:</span>
                        <span>
                          {workDaysWorkTime}
                          {t("hourShort")}
                        </span>
                      </p>
                      <p>
                        <span>{t("weekendWorkHours")}:</span>
                        <span>
                          {weekendWorkTime}
                          {t("hourShort")}
                        </span>
                      </p>
                      {x.phone1 ? (
                        <p>
                          <span>{t("phone")}:</span>
                          <a href={`tel:${x.phone1}`}>{x.phone1}</a>
                        </p>
                      ) : null}
                      {x.phone2 ? (
                        <p>
                          <span>{t("phone")}:</span>
                          <a href={`tel:${x.phone2}`}>{x.phone2}</a>
                        </p>
                      ) : null}
                      <p>
                        <span>{t("map")}:</span>
                        <a target="_blank" href={`https://maps.google.com/?q=${x.latitude},${x.longitude}`} rel="noreferrer">
                          {t("viewInMapApp")}
                        </a>
                      </p>
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
