import { InfoState } from "./types";

export const INFO_SCOPE = "info";

export const initialState: InfoState = {
  loading: {
    daily: false,
    monthly: false,
    ambulances: false,
    airQuality: false,
  },
  daily: undefined,
  monthly: undefined,
  ambulances: undefined,
  airQuality: undefined,
};

export const TimeUnit = {
  Day: (24 * 60 * 60 + 1) * 1000,
  Month: (24 * 60 * 60 + 1) * 1000 * 30,
};

const metricsMap: Record<number, string> = {
  0: "perfect",
  1: "good",
  2: "acceptable",
  3: "polluted",
  4: "hazardous",
};

// http://www.amskv.sepa.gov.rs/kriterijumi.php
export const metrics = [
  [0, 15],
  [15.01, 30],
  [30.01, 55],
  [55.01, 110],
  [110.01, 1000000],
];

// http://data.sepa.gov.rs/api/3/action/datastore_search?resource_id=a8f71ec0-0a68-4d4f-8f37-ceabdcb98569&q=2021-12-15T23:00:00&filters={%22component_id%22:6001}

const isBetween = (number: number, comparer: Array<number>): boolean => {
  const [c1, c2] = comparer;
  return number >= c1 && number <= c2;
};

export const getAirQualityStatus = (value: number): string => {
  const i = metrics.findIndex((x) => isBetween(value, x));
  return metricsMap[i];
};
