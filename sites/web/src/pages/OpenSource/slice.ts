import { PayloadAction, createSlice } from "@web/core";

import { OPEN_SOURCE_SCOPE, initialState } from "./constants";
import { DailyData, MonthlyData } from "./types";

const slice = createSlice({
  name: OPEN_SOURCE_SCOPE,
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
  },
});

export const { actions, reducer } = slice;
