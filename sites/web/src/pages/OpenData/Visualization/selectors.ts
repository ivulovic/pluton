import { IRootState, createSelector } from "@web/core/redux";

import { INFO_SCOPE, initialState } from "./constants";
import { InfoState } from "./types";

export const selectState = (state: IRootState): InfoState => state?.[INFO_SCOPE] || initialState;

export const selectDailyStatistic = createSelector([selectState], (state: InfoState) => {
  return state.daily;
});

export const selectMonthlyStatistic = createSelector([selectState], (state: InfoState) => {
  return state.monthly;
});

export const selectAmbulances = createSelector([selectState], (state: InfoState) => {
  return state.ambulances;
});

export const selectAirQuality = createSelector([selectState], (state: InfoState) => {
  return state.airQuality;
});

export const selectLoading = createSelector([selectState], (state: InfoState) => {
  return state.loading;
});
