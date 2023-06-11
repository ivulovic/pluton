import { OpenSourceState } from "./types";

export const OPEN_SOURCE_SCOPE = "open-source";

export const initialState: OpenSourceState = {
  loading: {
    daily: false,
    monthly: false,
  },
  daily: undefined,
  monthly: undefined,
};

export const TimeUnit = {
  Day: (24 * 60 * 60 + 1) * 1000,
  Month: (24 * 60 * 60 + 1) * 1000 * 30,
};
