import { PayloadAction, createSlice } from "@web/core";

import { INFO_SCOPE, initialState } from "./constants";
import { AmbulancesData, DailyData, MonthlyData, AirQualityData } from "./types";

const slice = createSlice({
  name: INFO_SCOPE,
  initialState,
  reducers: {
    getCovid19DailyStatistic: (state) => {
      state.loading.daily = true;
    },
    getCovid19DailyStatisticDone: (state, action: PayloadAction<DailyData>) => {
      state.loading.daily = false;
      state.daily = action.payload;
    },
    getCovid19MonthlyStatistic: (state) => {
      state.loading.monthly = true;
    },
    getCovid19MonthlyStatisticDone: (state, action: PayloadAction<MonthlyData>) => {
      state.loading.monthly = false;
      state.monthly = action.payload;
    },
    getCovid19Ambulances: (state) => {
      state.loading.ambulances = true;
    },
    getCovid19AmbulancesDone: (state, action: PayloadAction<AmbulancesData>) => {
      state.loading.ambulances = false;
      state.ambulances = action.payload;
    },
    getAirQuality: (state) => {
      state.loading.airQuality = true;
    },
    getAirQualityDone: (state, action: PayloadAction<AirQualityData>) => {
      state.loading.airQuality = false;
      state.airQuality = action.payload;
    },
  },
});

export const { actions, reducer } = slice;
