import { IRootState, createSelector } from "@web/core/redux";

import { OPEN_SOURCE_SCOPE, initialState } from "./constants";
import { OpenSourceState } from "./types";

export const selectState = (state: IRootState): OpenSourceState => state?.[OPEN_SOURCE_SCOPE] || initialState;

export const selectDailyStatistic = createSelector([selectState], (state: OpenSourceState) => {
  return state.daily;
});
export const selectMonthlyStatistic = createSelector([selectState], (state: OpenSourceState) => {
  return state.monthly;
});

export const selectLoading = createSelector([selectState], (state: OpenSourceState) => {
  return state.loading;
});
