import { IRootState, createSelector } from "@web/core/redux";

import { APPS_SCOPE, initialState } from "./constants";
import { AppsState } from "./types";

export const selectState = (state: IRootState): AppsState => state?.[APPS_SCOPE] || initialState;

export const selectLoading = createSelector([selectState], (state: AppsState) => {
  return state.loading;
});
