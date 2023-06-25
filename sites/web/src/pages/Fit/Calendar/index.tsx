import { useEffect, useMemo, useRef } from "react";

import useDate from "@web/hooks/useDate";

import "./style.scss";
import { CalendarProps } from "../types";

export default function Calendar(props: CalendarProps): JSX.Element {
  const date = new Date();
  const dateUtils = useDate();
  const daysRef = useRef<any>([]);
  const calendarRef = useRef<any>();
  const currentDate = props.date;

  const onSelect = (day: number): void => {
    props.onSelect(day);
  };

  const days = useMemo(() => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const totalDaysInMonth = dateUtils.getDaysInMonth(month, year);
    const daysInMonth = [];
    for (let i = 1; i <= totalDaysInMonth; i++) {
      daysInMonth.push(i);
    }
    return daysInMonth;
  }, []);

  useEffect(() => {
    const active = daysRef.current[currentDate - 1];
    const value = calendarRef.current.clientWidth >= 960 ? calendarRef.current.offsetWidth / 2 : 0;
    // maybe: if is already in view dont scroll
    calendarRef.current.scrollLeft = active.offsetLeft + active.clientWidth / 2 - calendarRef.current.clientWidth / 2 - value;
  }, [currentDate]);
  return (
    <div className="calendar" ref={calendarRef}>
      {days.map((day, i) => (
        <button
          ref={(r): void => {
            daysRef.current[i] = r;
          }}
          onClick={(): void => onSelect(day)}
          className={`day ${currentDate === day ? "active" : ""} `}
          key={day}
        >
          {dateUtils.withZero(day)}
        </button>
      ))}
    </div>
  );
}
