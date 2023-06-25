export default function useDate(): any {
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getDayTimestamp = (day: number = new Date().getDate(), month: number = new Date().getMonth(), year: number = new Date().getFullYear()): number => {
    return new Date(year, month, day).setHours(0, 0, 0, 0);
  };

  const withZero = (date: number): string => `0${date}`.slice(-2);

  const getClosestTime = () => {
    const times = ["07:00 AM", "10:00 AM", "01:00 PM", "04:00 PM", "07:00 PM"];

    const currentTime = new Date();
    const timeDiff: Array<{ hour: string; diff: number }> = [];

    times.sort((a, b) => {
      return a.indexOf("PM");
    });

    times.filter((time) => {
      const _meridianPosition = time.indexOf("AM") > -1 ? "AM" : "PM";

      let _time = parseInt(time);

      if (_meridianPosition === "PM" && _time !== 12) {
        _time += 12;
      } else if (_meridianPosition === "AM" && _time === 12) {
        _time = 0;
      }

      const k = Math.abs(currentTime.getHours() - _time);
      timeDiff.push({ hour: time, diff: k });
    });

    timeDiff.sort((a, b) => {
      return a.diff - b.diff;
    });

    return timeDiff;
  };

  return {
    getDaysInMonth,
    withZero,
    getClosestTime,
    getDayTimestamp,
  };
}
